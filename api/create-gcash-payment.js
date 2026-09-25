export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { cart, customer } = req.body;
  if (!cart?.length) return res.status(400).json({ error: "Cart is empty" });

  const origin = process.env.SITE_URL || `https://${req.headers.host}`;

  try {
    const response = await fetch("https://api.paymongo.com/v1/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + Buffer.from(process.env.PAYMONGO_SECRET_KEY + ":").toString("base64"),
      },
      body: JSON.stringify({
        data: {
          attributes: {
            line_items: cart.map((i) => ({
              currency: "PHP",
              amount: Math.round(i.price * 100),
              name: i.name,
              quantity: i.qty,
            })),
            payment_method_types: ["gcash"],
            billing: { name: customer.name, phone: customer.phone },
            description: `Sifubi Co. order — ${customer.address}`,
            success_url: `${origin}/success`,
            cancel_url: `${origin}/cart`,
          },
        },
      }),
    });

    const json = await response.json();
    if (!response.ok) return res.status(400).json({ error: json.errors?.[0]?.detail || "PayMongo error" });

    res.status(200).json({ checkout_url: json.data.attributes.checkout_url });
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
}
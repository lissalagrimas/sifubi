import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, updateQty, removeItem, total } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const payWithGcash = async () => {
    if (!form.name || !form.phone || !form.address) return alert("Please fill in all details.");
    setLoading(true);
    try {
      const res = await fetch("/api/create-gcash-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, customer: form }),
      });
      const data = await res.json();
      if (data.checkout_url) window.location.href = data.checkout_url;
      else alert(data.error || "Payment failed.");
    } catch {
      alert("Something went wrong.");
    }
    setLoading(false);
  };

  if (cart.length === 0)
    return (
      <section className="cart-page wrap cart-empty">
        <p className="eyebrow">Your Cart</p>
        <h1>Nothing here yet</h1>
        <p className="cart-empty__text">Add some crispy siomai to get started!</p>
        <Link to="/menu" className="cta-btn">Browse the Menu</Link>
      </section>
    );

  return (
    <section className="cart-page wrap">
      <p className="eyebrow">Your Cart</p>
      <h1>Ready to Order?</h1>

      <div className="cart-list">
        {cart.map((i) => (
          <div className="cart-row" key={i.id}>
            <div className="cart-row__thumb">
              {i.image ? <img src={i.image} alt={i.name} /> : <span>{i.emoji}</span>}
            </div>
            <div className="cart-row__info">
              <strong>{i.name}</strong>
              <span>{i.unit ? `${i.unit} · ` : ""}₱{i.price.toFixed(2)}</span>
            </div>
            <div className="cart-row__qty">
              <button onClick={() => updateQty(i.id, i.qty - 1)} aria-label="Decrease">−</button>
              <span>{i.qty}</span>
              <button onClick={() => updateQty(i.id, i.qty + 1)} aria-label="Increase">+</button>
            </div>
            <strong className="cart-row__sub">₱{(i.price * i.qty).toFixed(2)}</strong>
            <button className="cart-row__remove" onClick={() => removeItem(i.id)} aria-label="Remove">✕</button>
          </div>
        ))}
      </div>

      <h2 className="cart-total">Total: <span>₱{total.toFixed(2)}</span></h2>

      <div className="cart-form">
        <h3>Delivery Details</h3>
        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
        <input name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} />
        <textarea name="address" placeholder="Address" rows="3" value={form.address} onChange={handleChange} />
        <button className="cta-btn" onClick={payWithGcash} disabled={loading}>
          {loading ? "Redirecting to GCash..." : "Pay with GCash"}
        </button>
      </div>
    </section>
  );
}
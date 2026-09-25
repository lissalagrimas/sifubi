import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <section className="wrap" style={{ textAlign: "center", padding: "4rem 24px" }}>
      <p className="eyebrow">Order Received</p>
      <h1>Thank you! 🎉</h1>
      <p style={{ margin: "0.8rem 0 1.8rem", color: "var(--navy-soft)" }}>
        We'll get your order frying right away!
      </p>
      <Link to="/menu" className="cta-btn">Back to Menu</Link>
    </section>
  );
}
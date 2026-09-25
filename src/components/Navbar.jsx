import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Dashboard" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner wrap">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src="/logo.jpg" alt="Sifubi Co." className="navbar__mark" />
          <span className="navbar__brand-text">
            Sifubi Co.
            <span className="navbar__brand-sub">Siomai Fusion Bites</span>
          </span>
        </NavLink>

        <button
          className={`navbar__toggle ${open ? "navbar__toggle--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/cart"
            onClick={() => setOpen(false)}
            aria-label={`Cart, ${count} items`}
            className={({ isActive }) =>
              `navbar__link navbar__cart ${isActive ? "navbar__link--active" : ""}`
            }
          >
            Cart
            {count > 0 && <span className="navbar__cart-badge">{count}</span>}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
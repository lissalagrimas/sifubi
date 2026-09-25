import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Siomai Fusion Bites</p>
      <p className="footer__fine">&copy; {new Date().getFullYear()} Sifubi Co. All rights reserved.</p>
    </footer>
  );
}

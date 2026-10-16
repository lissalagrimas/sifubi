import SteamDivider from "../components/SteamDivider";
import { FaFacebookF, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import "./About.css";

const FEATURES = [
  {
    image: "/images/sample-1.jpg",
    tint: "var(--sky)",
    title: "How it started",
    text: "SIFUBI CO. (Siomai Fusion Bites) is an innovative food business conceptualized by seven shareholders in January 2026. Our goal is to reinvent traditional siomai by offering unique and flavorful options inspired by local and international cuisines.",
  },
  {
    image: "/images/sample-2.jpg",
    tint: "var(--yellow)",
    title: "Our flavors",
    text: "We offer three exciting flavors: Shawarma Beef Siomai, Chicken Pastil Siomai, and Shrimp Siomai, providing customers with delicious, affordable, and creative alternatives to ordinary siomai. We are committed to quality, customer satisfaction, and making every bite enjoyable.",
    reverse: true,
  },
  {
    image: "/images/sample-3.jpg",
    tint: "var(--pink)",
    title: "Our mission",
    text: "Guided by our tagline, “Wraps Your Taste Buds in Joy,” SIFUBI CO. aims to bring happiness and a memorable food experience to every customer through our unique fusion of flavors.",
  },
];

export default function About() {
  return (
    <section className="about-page">
      <header className="about-page__header wrap">
        <p className="eyebrow">About Us</p>
        <h1>The story behind Sifubi Co.</h1>
        <p className="about-page__subtitle">
          Sifubi — Siomai Fusion Bites
        </p>
      </header>

      <div className="wrap">
        {FEATURES.map((f, i) => (
          <div key={f.title}>
            <div className={`feature-row ${f.reverse ? "feature-row--reverse" : ""}`}>
              <div className="feature-row__icon" style={{ background: f.tint }}>
                <img src={f.image} alt={f.title} />
              </div>
              <div className="feature-row__text">
                <h2>{f.title}</h2>
                <p>{f.text}</p>
              </div>
            </div>
            {i < FEATURES.length - 1 && <SteamDivider color="var(--sky)" />}
          </div>
        ))}
      </div>

      <SteamDivider color="var(--yellow)" />

      <section className="team-section wrap">
        <p className="eyebrow">Meet the Team</p>
        <h2>The people behind Sifubi Co.</h2>
        <div className="team-photos">
          <div className="team-photo">
            <img src="/images/team-photo1.jpg" alt="Sifubi Co. team photo 1" />
          </div>
          <div className="team-photo">
            <img src="/images/team-photo2.jpg" alt="Sifubi Co. team photo 2" />
          </div>
        </div>
      </section>

      <SteamDivider color="var(--sky)" />

      <section className="credentials-section wrap">
        <p className="eyebrow">Registered Business</p>
        <h2>Our Credentials</h2>
        <div className="credentials-grid">
          <div className="credential-card">
            <img src="/images/dti-certificate.jpg" alt="DTI Registration Certificate" />
          </div>
          <div className="credential-card">
            <img src="/images/business-certificate.jpg" alt="Business Certificate" />
          </div>
        </div>
      </section>

      <section className="contact-section">
        <p className="eyebrow">Get in Touch</p>
        <h2>Craving some siomai?</h2>
        <p className="contact-section__lead">Reach out and we'll take it from there.</p>
        <p className="contact-line">📞 09623973424</p>
        <p className="contact-line">
  📍#1071 Brgy. Kaligayahan Quirino  <br />
    Hi-Way Novaliches, Quezon City
</p>

        <div className="social-icons">
          
          <a href="mailto:siomaifusionbites@gmail.com"
            className="social-icon"
            aria-label="Email Sifubi Co."
          >
            <FaEnvelope />
          </a>

          <a href="https://www.facebook.com/share/1HtRfVe3sS/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="Sifubi Co. on Facebook"
          >
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/sifubi.co_ph?igsh=NGVxZmI3ZGh6czE1"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="Sifubi Co. on Instagram"
          >
            <FaInstagram />
          </a>

          <a href="https://www.tiktok.com/@siomai.fusionbites?_r=1&_t=ZS-98iMXmPe6xY"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="Sifubi Co. on TikTok"
          >
            <FaTiktok />
          </a>
        </div>
      </section>
    </section>
  );
}
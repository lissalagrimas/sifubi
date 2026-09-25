import SteamDivider from "../components/SteamDivider";
import { FaFacebookF, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import "./About.css";

//hindi pa naeedit
const FEATURES = [
//papalitan pa to here ha
  {
    icon: "🦐",
    tint: "var(--sky)",
    title: "Only real ingredients",
    text: "Real pork, real shrimp, real fish — no fillers, no artificial shortcuts.",
  },
  {
    icon: "🥟",
    tint: "var(--yellow)",
    title: "Steamed to order",
    text: "Every batch is steamed fresh so you always get it hot, juicy, and never dried out.",
    reverse: true,
  },
  {
    icon: "❤️",
    tint: "var(--pink)",
    title: "A small business, made with care",
    text: "Every batch is made in small quantities so quality never gets lost in the process.",
  },
];

export default function About() {
  return (
    <section className="about-page">
      <header className="about-page__header wrap">
        <p className="eyebrow">About Us</p>
        <h1>The story behind Sifubi Co.</h1>
        <p className="about-page__subtitle">
          Sifubi — short for Siomai Fusion Bites — started with one idea: siomai made the way it
          should be, steamed fresh and never rushed.
        </p>
      </header>

      <div className="wrap">
        {FEATURES.map((f, i) => (
          <div key={f.title}>
            <div className={`feature-row ${f.reverse ? "feature-row--reverse" : ""}`}>
              <div className="feature-row__icon" style={{ background: f.tint }}>
                {f.icon}
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
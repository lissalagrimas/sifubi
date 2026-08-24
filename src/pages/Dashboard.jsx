import { Link } from "react-router-dom";
import SteamDivider from "../components/SteamDivider";
import ProductCard from "../components/ProductCard";
import IntroLamp from "../components/IntroLamp";
import { siomai } from "../data/products";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <header className="hero">
        <h1>
          Siomai Fusion Bites
        </h1>
        <p className="hero__subtitle">
          Wrap your taste buds in joy.
        </p>

        <IntroLamp />

        <div className="hero__actions">
          <Link to="/menu" className="cta-btn">
            See our menu
          </Link>
          <Link to="/about" className="cta-btn cta-btn--ghost">
            Our story
          </Link>
        </div>

        <div className="collage">
          <div className="collage__card collage__card--1">
            <img src="/images/sample-1.jpg" alt="Siomai" />
          </div>
          <div className="collage__card collage__card--2">
            <img src="/images/sample-3.jpg" alt="Shrimp" />
          </div>
          <div className="collage__card collage__card--3">
            <img src="/images/sample-2.jpg" alt="Rice" />
          </div>
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <span className="blob blob-c" />
        </div>
      </header>

      <SteamDivider color="var(--sky)" />

      <section className="preview wrap">
        <p className="eyebrow">A taste of the menu</p>
        <h2>Fresh, every single day</h2>
        <div className="preview__grid">
          {siomai.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
        <Link to="/menu" className="cta-btn preview__cta">
          View full menu
        </Link>
      </section>
    </>
  );
}
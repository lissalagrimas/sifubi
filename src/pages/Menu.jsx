import SteamDivider from "../components/SteamDivider";
import ProductCard from "../components/ProductCard";
import { siomai, drinks, addOns } from "../data/products";
import "./Menu.css";

const SECTIONS = [
  { id: "siomai", title: "Signature Siomai", items: siomai, divider: "var(--yellow)" },
  { id: "drinks", title: "Drinks", items: drinks, divider: "var(--sky)" },
  { id: "add-ons", title: "Add-ons", items: addOns, divider: "var(--pink)" },
];

export default function Menu() {
  return (
    <section className="menu-page wrap">
      <header className="menu-page__header">
        <p className="eyebrow">Our Menu</p>
        <h1>What’s Crispy Today?</h1>
        <p className="menu-page__subtitle">
          Fried fresh in small batches. Hot, crispy, and made to order—never sitting around.
        </p>
      </header>

      <SteamDivider color="var(--yellow)" />

      {SECTIONS.map((section, i) => (
        <div className="menu-section" key={section.id}>
          <h2 className="menu-section__title">{section.title}</h2>
          <div className="menu-page__grid">
            {section.items.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </div>
          {i < SECTIONS.length - 1 && <SteamDivider color={section.divider} />}
        </div>
      ))}

      <p className="menu-page__note">
        Prices shown are per order. Ask about bulk trays for parties and events!
      </p>

      <SteamDivider color="var(--pink)" />

            <div className="loyalty-section">
        <div className="loyalty-card">
          <img
            src="/images/loyalty-card.jpg"
            alt="Sifubi Co. loyalty stamp card — collect 10 stamps for a free menu item"
          />
        </div>

        <div className="loyalty-terms">
          <p className="loyalty-terms__title">Terms and Conditions</p>
          <ul>
            <li>Your coupon has no expiration.</li>
            <li>Your coupon will get one stamp for every transaction, regardless of how many items you buy.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
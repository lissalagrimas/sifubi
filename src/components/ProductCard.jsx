import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { name, price, unit, description, emoji, image, tint } = product;

  return (
    <div className="product-card">
      <div className="product-card__photo">
        {image ? (
          <img src={image} alt={name} className="product-card__img" />
        ) : (
          <span className="product-card__emoji">{emoji}</span>
        )}
      </div>
      <div className="product-card__info">
        <h3>{name}</h3>
        <p className="product-card__price">
          {unit ? `${unit} · ` : ""}₱{price.toFixed(2)}
        </p>
        <p className="product-card__desc">{description}</p>
      </div>
    </div>
  );
}
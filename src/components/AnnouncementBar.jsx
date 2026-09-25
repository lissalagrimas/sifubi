import "./AnnouncementBar.css";

const ITEMS = [
  "Siomai Fusion Bites",
  "Wrap your taste buds",
  "Shawarma Beef Siomai",
  "Chicken Pastil Siomai",
  "Shrimp Siomai",
  "Shawarma Beef Siomai Rice",
  "Chicken Pastil Siomai Rice",
  "Shrimp Siomai Rice",
  "Creamy Cheese Sauce",
  "Shawarma Sauce",
  "Sweet Spicy Sauce",
];

export default function AnnouncementBar() {
  // Duplicate the list so the scroll loop is seamless
  const marqueeItems = [...ITEMS, ...ITEMS];

  return (
    <div className="announcement-bar">
      <div className="announcement-bar__track">
        {marqueeItems.map((item, i) => (
          <span className="announcement-bar__item" key={i}>
            {item}
            <span className="announcement-bar__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
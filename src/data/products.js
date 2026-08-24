// Menu data sourced from the SIFUBI CO. business plan manuscript
// (Table 1.3 Product Offering, Table 1.5 Add-ons Offering).

export const siomai = [
  {
    id: "shawarma",
    name: "Shawarma Beef Siomai",
    price: 70,
    description:
      "Shawarma Beef Siomai, inspired by the savory and aromatic flavors of Middle Eastern shawarma.",
    image: "/images/siomai-shawarma.jpg",
    tint: "var(--pink)",
  },
  {
    id: "pastil",
    name: "Chicken Pastil Siomai",
    price: 80,
    description:
      "Chicken Pastil Siomai, influenced by the distinct taste of a beloved Mindanao comfort dish.",
    image: "/images/siomai-pastil.jpg",
    tint: "var(--yellow)",
    tag: "Best seller",
  },
  {
    id: "shrimp",
    name: "Shrimp Siomai",
    price: 75,
    description:
      "Shrimp Siomai, offering a fresh, seafood-forward option for customers who prefer lighter protein choices.",
    image: "/images/siomai-shrimp.jpg",
    tint: "var(--sky)",
  },
];

export const drinks = [
  {
    id: "cucumber",
    name: "Cucumber-Mazing",
    price: 35,
    unit: "16oz",
    description: "A refreshing drinks beverage made with cucumber powder by dehydrating and finely milling fresh cucumbers.",
    image: "/images/cucumber.jpg",
    tint: "var(--sky)",
  },
];

export const addOns = [
  {
    id: "creamy-cheese",
    name: "Creamy Cheese Sauce",
    price: 20,
    description: "A comforting and savory creamy cheese.",
    image: "/images/creamy-cheese.jpg",
    tint: "var(--yellow)",
  },
  {
    id: "garlic-mayo",
    name: "Shawarma Sauce",
    price: 15,
    description: "Creamy mayo with a kick of garlicky flavor.",
    image: "/images/shawarma-sauce.jpg",
    tint: "var(--sky)",
  },
  {
    id: "sweet-chili",
    name: "Sweet Spicy Sauce",
    price: 10,
    description: "A sweet and spicy versatile dip glaze with vibrant flavor.",
    image: "/images/sweet-sauce.jpg",
    tint: "var(--pink)",
  },
];

// Kept for anything that still wants "all items" in one flat list.
export const menu = { siomai, drinks, addOns };

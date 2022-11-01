import { ProductCardElements } from "../productCardElements";

const PRODUCTS = [
  {
    category: "Food",
    price: 29.95,
    name: "Large bowl Moog Dhal",
  },
  {
    category: "Food",
    price: 34.95,
    name: "Large chili Kebab",
  },
  {
    category: "Food",
    price: 17.95,
    name: "500g Jar Sauerkraut",
  },
  {
    category: "Food",
    price: 44.95,
    name: "Extra Hot Chicken Vindaloo",
  },
  {
    category: "Food",
    price: 38.95,
    name: "Mexican Bean Dip",
  },
  {
    category: "Food",
    price: 38.95,
    name: "Thai Red Lentil Curry",
  },
  {
    category: "Drinks",
    price: 6.0,
    name: "Pint of Ron's Home Brew",
  },
  {
    category: "Drinks",
    price: 6.0,
    name: "500ml Metamucil",
  },
  {
    category: "Drinks",
    price: 8.95,
    name: "500ml Prune Juice",
  },
  {
    category: "Extras",
    price: 8.95,
    name: "Dr Schulz's Formula #2",
  },
  {
    category: "Extras",
    price: 16.95,
    name: "4-ply Toilet Paper",
  },
  {
    category: "Extras",
    price: 10.0,
    name: "Recent newspaper/magazine",
  },
  {
    category: "Extras",
    price: 25.0,
    name: "Lavender Air Freshener",
  },
];

type ProductCardProps = {};

export const ProductCard = () => {
  return (
    <>
      <div className="productCard">
        <ProductCardElements.FilterableProductTable products={PRODUCTS} />;
      </div>
      <style jsx>{`
        .productCard {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: var(--hintOfBrown);
          border: 2px solid var(--solidBrown);
          border-radius: 10px;
          filter: drop-shadow(8px 8px 12px var(--solidBrown));
          padding: 4px 8px 12px 8px;
        }
      `}</style>
    </>
  );
};
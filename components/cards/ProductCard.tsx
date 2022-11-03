import { ProductCardElements } from "../productCardElements";

const PRODUCTS = [
  {
    category: "Food",
    price: 29.95,
    name: "2x Large bowl Moog Dhal",
  },
  {
    category: "Food",
    price: 34.95,
    name: "1x Large chili Kebab",
  },
  {
    category: "Food",
    price: 17.95,
    name: "1x 500g Jar Sauerkraut",
  },
  {
    category: "Food",
    price: 44.95,
    name: "1x Extra Hot Chicken Vindaloo",
  },
  {
    category: "Food",
    price: 38.95,
    name: "2x Mexican Bean Dip",
  },
  {
    category: "Food",
    price: 38.95,
    name: "1x Thai Red Lentil Curry",
  },
  {
    category: "Drinks",
    price: 6.0,
    name: "4x pints Strong Lager",
  },
  {
    category: "Drinks",
    price: 6.0,
    name: "2x pints Ron's Home Brew",
  },
  {
    category: "Drinks",
    price: 6.0,
    name: "1x 500ml Metamucil",
  },
  {
    category: "Drinks",
    price: 8.95,
    name: "1x 500ml Prune Juice",
  },
  {
    category: "Extras",
    price: 8.95,
    name: "2x pills Dr Schulz's Formula #2",
  },
  {
    category: "Extras",
    price: 16.95,
    name: "4x rolls of 4-ply Toilet Paper",
  },
  {
    category: "Extras",
    price: 10.0,
    name: "Recent newspapers/magazines",
  },
  {
    category: "Extras",
    price: 25.0,
    name: "2x 350ml Lavender Air Freshener",
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
          padding: 4px 8px 40px 8px;
        }
      `}</style>
    </>
  );
};

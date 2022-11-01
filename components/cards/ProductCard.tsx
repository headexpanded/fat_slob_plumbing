import { ProductCardElements } from "../productCardElements";

const PRODUCTS = [
  {
    category: "Food",
    price: 29.95,
    stocked: true,
    name: "Large bowl Moog Dhal",
  },
  {
    category: "Food",
    price: 34.95,
    stocked: true,
    name: "Large chili Kebab",
  },
  {
    category: "Food",
    price: 17.95,
    stocked: true,
    name: "500g Jar Sauerkraut",
  },
  {
    category: "Food",
    price: 44.95,
    stocked: true,
    name: "Extra Hot Chicken Vindaloo",
  },
  {
    category: "Food",
    price: 38.95,
    stocked: true,
    name: "Mexican Bean Dip",
  },
  {
    category: "Food",
    price: 38.95,
    stocked: true,
    name: "Thai Red Lentil Curry",
  },
  { category: "Drinks", price: 8.0, stocked: true, name: "Pint of Lager" },
  {
    category: "Drinks",
    price: 6.0,
    stocked: true,
    name: "Pint of Ron's Home Brew",
  },
  {
    category: "Drinks",
    price: 6.0,
    stocked: true,
    name: "500ml Metamucil",
  },
  {
    category: "Drinks",
    price: 8.95,
    stocked: true,
    name: "500ml Prune Juice",
  },
  {
    category: "Extras",
    price: 8.95,
    stocked: true,
    name: "Dr Schulz's Formula #2",
  },
  {
    category: "Extras",
    price: 16.95,
    stocked: true,
    name: "4-ply Toilet Paper",
  },
  {
    category: "Extras",
    price: 10.0,
    stocked: true,
    name: "Recent newspaper/magazine",
  },
  {
    category: "Extras",
    price: 25.0,
    stocked: true,
    name: "Lavendar Air Freshener",
  },
];

type ProductCardProps = {};

export const ProductCard = () => {
  return <ProductCardElements.FilterableProductTable products={PRODUCTS} />;
};

import { ProductCardElements } from "../productCardElements";

type ProductCardProps = {
  category: string;
  product: {};
};

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCardElements.ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductCardElements.ProductRow product={product} key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <>
      <div>
        <div>Name</div>
        <div>Price</div>
      </div>

      <div>{rows}</div>
    </>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <ProductCardElements.ProductSearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  {
    category: "Food",
    price: "29.95",
    stocked: true,
    name: "Large bowl Moog Dhal",
  },
  {
    category: "Food",
    price: "34.95",
    stocked: true,
    name: "Large chili Kebab",
  },
  {
    category: "Food",
    price: "17.95",
    stocked: true,
    name: "500g Jar Sauerkraut",
  },
  {
    category: "Food",
    price: "44.95",
    stocked: true,
    name: "Extra Hot Chicken Vindaloo",
  },
  {
    category: "Food",
    price: "38.95",
    stocked: true,
    name: "Mexican Bean Dip",
  },
  {
    category: "Food",
    price: "38.95",
    stocked: true,
    name: "Thai Red Lentil Curry",
  },
  { category: "Drinks", price: "8.00", stocked: true, name: "Pint of Lager" },
  {
    category: "Drinks",
    price: "6.00",
    stocked: true,
    name: "Pint of Ron's Home Brew",
  },
  {
    category: "Drinks",
    price: "6.00",
    stocked: true,
    name: "500ml Metamucil",
  },
  {
    category: "Drinks",
    price: "8.95",
    stocked: true,
    name: "500ml Prune Juice",
  },
  {
    category: "Extras",
    price: "8.95",
    stocked: true,
    name: "Dr Schulz's Formula #2",
  },
  {
    category: "Extras",
    price: "16.95",
    stocked: true,
    name: "4-ply Toilet Paper",
  },
  {
    category: "Extras",
    price: "10.00",
    stocked: true,
    name: "Recent newspaper/magazine",
  },
  {
    category: "Extras",
    price: "25.00",
    stocked: true,
    name: "Lavendar AAir Freshener",
  },
];
export const ProductCard = ({ category, product }: ProductCardProps) => {
  return <FilterableProductTable products={PRODUCTS} />;
};

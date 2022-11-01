import { ProductCardElements } from "../productCardElements";

type FilterableProductTableProps = {
  products: [
    {
      category: string;
      name: string;
      price: number;
    }
  ];
};

export const FilterableProductTable = ({
  products,
}: FilterableProductTableProps) => {
  return (
    <div>
      <ProductCardElements.ProductSearchBar />
      <ProductCardElements.ProductTable products={products} />
    </div>
  );
};

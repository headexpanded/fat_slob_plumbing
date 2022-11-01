import { ProductCardElements } from "../productCardElements";

type FilterableProductTableProps = {
  products: any[];
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

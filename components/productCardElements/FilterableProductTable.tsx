import { ProductCardElements } from "../productCardElements";
import { ProductCategorySelect } from "./ProductCategorySelect";

type FilterableProductTableProps = {
  products: any[];
};

export const FilterableProductTable = ({
  products,
}: FilterableProductTableProps) => {
  return (
    <div>
      <ProductCategorySelect />
      <ProductCardElements.ProductTable products={products} />
    </div>
  );
};

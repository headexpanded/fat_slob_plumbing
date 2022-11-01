import { ProductCardElements } from "../productCardElements";
import { ProductCategorySelect } from "./ProductCategorySelect";

type FilterableProductTableProps = {
  products: any[];
};

export const FilterableProductTable = ({
  products,
}: FilterableProductTableProps) => {
  return (
    <>
      <div>
        <div>
          <ProductCategorySelect />
        </div>
        <div className="productTable">
          <ProductCardElements.ProductTable products={products} />
        </div>
      </div>
      <style jsx>{`
        .productTable {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

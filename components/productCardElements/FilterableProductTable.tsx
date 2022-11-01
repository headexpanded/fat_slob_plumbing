import { ProductCardElements } from "../productCardElements";

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
          <ProductCardElements.ProductCategorySelect />
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

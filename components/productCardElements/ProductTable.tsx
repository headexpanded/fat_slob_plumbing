import { ProductCardElements } from "../productCardElements";

type ProductTableProps = {
  products: any[];
};

export const ProductTable = ({ products }: ProductTableProps) => {
  const rows: any[] = [];
  let lastCategory: null = null;

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
      <div>
        <ProductCardElements.ProductCheckBox />
        <ProductCardElements.ProductRow product={product} key={product.name} />
      </div>
    );
    lastCategory = product.category;
  });

  return (
    <>
      <div className="rowDiv">{rows}</div>

      <style jsx>{`
        .colDiv {
          display: flex;
          flex-direction: row;
        }
        .rowDiv {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </>
  );
};

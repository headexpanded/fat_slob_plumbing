import { ProductCardElements } from "../productCardElements";

type ProductTableProps = {
  products: any[];
};

export const ProductTable = ({ products }: ProductTableProps) => {
  const rows: any[] = [];
  let lastCategory: null = null;

  products.forEach((product: { category?: any; name: any; price: number }) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCardElements.ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <>
        <ProductCardElements.ProductSearchBar />
        <ProductCardElements.ProductRow product={product} key={product.name} />
      </>
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

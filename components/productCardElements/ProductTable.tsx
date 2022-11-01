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
};

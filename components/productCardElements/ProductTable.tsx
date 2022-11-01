import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { ProductCardElements } from "../productCardElements";

type ProductTableProps = {
  products: [
    {
      category: string;
      name: string;
      price: number;
    }
  ];
};

export const ProductTable = ({ products }: ProductTableProps) => {
  const rows: any[] = [];
  let lastCategory: string = "";

  products.forEach(
    (item: { category: string; name: string; price: number }) => {
      if (item.category !== lastCategory) {
        rows.push(
          <ProductCardElements.ProductCategoryRow
            category={item.category}
            key={item.category}
          />
        );
      }
      rows.push(<ProductCardElements.ProductRow product={item} />);
      lastCategory = item.category;
    }
  );

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

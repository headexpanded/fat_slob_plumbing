// define a category row for the ProductCard

import { ProductCardElements } from "../productCardElements";

type ProductCategoryRowProps = {
  category: string;
};

export const ProductCategoryRow = ({ category }: ProductCategoryRowProps) => {
  return (
    <>
      <div className="categoryDiv">
        <div>{category}</div>
      </div>
      <style jsx>{`
        .categoryDiv {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </>
  );
};

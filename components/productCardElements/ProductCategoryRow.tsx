// define a category row for the ProductCard

import { Typography } from "../typography";

type ProductCategoryRowProps = {
  category: string;
};

export const ProductCategoryRow = ({ category }: ProductCategoryRowProps) => {
  return (
    <>
      <div className="categoryDiv">
        <div>
          <h3>{category}</h3>
        </div>
      </div>
      <style jsx>{`
        .categoryDiv {
          padding: 20px;
        }
        h3 {
          color: var(--solidBrown);
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          padding: 32px 8px 16px 8px;
        }
      `}</style>
    </>
  );
};

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
          <Typography.ParagraphC content={category} color="var(--solidBrown)" />
        </div>
      </div>
      <style jsx>{`
        .categoryDiv {
          padding: 20px;
        }
      `}</style>
    </>
  );
};

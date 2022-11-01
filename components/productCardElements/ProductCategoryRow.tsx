// define a category row for the Products card

type ProductCategoryRowProps = {
  category: string;
};
export const ProductCategoryRow = ({ category }: ProductCategoryRowProps) => {
  return (
    <div>
      <div>{category}</div>
    </div>
  );
};

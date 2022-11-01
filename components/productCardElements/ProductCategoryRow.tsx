// define a category row for the Products card

type ProductCategoryRowProps = {
  category: string;
  key: string;
};
export const ProductCategoryRow = ({
  category,
  key,
}: ProductCategoryRowProps) => {
  return (
    <div id={key}>
      <div>{category}</div>
    </div>
  );
};

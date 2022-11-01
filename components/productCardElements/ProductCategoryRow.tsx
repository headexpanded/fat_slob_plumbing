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
    <>
      <div id={key} className="categoryDiv">
        <div>
          <h3>{category}</h3>
        </div>
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

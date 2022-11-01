// define a product row for the Products card

type ProductRowProps = {
  product: {};
};

export const ProductRow = ({ product }: ProductRowProps) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <div>
      <div>{name}</div>
      <div>{product.price}</div>
    </div>
  );
};

// define a product row for the Products card

type ProductRowProps = {
  product: {
    name: string;
    price: number;
  };
};

export const ProductRow = ({ product }: ProductRowProps) => {
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.price}</div>
    </div>
  );
};

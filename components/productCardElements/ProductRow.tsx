// define a product row for the Products card
import { Typography } from "../typography";

type ProductRowProps = {
  product: {
    name: string;
    price?: number;
  };
};

export const ProductRow = ({ product }: ProductRowProps) => {
  return (
    <div>
      <Typography.ParagraphL content={product.name} color="var(--solidBrown)" />
    </div>
  );
};

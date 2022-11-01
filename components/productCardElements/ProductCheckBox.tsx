type ProductCheckBoxProps = {
  name: string;
};

export const ProductCheckBox = ({ name }: ProductCheckBoxProps) => {
  return (
    <form>
      <label htmlFor="">
        <input type="checkbox" />
        {name}
      </label>
    </form>
  );
};

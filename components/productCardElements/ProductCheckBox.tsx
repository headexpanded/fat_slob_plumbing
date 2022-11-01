type ProductCheckBoxProps = {
  name: string;
};

export const ProductCheckBox = ({ name }: ProductCheckBoxProps) => {
  return (
    <>
      <form className="formStyle">
        <label htmlFor="">
          <input type="checkbox" />
          {name}
        </label>
      </form>
      <style jsx>{`
        .formStyle {
          color: var(--solidBrown);
        }
      `}</style>
    </>
  );
};

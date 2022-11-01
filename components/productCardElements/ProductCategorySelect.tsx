type ProductCategorySelectProps = {};

export const ProductCategorySelect = () => {
  return (
    <form>
      <input type="text" placeholder="Category..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
};

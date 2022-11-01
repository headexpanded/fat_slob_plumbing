type ProductSearchBarProps = {};

export const ProductSearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        Only show products in stock
      </label>
    </form>
  );
};

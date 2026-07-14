const ShopSort = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="sort" className="text-sm font-medium text-[#2E1E13]">
        Sort By
      </label>

      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="
          rounded-xl
          border
          border-[#e5d8c9]
          bg-white
          px-4
          py-2
          text-sm
          outline-none
          focus:border-[#C97A34]
        "
      >
        <option value="default">Featured</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ShopSort;

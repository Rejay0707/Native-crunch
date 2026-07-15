import { Search } from "lucide-react";

const ShopToolbar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  search,
  onSearchChange,
  productCount,
  sortBy,
  onSortChange,
}) => {
  return (
    <section className="mb-12">
      {/* Search */}
      <div className="relative mb-8">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-[#E7D8CA] bg-white py-4 pl-14 pr-5 outline-none transition-all duration-300 focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20"
        />
      </div>

      {/* Categories + Product Count */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[#8B5E3C] text-white shadow-lg"
                  : "border border-[#E7D8CA] bg-white text-[#2E1E13] hover:border-[#8B5E3C] hover:text-[#8B5E3C]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <p className="font-medium text-[#6A5B4E]">
            Showing{" "}
            <span className="font-semibold text-[#2E1E13]">{productCount}</span>{" "}
            Products
          </p>

          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-xl border border-[#E7D8CA] bg-white px-4 py-2 text-sm outline-none transition focus:border-[#8B5E3C]"
          >
            <option value="default">Featured</option>
            <option value="name-asc">Name (A - Z)</option>
            <option value="name-desc">Name (Z - A)</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ShopToolbar;

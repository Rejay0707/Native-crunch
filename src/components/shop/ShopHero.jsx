import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShopHero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F8F2EA] border-b border-[#E8DCCF]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-[#8B5E3C]">
          <button
            onClick={() => navigate("/")}
            className="transition hover:text-[#6D472C] cursor-pointer"
          >
            Home
          </button>

          <ChevronRight size={16} />

          <span className="font-medium text-[#2E1E13]">Shop</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#2E1E13] md:text-5xl">
          Discover Our Healthy Snack Collection
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6F6256]">
          From handcrafted Peanut Chikki Bars to delicious Peanut Butter Bars,
          explore snacks made with natural ingredients, traditional recipes, and
          absolutely no compromise on taste.
        </p>
      </div>
    </section>
  );
};

export default ShopHero;

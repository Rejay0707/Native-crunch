import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import bannerImage from "../../assets/banners/native-crunch-banner.png";

const PromoBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#F8F1E7]">
      <div
        onClick={() => navigate("/palm-jaggery")}
        className="
          relative
          max-w-auto
          mx-auto
          px-6
          cursor-pointer
          group
        "
      >
        {/* Banner Image */}
        <img
        src={bannerImage}
        alt="Native Crunch Banner"
        className="
          block
          w-full
          h-[50vh]
          md:h-[95vh]
        "
      />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            rounded-3xl
            bg-black/35
            group-hover:bg-black/45
            transition
          "
        />

        {/* Content */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-start
            px-8
            md:px-16
          "
        >
          <div className="max-w-xl text-white">
            <p className="uppercase tracking-[4px] text-sm text-[#FFD27D] mb-3">
              Featured Collection
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Discover Our
              <br />
              Palm Jaggery Collection
            </h2>

            <p className="mt-5 text-white/90 text-base md:text-lg leading-relaxed">
              Traditional sweetness crafted with palm jaggery,
              wholesome ingredients, and no refined sugar.
            </p>

            <button
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                bg-[#C97A34]
                hover:bg-[#b86d2d]
                px-7
                py-3
                rounded-full
                font-medium
                transition-all
                duration-300
                group-hover:translate-x-1
              "
            >
              Explore Collection

              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
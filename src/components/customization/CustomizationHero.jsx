import { Gift, Sparkles } from "lucide-react";

const CustomizationHero = () => {
  return (
    <section className="rounded-[36px] bg-white p-8 shadow-lg lg:p-14">
      <div className="max-w-4xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F8F2EA] px-5 py-2">
          <Gift size={18} className="text-[#C97A34]" />

          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C97A34]">
            Native Crunch Gift Studio
          </span>
        </div>

        <h1 className="text-4xl font-bold leading-tight text-[#2E1E13] md:text-5xl lg:text-6xl">
          Design a Gift They'll
          <br />
          Remember Forever
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5A4637]">
          Build your own premium Native Crunch gift box by choosing your
          favourite snack bars, selecting quantities and variants, adding an
          optional personal photo, and writing a heartfelt gift message. Perfect
          for birthdays, anniversaries, festivals, weddings, and corporate
          gifting.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <div className="rounded-2xl bg-[#F8F2EA] px-6 py-4">
            <h3 className="font-semibold text-[#2E1E13]">
              Premium Packaging
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Beautifully packed gift boxes.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F8F2EA] px-6 py-4">
            <h3 className="font-semibold text-[#2E1E13]">
              Personalized Gifts
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Add your own photo & message.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F8F2EA] px-6 py-4">
            <h3 className="font-semibold text-[#2E1E13]">
              Healthy & Natural
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Crafted with wholesome ingredients.
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <Sparkles className="text-[#C97A34]" />

          <p className="font-medium text-[#2E1E13]">
            Start by selecting the products you'd like to include in your gift
            box.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomizationHero;
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ReviewGiftBoxHero from "../components/reviewGiftBox/ReviewGiftBoxHero";
import ReviewSummary from "../components/reviewGiftBox/ReviewSummary";
// import StepNavigation from "../components/common/StepNavigation";

const ReviewGiftBoxContainer = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F1E7] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <ReviewGiftBoxHero />

          <ReviewSummary />

          <div className="mt-12 flex flex-col gap-5 md:flex-row md:justify-between">
            <button
              onClick={() => window.history.back()}
              className="rounded-full border border-[#D8C5B4] px-8 py-4 font-semibold text-[#2E1E13] hover:bg-[#F8F2EA] transition cursor-pointer"
            >
              ← Back
            </button>

            <button className="rounded-full bg-[#C97A34] px-10 py-4 font-semibold text-white shadow-lg hover:bg-[#B86D2D] transition cursor-pointer">
              🎁 Add Personalized Gift Box to Cart
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ReviewGiftBoxContainer;

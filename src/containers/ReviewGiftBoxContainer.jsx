import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ReviewGiftBoxHero from "../components/reviewGiftBox/ReviewGiftBoxHero";
import ReviewSummary from "../components/reviewGiftBox/ReviewSummary";
import StepNavigation from "../components/common/StepNavigation";

const ReviewGiftBoxContainer = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F1E7] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <ReviewGiftBoxHero />

          <ReviewSummary />

          <StepNavigation
            backPath="/customization"
            nextPath="/customization/recipient-details"
            backLabel="Choose More Products"
            nextLabel="Recipient Details"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ReviewGiftBoxContainer;

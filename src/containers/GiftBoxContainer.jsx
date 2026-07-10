import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import GiftBoxHero from "../components/giftBox/GiftBoxHero";
import SelectedGiftBox from "../components/giftBox/SelectedGiftBox";
import StepNavigation from "../components/common/StepNavigation";
import { useCustomization } from "../context/CustomizationProvider";

const GiftBoxContainer = () => {
  const {
    selectedProducts,
    increaseQty,
    decreaseQty,
    removeProduct,
    changeVariant,
  } = useCustomization();

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F1E7] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <GiftBoxHero />

          <SelectedGiftBox
            selectedProducts={selectedProducts}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeProduct={removeProduct}
            changeVariant={changeVariant}
          />

          <StepNavigation
            backPath="/customization"
            nextPath="/customization/recipient-details"
            backLabel="Choose More Products"
            nextLabel="Add Recipient Details"
          />

        </div>
      </section>

      <Footer />
    </>
  );
};

export default GiftBoxContainer;

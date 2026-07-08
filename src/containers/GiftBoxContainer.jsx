import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import GiftBoxHero from "../components/giftBox/GiftBoxHero";
import SelectedGiftBox from "../components/giftBox/SelectedGiftBox";

const GiftBoxContainer = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F1E7] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <GiftBoxHero />

          <SelectedGiftBox />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GiftBoxContainer;

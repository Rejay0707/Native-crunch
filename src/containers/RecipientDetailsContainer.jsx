import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import RecipientHero from "../components/recipientDetails/RecipientHero";
import RecipientForm from "../components/recipientDetails/RecipientForm";

const RecipientDetailsContainer = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F1E7] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <RecipientHero />

          <RecipientForm />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RecipientDetailsContainer;
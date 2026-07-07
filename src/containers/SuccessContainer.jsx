import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SuccessCard from "../components/success/SuccessCard";

const SuccessContainer = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <SuccessCard />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SuccessContainer;
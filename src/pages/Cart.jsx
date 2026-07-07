import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CartContainer from "../containers/CartContainer";

const CartPage = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#F8F2EA] min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">
          <CartContainer />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CartPage;
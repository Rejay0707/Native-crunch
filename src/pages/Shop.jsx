import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ShopContainer from "../containers/ShopContainer";

const Shop = () => {
  return (
    <>
      <AnnouncementBar />
      
      <Navbar />

      <ShopContainer />

      <Footer />
    </>
  );
};

export default Shop;

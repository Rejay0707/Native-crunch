import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Customization from "./pages/Customization";
import GiftBox from "./pages/GiftBox";
import RecipientDetails from "./pages/RecipientDetails";
import ReviewGiftBox from "./pages/ReviewGiftBox";
import { CustomizationProvider } from "./context/CustomizationProvider";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Always resets scroll on route change */}
      <ScrollToTop />

      {/* IMPORTANT: ensures proper layout height handling */}
      <div className="min-h-screen flex flex-col">
        <CustomizationProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="/customization" element={<Customization />} />
            <Route path="/customization/gift-box" element={<GiftBox />} />
            <Route
              path="/customization/recipient-details"
              element={<RecipientDetails />}
            />
            <Route path="/customization/review" element={<ReviewGiftBox />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CustomizationProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

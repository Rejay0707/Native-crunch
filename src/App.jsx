import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Customization from "./pages/Customization";


function App() {
  return (
    <BrowserRouter>
      {/* Always resets scroll on route change */}
      <ScrollToTop />

      {/* IMPORTANT: ensures proper layout height handling */}
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/customization" element={<Customization />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
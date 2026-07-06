import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import CartDrawer from "./components/cart/CartDrawer";
import Home from "./pages/Home";
import About from "./pages/About";
import Customization from "./pages/Customization";

function App() {
  return (
    <BrowserRouter>
      {/* Always resets scroll on route change */}
      <ScrollToTop />

      {/* IMPORTANT: ensures proper layout height handling */}
      <div className="min-h-screen flex flex-col">
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/customization" element={<Customization />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
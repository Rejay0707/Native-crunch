import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import PalmJaggery from "./pages/PalmJaggery";

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
          <Route path="/palm-jaggery" element={<PalmJaggery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
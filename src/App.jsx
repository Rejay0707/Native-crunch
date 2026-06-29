import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import PalmJaggery from "./pages/PalmJaggery";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/palm-jaggery" element={<PalmJaggery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

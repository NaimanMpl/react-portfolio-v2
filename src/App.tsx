import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {

  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Router>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
      </Router>
    </AnimatePresence>
  )
}

export default App

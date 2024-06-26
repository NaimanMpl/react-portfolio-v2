import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { WorkCardDataProvider } from "./contexts/WorkCardContext";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import EvylWork from "./pages/works/EvylWork";
import MinecraftCloneWork from "./pages/works/MinecraftCloneWork";

function App() {

  const location = useLocation();
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <WorkCardDataProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/works/minecraft-clone" element={<MinecraftCloneWork />} />
          <Route path="/works/evyl" element={<EvylWork />} />
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
      </AnimatePresence>
    </WorkCardDataProvider>
  )
}

export default App

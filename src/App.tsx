import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import minecraftBg from './assets/minecraft_bg.jpg';
import { WorkCardDataProvider } from "./contexts/WorkCardContext";
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
        </Routes>
      </AnimatePresence>
    </WorkCardDataProvider>
  )
}

export default App

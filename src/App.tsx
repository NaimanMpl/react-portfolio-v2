import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { WorkCardDataProvider } from "./contexts/WorkCardContext";
import Home from "./pages/Home";
import MinecraftCloneWork from "./pages/works/MinecraftCloneWork";

function App() {

  const location = useLocation();
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <WorkCardDataProvider>
          <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/works/minecraft-clone" element={<MinecraftCloneWork />} />
          </Routes>
        </WorkCardDataProvider>
      </AnimatePresence>
    </>
  )
}

export default App

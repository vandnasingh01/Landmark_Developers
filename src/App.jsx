import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import Home from "./components/Home/Home"
import Navbar from "./components/navbar/Navbar.jsx"
import AboutUs from "./components/aboutUs/AboutUs.jsx"

function RouteScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const scrollToTarget = () => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 76;
          window.scrollTo({ top, behavior: "smooth" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const frame = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
    <RouteScrollManager />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/enquiry" element={<Home />} />
      </Routes>    
    </BrowserRouter>
  )
}

export default App

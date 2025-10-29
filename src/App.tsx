import React from "react";
import { Routes, Route } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground.js";
import "./index.css"; 

import { Home } from "./pages/home/home";

// importe outras páginas se tiver
//import { About } from "./pages/about/about";
//import { Skills } from "./pages/skills/skills";
//import { Projects } from "./pages/projects/projects";
//import { Contact } from "./pages/contact/contact";

export default function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#0b1220" }}>
      <ParticlesBackground />
      
      <Routes>

        <Route path="/" element={<Home />} />

        {/*<Route path="/about" element={<About />} /> */}
        {/*<Route path="/skills" element={<Skills />} /> */}
        {/*<Route path="/projects" element={<Projects />} /> */}
        {/*<Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

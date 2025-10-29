import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center p-4 w-full h-16 fixed top-0 left-0 z-50 border-b-custom blur-custom  ">
      <div className="flex items-center text-white md:ml-35 md:text-[1.7rem] text-[1.4rem] font-bold z-30">
        <Link to="/">
          &lt;Igor <span className="text-red-600 pl-2"> Brandalise/&gt;</span>
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className="nav hidden items-center md:flex text-[1rem] gap-10 text-white font-medium pr-32">
        <Link to="/about">About me</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Mobile hamburger */}
      <div className="md:hidden z-30">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
        >
          <span
            className={`block w-7 h-0.5 bg-red-600 rounded transform transition duration-300 ease-in-out
            ${isOpen ? "rotate-45 absolute top-1/2 -translate-y-1/2" : ""}`}
          />
          <span
            className={`block w-7 h-0.5 bg-red-600 rounded my-1 transition duration-300 ease-in-out
            ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-7 h-0.5 bg-red-600 rounded transform transition duration-300 ease-in-out
            ${isOpen ? "-rotate-45 absolute top-1/2 -translate-y-1/2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
  className={`nav md:hidden absolute top-16 right-4 w-40 bg-black border border-red-600 rounded-[10px] shadow-lg flex flex-col p-4 gap-4 text-white transition-all duration-300 overflow-hidden ${
    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <Link to="/about" onClick={() => setIsOpen(false)} className="w-max relative">About me</Link>
  <Link to="/skills" onClick={() => setIsOpen(false)} className="w-max relative">Skills</Link>
  <Link to="/projects" onClick={() => setIsOpen(false)} className="w-max relative">Projects</Link>
  <Link to="/contact" onClick={() => setIsOpen(false)} className="w-max relative">Contact</Link>
</nav>

    </header>
  );
}

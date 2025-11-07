import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center p-4 min-w-full h-16 relative z-50 border-b-custom blur-custom">
      {/* Logo */}
      <div className="items-center text-white pl-3 lg:ml-15 xl:ml-28 lg:text-[1.7rem] text-[1.4rem] font-bold z-30">
        <Link to="/">
          &lt;Igor <span className="text-red-600">Brandalise/&gt;</span>
        </Link>
      </div>

      {/* Desktop nav (mostra só em telas >= 1024px) */}
      <nav className="nav hidden lg:flex items-center text-[1rem] gap-10 text-white font-medium lg:mr-28">
        <Link to="/about">About me</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Botão hamburguer (mostra abaixo de 1024px) */}
      <div className="lg:hidden z-100">
        <button
          onClick={toggleMenu}
          className=" flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
        >
          <span
            className={`block w-7 h-0.5 bg-red-600 rounded transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 absolute top-1/2 -translate-y-1/2" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-red-600 rounded my-1 transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-red-600 rounded transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 absolute top-1/2 -translate-y-1/2" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile (abre quando clicar no botão) */}
      <nav
        className={`nav lg:hidden absolute top-16 right-4 w-40 bg-black border border-red-600 rounded-[10px] shadow-lg flex flex-col p-4 gap-4 text-white transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {["about", "skills", "projects", "contact"].map((item) => (
          <Link
            key={item}
            to={`/${item}`}
            onClick={() => setIsOpen(false)}
            className="w-max relative "
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  );
}

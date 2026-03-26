import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className="header-reveal fixed top-6 left-1/2 w-[95%] lg:w-[65%] 
               flex justify-between items-center px-2 py-1  mt-4 rounded-[30px]  h-16 z-50 border-custom  bg-[#121212]/90  "
    >
      {/* Logo */}
      <div className="items-center text-white pl-4 lg:text-[1.4rem] text-[1.2rem] font-bold z-30 ">
        <Link to="/">
          &lt;Igor <span className="text-[#ff3b3b]">Brandalise/&gt;</span>
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className="nav hidden xl:flex items-center text-[1rem] gap-5 text-white font-medium xl:mr-8">
        <Link to="/about">About me</Link>
        <span>|</span>
        <Link to="/skills">Skills</Link>
        <span>|</span>
        <Link to="/projects">Projects</Link>
        <span>|</span>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Botão hamburguer  */}
      <div className="xl:hidden z-100 pr-4">
        <button
          onClick={toggleMenu}
          className=" flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
        >
          <span
            className={`block w-7 h-0.5 bg-[#ff3b3b] rounded transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 absolute top-1/2 -translate-y-1/2" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-[#ff3b3b] rounded my-1 transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-[#ff3b3b] rounded transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 absolute top-1/2 -translate-y-1/2" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        className={`nav xl:hidden absolute top-16 right-4 w-40 bg-[#121212] border border-[#ff3b3b] rounded-[10px] shadow-lg flex flex-col p-4 gap-4 text-white transition-all duration-300 overflow-hidden ${
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

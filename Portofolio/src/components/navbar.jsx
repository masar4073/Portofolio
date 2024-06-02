import React, { useState, useEffect } from "react";

const Navbar = ({ onNavbarFixed }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY > 100 || currentScrollY < lastScrollY);
    setLastScrollY(currentScrollY);
    onNavbarFixed(currentScrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, lastScrollY]);

  return (
    <nav
      className={`bg-gray-500 text-white font-rubik py-4 px-8 z-50 transition-all duration-700 ${
        isVisible
          ? "fixed top-0 left-0 right-0 shadow-lg opacity-100"
          : "absolute w-full"
      }`}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home" className="hover:text-gray-400">
            MyPortfolio
          </a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-gray-400">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-gray-400">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

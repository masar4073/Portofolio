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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      className={`bg-white text-gray-900 font-rubik py-4 px-8 z-50 transition-all duration-700 ${
        isVisible
          ? "fixed top-0 left-0 right-0 shadow-lg opacity-100"
          : "absolute w-full"
      }`}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold relative">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="hover:text-gray-400 relative flex items-center"
          >
            MyPortfolio
            <span className="relative flex h-3 w-3 ml-2 top-[-15px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
          </a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="hover:text-gray-400"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className="hover:text-gray-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("project");
              }}
              className="hover:text-gray-400"
            >
              Project
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

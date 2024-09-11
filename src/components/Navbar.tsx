import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo-navbar.png";
import "@fontsource/playfair-display"; // Importa a fonte Playfair Display

const Navbar: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true); // State for navbar transparency
  const [menuOpen, setMenuOpen] = useState(false); // State for menu open/closed
  const [activeSection, setActiveSection] = useState<string>("home"); // Current active section

  useEffect(() => {
    setActiveSection("home");

    const handleScroll = () => {
      const sections = ["home", "about", "treatments", "location"];
      const scrollPos = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(section);
          }
        }
      });

      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        setIsTransparent(window.scrollY < homeHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Certifique-se de que a página role para o topo (seção 'Início') ao carregar
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on section click
      setActiveSection(id); // Set active section explicitly
    }
  };

  const backgroundColor = isTransparent
    ? "rgba(255, 255, 255, 0)"
    : "rgba(255, 255, 255, 1)";
  const textColor = isTransparent ? "#000000" : "#000000";

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{ backgroundColor }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-10 p-4 lg:p-6 font-serif"
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-16 lg:h-24" />
        </div>

        <ul className="hidden lg:flex space-x-8 lg:space-x-12">
          {[
            { id: "home", label: "Início" },
            { id: "about", label: "Sobre nós" },
            { id: "treatments", label: "Tratamentos" },
            { id: "location", label: "Contacto" },
          ].map((section) => (
            <motion.li
              key={section.id}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#f3f4f6",
                borderRadius: "0.375rem",
                padding: "0.5rem 1rem",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: activeSection === section.id ? 0 : 0.1,
              }}
              className={`cursor-pointer text-lg font-semibold uppercase ${
                activeSection === section.id
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : ""
              }`}
              onClick={() => handleScrollToSection(section.id)}
              style={{ color: textColor }}
            >
              {section.label}
            </motion.li>
          ))}
        </ul>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-md mt-2 rounded-lg"
        >
          <ul className="flex flex-col space-y-4 p-6">
            {[
              { id: "home", label: "Início" },
              { id: "about", label: "Sobre nós" },
              { id: "treatments", label: "Tratamentos" },
              { id: "location", label: "Contacto" },
            ].map((section) => (
              <li key={section.id}>
                <a
                  onClick={() => handleScrollToSection(section.id)}
                  className="cursor-pointer hover:bg-gray-100 text-xl font-semibold text-black py-2 rounded-lg transition-colors"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

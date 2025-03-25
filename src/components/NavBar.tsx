import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo_png_.png";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";


const NavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  console.log(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  const toggleNavbar = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    //
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  // code to change the color of the text in partners page
    //  ${
    //     location.pathname === "/partners" && scrolled
    //   && "  text-white "}
    //     ${location.pathname === "/partners" && !scrolled && " text-black/80 "}
          
    //   } 
  return (
    <nav
      dir="ltr"
      className={`${
        scrolled
          ? "bg-HeadingColor py-2 text-white "
          : "bg-transparent py-2 text-white"
      } fixed top-0 left-0 w-full z-50 transition-all  duration-300 px-4
     
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="z-50">
          <img
            className="h-[4rem] sm:ms-3  bg-white rounded-2xl p-1"
            src={logo}
            alt="Logo"
          />
        </Link>

        <div className="flex items-center gap-4 z-50">
          <div className="lg:hidden">
            <LanguageSwitcher />
          </div>
          <button className="lg:hidden " onClick={toggleNavbar}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          ref={menuRef}
          className={`lg:flex lg:items-center lg:space-x-8 text-lg ${
            menuOpen
              ? "fixed top-0 left-0 w-full h-fit transition-all duration-300 bg-HeadingColor flex flex-col items-center justify-center space-y-6 py-10"
              : "hidden"
          }`}
        >
          <motion.li variants={itemVariants}>
            <Link
              to="/about"
              className={`hover:underline hover:underline-offset-8  ${
                location.pathname === "/about" && "underline underline-offset-8"
              }`}
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              {t("Navbar_About")}
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              to="/service"
              className={`hover:underline hover:underline-offset-8 ${
                location.pathname === "/service" &&
                "underline underline-offset-8"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {t("Navbar_Service")}
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              to="/partners"
              className={`hover:underline hover:underline-offset-8 ${
                location.pathname === "/partners" &&
                "underline underline-offset-8 "
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {t("Navbar_Partners")}
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              to="/contact"
              className={`hover:underline hover:underline-offset-8 ${
                location.pathname === "/contact" &&
                "underline underline-offset-8"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {t("Navbar_Contact")}
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="hidden lg:block">
            <LanguageSwitcher />
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default NavBar;

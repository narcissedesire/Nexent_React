import React, { useEffect, useState } from "react";
import { navItem } from "../Constant/data";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-[1000]">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "bg-white shadow-md duration-300 border-b"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center gap-8 text-base">
          {/* Logo */}
          <a href="/" className="text-2xl font-semibold space-x-3">
            <span className="text-brandPrimary">NEXCENT</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-12">
            {navItem.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-100}
                activeClass="text-brandPrimary font-bold border-b-2 border-brandPrimary"
                className="block text-gray900 hover:text-brandPrimary transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {item.link}
              </Link>
            ))}
          </ul>

          {/* Actions (Login & Sign Up) */}
          <div className="flex items-center space-x-6 max-md:mr-10">
            <a
              href="/login"
              className="text-brandPrimary hover:text-gray900 transition-all duration-300"
            >
              Login
            </a>
            <button className="bg-brandPrimary py-2 px-6 text-white rounded-lg hover:bg-neutralDGrey transition-all duration-300 whitespace-nowrap">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden absolute right-3">
            <button
              className="focus:outline-none h-6 w-6 text-neutralDGrey"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <i className="fa fa-times text-2xl" />
              ) : (
                <i className="fa fa-bars text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-300">
            <div className="px-6 py-8 space-y-6">
              {navItem.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={() => setIsMenuOpen(false)}
                  activeClass="text-brandPrimary font-bold border-b-2 border-brandPrimary"
                  className="block text-gray900 text-lg hover:text-brandPrimary transition-all duration-300 cursor-pointer"
                >
                  {item.link}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

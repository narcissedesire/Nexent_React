import React, { useEffect, useState } from "react";
import { navItem } from "../Constant/data";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsticky(true);
      } else {
        setIsticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 z-[1000]">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center gap-8 text-base">
          <a href="" className="text-2xl font-semibold space-x-3">
            <span className="text-[#263238]">NEXCENT</span>
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItem.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-100}
                className="
                    block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer"
              >
                {item.link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button className="bg-brandPrimary py-2 px-4 text-white transition-all duration-300 rounded hover:bg-neutralDGrey">
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button
              className="focus: outline-none focus:text-gray-500 h-6 w-6 text-neutralDGrey"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <i className="fa fa-times" />
              ) : (
                <i className="fa fa-bars" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItem.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              spy={true}
              smooth={true}
              offset={-100}
              className="
                block text-base text-white hover:text-gray900 first:font-medium cursor-pointer"
            >
              {item.link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

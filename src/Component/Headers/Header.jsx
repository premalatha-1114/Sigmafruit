import React, { useState, useEffect, useRef } from "react";
import Logo from "../../Assets/Images/logo.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlinePlusSmall } from "react-icons/hi2";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  

  const toggleSubMenu = (menu) => {
    setSubMenuOpen((prev) => (prev === menu ? null : menu)); // Toggles specific submenu
  };
  
  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setSubMenuOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-opacity-100" : "bg-opacity-100"
      }`}
    >
      <div className="w-full h-[80px] flex justify-between  items-center max-w-[1440px] mx-auto px-[20px] sm:px-[40px]">
        {/* Logo Section */}
        <div
          className={`mr-2 p-1 absolute bg-white transition-transform duration-300 ease-in-out flex items-center ${
            scrolling
              ? "scale-110 ease-in w-[90px]  h-[70px] sm:w-[70px] sm:h-[70px]"
              : "sm:top-[30px] ease-in-out sm:left-[50px] w-[90px]  h-[70px] scale-100 sm:w-[180px] sm:h-[180px] rounded-xl shadow-custom-hover shadow-custom"
          }`}
        >
          <img
            src={Logo}
            alt="Your Logo"
            className="w-full h-full  object-contain transition-transform duration-300 ease-in-out"
          />
        </div>
        {/* Navigation Menu */}
        <div className="absolute left-0 right-0 lg:left-[19%] hidden lg:block z-40">
          <ul className="flex gap-6 space-x-7 text-[20px] text-[#767676] font-semibold">
            {/* About Us */}
            <li className="relative group py-[30px] font-manrope text-[18px]">
              <Link
                to="/#"
                className="hover:text-[#E57A29] hover:underline decoration-2 underline-offset-8 transition-all duration-300 transform hover:scale-110"
              >
                About Us
              </Link>

              <ul className="absolute left-0 hover:border-b-4 border-[#E57A29] top-[80px] hidden group-hover:block bg-[#404040] font-manrope font-normal text-[16px] w-[275px] text-[#fff] transition-opacity duration-300 ease-in-out">
                <li className="relative group">
                  <Link
                    to="/our-produce"
                    className="block px-4 py-3  transition-colors duration-300 hover:text-[#E57A29]"
                  >
                    Our Produce
                  </Link>
                </li>
              </ul>
            </li>

            {/* Engage */}
            <li className="relative group py-[30px] font-manrope text-[16px]">
              <Link
                to="/#"
                className="hover:text-[#E57A29] hover:underline decoration-2 underline-offset-8 transition-all duration-300 transform hover:scale-110"
              >
                Engage
              </Link>
              <ul className="absolute top-[80px] hidden font-manrope font-normal text-[16px] left-0 h-auto w-[275px] bg-[#404040] text-[#fff] group-hover:block transition-opacity duration-300 ease-in-out">
                <li className="border-b border-gray-200 h-auto hover:border-b-2 hover:border-[rgb(229,122,41)] hover:text-[#E57A29] transition-colors duration-300">
                  <Link to="/farm-visit" className="block px-4 py-3">
                    Farm Visit
                  </Link>
                </li>
                <li className="border-b border-gray-200 h-auto hover:border-b-[2px] hover:border-[#E57A29] hover:text-[#E57A29] transition-colors duration-300">
                  <Link to="/workshops" className="block px-4 py-3">
                    Work Shop
                  </Link>
                </li>
                <li className="h-auto hover:border-b-4 hover:border-[#E57A29] hover:text-[#E57A29] transition-colors duration-300">
                  <Link to="/farm-cafe" className="block px-4 py-3">
                    Farm Cafe
                  </Link>
                </li>
              </ul>
            </li>

            {/* Connect */}
            <li className="relative py-[30px] group font-manrope text-[16px]">
              <Link
                to="/#"
                className="hover:text-[#E57A29] hover:underline decoration-2 underline-offset-8 transition-all duration-300 transform hover:scale-110"
              >
                Connect
              </Link>
              <ul className="absolute top-[80px] hidden font-manrope  hover:border-b-2 border-[#E57A29] hover:text-[#E57A29] font-normal text-[16px] left-0 h-auto w-[275px] group-hover:block bg-[#404040] text-[#fff] transition-opacity duration-300 ease-in-out">
                <li className="border-b border-gray-200 h-auto hover:border-b-[2px] hover:border-[rgb(229,122,41)] hover:text-[#E57A29] transition-colors duration-300">
                  <Link
                    to="/partner-with-us"
                    className="block px-4 py-3 transition-colors duration-300 hover:text-[#E57A29]"
                  >
                    Partner With Us
                  </Link>
                </li>
                <li className="border-b border-gray-200 h-auto hover:border-b-[2px] hover:border-[rgb(229,122,41)] hover:text-[#E57A29] transition-colors duration-300">
                  <Link
                    to="/careers"
                    className="block px-4 py-3 transition-colors duration-300 hover:text-[#E57A29]"
                  >
                    Careers
                  </Link>
                </li>
                <li className="border-b border-gray-200 h-auto hover:border-b-[2px] hover:border-[rgb(229,122,41)] hover:text-[#E57A29] transition-colors duration-300">
                  <Link
                    to="/contact-us"
                    className="block px-4 py-3 transition-colors duration-300 hover:text-[#E57A29]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>

            {/* Farmer's Corner */}
            <li className="font-manrope py-[30px] text-[16px]">
              <Link
                to="/blog"
                className="hover:text-[#E57A29] hover:underline decoration-2 underline-offset-8 transition-all duration-300 transform hover:scale-110"
              >
                Farmer's Corner
              </Link>
            </li>
          </ul>
        </div>
        {/* Shop Now Button */}
        <div className="absolute right-4 bottom-3  hover:bg-black hidden lg:block   lg:bottom-5 lg:right-[45px] items-center">
          <button className="px-6 py-3 flex gap-1  text-[#000000] items-center  rounded-md bg-[#c6df3d]  hover:bg-black hover:text-white shadow-md focus:ring-2   focus:outline-none focus:ring-opacity-100  font-manrope  font-semibold text-[16px] ">
            Shop Now
            <span className="px-1  text-[#000000] ">
              <FaRegArrowAltCircleRight />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden  flex   justify-end w-full h-full ">
          <button
            onClick={toggleDropdown} // Toggle dropdown state
            className="text-green-800  transition-transform duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-[35px] h-[50px] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="lg:hidden  bg-black text-white shadow-md w-[70%] h-auto absolute right-2 top-full transition-all duration-300 ease-in-out"
          >
            <ul className="space-y-5 px-5 py-5  ">
              {/* ABOUT US */}
              <li>
                <div
                  onClick={() => toggleSubMenu("ABOUT")}
                  className="flex justify-between items-center cursor-pointer hover:text-[#E57A29] transition-colors duration-300 font-medium font-manrope text-[16px]"
                >
                  ABOUT US
                  <HiOutlinePlusSmall
                    className={`transition-transform ${
                      subMenuOpen === "ABOUT" ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </div>
                {subMenuOpen === "ABOUT" && (
                  <ul className="mt-2  space-y-2 ">
                    <li>
                      <Link
                        to="/our-produce" // Correct the path here
                        className="block hover:text-[#E57A29] transition-colors duration-300 py-2 "
                      >
                        OUR PRODUCE
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* ENGAGE */}
              <li>
                <div
                  onClick={() => toggleSubMenu("ENGAGE")}
                  className="flex justify-between items-center cursor-pointer hover:text-[#E57A29] transition-colors duration-300 font-medium font-manrope text-[16px]"
                >
                  ENGAGE
                  <HiOutlinePlusSmall
                    className={`transition-transform ${
                      subMenuOpen === "ENGAGE" ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </div>
                {subMenuOpen === "ENGAGE" && (
                  <ul className="mt-2  space-y-2">
                    <li>
                      <Link
                        to="#"
                        className="block hover:text-[#E57A29] py-2 transition-colors duration-300"
                      >
                        FARM VISIT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block hover:text-[#E57A29] py-2 transition-colors duration-300"
                      >
                        WORKSHOPS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block hover:text-[#E57A29] py-2 transition-colors duration-300"
                      >
                        FARM CAFE
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* CONNECT */}
              <li>
                <div
                  onClick={() => toggleSubMenu("CONNECT")}
                  className="flex justify-between items-center cursor-pointer hover:text-[#E57A29] transition-colors duration-300 font-medium font-manrope text-[16px]"
                >
                  CONNECT
                  <HiOutlinePlusSmall
                    className={`transition-transform ${
                      subMenuOpen === "CONNECT" ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </div>
                {subMenuOpen === "CONNECT" && (
                  <ul className="mt-2  space-y-2">
                    <li>
                      <Link
                        to="#"
                        className="block hover:text-[#E57A29] transition-colors py-3 duration-300"
                      >
                        PARTNER WITH US
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block hover:text-[#E57A29]  transition-colors duration-300"
                      >
                        CAREERS
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* FARMER'S CORNER */}
              <li>
                <Link
                  to="/blog"
                  className="block hover:text-[#E57A29] transition-colors duration-300 font-medium font-manrope text-[16px]"
                >
                  FARMER'S CORNER
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;

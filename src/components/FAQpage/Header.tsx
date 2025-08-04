import React, { useState } from "react";
import { Link } from "react-router";
import {
  FaPhoneAlt,
  FaShoppingBag,
  FaUser,
  FaBell,
  FaClipboardList,
  FaAngleDown,
  FaArrowUp
} from "react-icons/fa";

const navLinks = [
  "Home",
  "Find Doctors",
  "Lab Tests",
  "Shop",
  "Forum",
  "About Us",
];

const actionIcons = [
  { icon: FaClipboardList, count: 2 },
  { icon: FaShoppingBag, count: 1 },
  { icon: FaBell },
  { icon: FaUser },
];

const Navbar = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <>
      <nav className="bg-[#f5f2da] w-full px-4 md:px-10 py-4">
        {/* Top Section - Phone on mobile */}
        <div className="md:hidden flex justify-center text-[#1f4f31] text-sm mb-2">
          <FaPhoneAlt className="mr-2 text-xs mt-1" />
          <span>+91 9826352321</span>
        </div>

        {/* Logo Centered */}
        <div className="flex justify-center mb-4 md:mb-0">
          <Link to='/'><img
            src="/src/assets/companyLogo.png"
            alt="AMRUTAM"
            className="h-5 md:h-10 object-contain"
          /></Link>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Phone */}
          <div className="flex items-center gap-2 text-[#1f4f31] text-sm">
            <FaPhoneAlt className="text-xs" />
            <span>+91 9826352321</span>
          </div>

          {/* Nav Links */}
          <ul className="flex gap-10 text-[#1f4f31] text-sm font-medium">
            {navLinks.map((link, i) => (
              <Link to="/">
              
                <li key={i} className="hover:opacity-75 transition">
                  {link}
                </li>
              </Link>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex md:flex-col lg:flex-row items-center gap-2">
            {actionIcons.map(({ icon: Icon, count }, i) => (
              <div
                key={i}
                className="relative w-8 h-8 bg-[#dbe0d5] rounded-full flex items-center justify-center text-[#1f4f31]"
              >
                <Icon className="text-sm" />
                {count && (
                  <span className="absolute -top-1 -right-1 bg-[#1f4f31] text-white text-[10px] px-1 rounded-full">
                    {count}
                  </span>
                )}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#1f4f31]">
              <FaAngleDown className="text-sm" />
            </div>
          </div>
        </div>

        {/* Mobile NavLinks */}
      
        <div className="flex flex-col items-center gap-4 md:hidden mt-6 text-[#1f4f31] text-sm font-medium">
  {navLinks.map((link, i) => (
    <Link key={i} to="/" className="hover:opacity-75 transition">
      {link}
    </Link>
  ))}
</div>


        {/* Mobile Action Button */}
        <div className="md:hidden flex justify-center mt-4">
  <button
    onClick={() => setShowIcons(prev => !prev)}
    className="w-8 h-8 rounded-full bg-[#dbe0d5] flex items-center justify-center text-[#1f4f31] transition-transform"
  >
    <FaAngleDown className={`text-sm transition-transform duration-300 ${showIcons ? 'rotate-180' : ''}`} />
  </button>
</div>

      </nav>

      {/* Mobile Bottom Drawer */}
      {showIcons && (
  <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#f5f2da] border-t border-gray-300 py-3 z-[9999]">
    <div className="flex justify-center gap-4">
      {actionIcons.map(({ icon: Icon, count }, i) => (
        <div
          key={i}
          className="relative w-8 h-8 bg-[#dbe0d5] rounded-full flex items-center justify-center text-[#1f4f31]"
        >
          <Icon className="text-sm" />
          {count && (
            <span className="absolute -top-1 -right-1 bg-[#1f4f31] text-white text-[10px] px-1 rounded-full">
              {count}
            </span>
          )}
        </div>
      ))}

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-8 h-8 bg-[#dbe0d5] rounded-full flex items-center justify-center text-[#1f4f31]"
      >
        <FaArrowUp className="text-sm" />
      </button>
    </div>
  </div>
)}


    </>
  );
};

export default Navbar;

"use client";

import {  useState } from "react";

import {  FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");





  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? "" : menu);
  };

  return (
    <header className="w-full z-50">
      {/* Main Navigation */}
      <nav className="bg-black flex justify-between items-center px-6 sm:px-20 py-4 shadow-md relative">
        {/* Logo & School Name */}
        <div className="flex items-center space-x-3">
          <img src="/school_logo1.png" alt="School Logo" className="h-10" />
          {/* <span className="text-lg font-bold text-green-900">DELHI WORLD SCHOOL</span> */}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-medium relative z-50">
          <li>
            <Link href="/" className="">Home</Link>
          </li>

          {/* About Us */}
          <li className="relative group">
            <Link href="#" className="text-white flex items-center px-3 rounded-md">
              About Us <FaChevronDown className="ml-1 text-sm" />
            </Link>
            <ul className="absolute left-0 bg-white shadow-lg rounded-md hidden group-hover:block py-2 w-48">
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                History
                </Link>
              </li>
              <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Chairman corner</Link></li>
              <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Vission & Misssion</Link></li>
            </ul>
          </li>





          <li><Link href="#" className="">Entities</Link></li>
          <li><Link href="#" className="">Gallery</Link></li>
          <li><Link href="#" className="">Events</Link></li>
          <li><Link href="#" className="">Schemes</Link></li>
          <li><Link href="#" className="">Carrers</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
  <div className="md:hidden bg-white text-gray-800 py-4 px-6 space-y-4 shadow-md relative z-50">
    <Link href="/" className="block py-2 hover:text-green-600">Home</Link>

    {/* About Us */}
    <div>
      <button
        onClick={() => toggleDropdown("about")}
        className="w-full text-left flex justify-between items-center py-2 hover:text-green-600"
      >
        About Us <FaChevronDown className={`ml-1 transition-transform ${dropdownOpen === "about" ? "rotate-180" : ""}`} />
      </button>
      {dropdownOpen === "about" && (
        <div className="pl-4 space-y-2">
          <Link href="#" className="block py-1 hover:text-green-600">History</Link>
          <Link href="#" className="block py-1 hover:text-green-600">Chairman corner</Link>
          <Link href="#" className="block py-1 hover:text-green-600">Vision & Mission</Link>
        </div>
      )}
    </div>

   
    <Link href="#" className="block py-2 hover:text-green-600">Entities</Link>
    <Link href="#" className="block py-2 hover:text-green-600">Gallery</Link>
    <Link href="#" className="block py-2 hover:text-green-600">Events</Link>
    <Link href="#" className="block py-2 hover:text-green-600">Schemes</Link>
    <Link href="#" className="block py-2 hover:text-green-600">Carrers</Link>

    {/* Social Icons */}
    <div className="flex justify-center space-x-3 pt-4">
      <FaFacebookF className="text-blue-500 cursor-pointer" />
      <FaInstagram className="text-red-500 cursor-pointer" />
      <FaTwitter className="text-yellow-400 cursor-pointer" />
      <FaLinkedin className="text-green-500 cursor-pointer" />
      <FaYoutube className="text-orange-500 cursor-pointer" />
    </div>
  </div>
)}

    </header>
  );
}

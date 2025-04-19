"use client";
import React, { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // Controls both mobile and desktop dropdown

  const navLinks = [
    "Home",
    "About",
    "Entities",
    "Gallery",
    "Events",
    "Schemes",
    "Carrers",
  ];

  return (
    <header className="w-full shadow-md bg-white z-50 sticky top-0">
      {/* Logo */}
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-2 py-2">
        <img src="/school_logo1.png" alt="Logo" className="h-12 w-30" />
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center justify-between">
        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 font-semibold text-sm text-black relative">
          {navLinks.map((link) => {
            if (link === "About") {
              return (
                <div className="relative" key={link}>
                  <div
                    className="cursor-pointer flex items-center gap-1"
                    onClick={() => setAboutOpen((prev) => !prev)}
                  >
                    <span>ABOUT </span>
                    {aboutOpen ? (
                      <FaChevronUp className="text-xs" />
                    ) : (
                      <FaChevronDown className="text-xs" />
                    )}
                  </div>

                  {aboutOpen && (
                    <div className="absolute top-full mt-2 bg-white shadow-md py-2 rounded-md w-48 text-left z-30">
                      <a
                        href="/about/history"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        History
                      </a>
                      <a
                        href="/about/chairman"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        Chairman Corner
                      </a>
                      <a
                        href="/about/vision-mission"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        Vision & Mission
                      </a>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                href={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                key={link}
              >
                {link.toUpperCase()}
              </a>
            );
          })}
        </nav>

        {/* Download Button */}
        <button className="hidden lg:flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold transition">
          <FaDownload className="mr-2" />
          Download
        </button>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-gray-800 text-2xl"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setAboutOpen(false); // close about menu on main toggle
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-4 pb-6 space-y-4 text-sm font-medium text-black">
          {navLinks.map((link) => {
            if (link === "About") {
              return (
                <div key={link}>
                  <div
                    className="cursor-pointer flex justify-between items-center"
                    onClick={() => setAboutOpen(!aboutOpen)}
                  >
                    <span>About</span>
                    {aboutOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {aboutOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <a href="/about/history">• History</a>
                      <a href="/about/chairman">• Chairman Corner</a>
                      <a href="/about/vision-mission">• Vision & Mission</a>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={link}
                href={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                className="block"
              >
                {link}
              </a>
            );
          })}

          {/* Download button */}
          <button className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold transition w-max mt-4">
            <FaDownload className="mr-2" />
            Download
          </button>
        </div>
      )}
    </header>
  );
}

"use client"
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold flex items-center justify-center text-lg shadow-lg">
            ID
          </div>
          <span className="font-bold text-gray-800 text-lg">ID Card Generator</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link to="/how-it-works" className="hover:text-blue-600 transition">How it Works</Link></li>
          <li><Link to="/templates" className="hover:text-blue-600 transition">Templates</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          <li><Link to="/generator" className="hover:text-blue-600 transition font-semibold text-blue-600">Generator</Link></li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-md">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">How it Works</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Templates</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
            <li>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}


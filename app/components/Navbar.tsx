"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 text-white z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <img
          src="/images/Paton-Final_Logo-01.png"
          alt="Logo"
          className="w-32 h-8 object-contain"
        />

        {/* Hamburger (always visible) */}
        <button className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 px-6 py-6 space-y-4 text-center">
          <a
            href="/contact"
            className="block hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <a
            href="#terms"
            className="block hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Terms & Conditions
          </a>
          <a
            href="#faq"
            className="block hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            FAQs
          </a>
          <a
            href="#policy"
            className="block hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Privacy Policy
          </a>
        </div>
      )}
    </nav>
  );
}

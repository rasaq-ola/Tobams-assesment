"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#" },
  { label: "What We Do", href: "#" },
  { label: "TG Academy", href: "#" },
  { label: "Strategic Partnership", href: "#" },
  { label: "Hiring", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book a Consultation", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Tobams Group home">
            <div className="w-8 h-8 rounded-full bg-[#3d0a3f] flex items-center justify-center">
              <span className="text-white text-xs font-bold">TG</span>
            </div>
            <span className="font-bold text-[#3d0a3f] text-sm leading-tight">
              TOBAMS<br />GROUP
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-[#3d0a3f] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3d0a3f] rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden sm:inline-flex items-center gap-2 bg-[#3d0a3f] hover:bg-[#5a1260] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3d0a3f]"
            >
              Take Assessment
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3d0a3f]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-[#3d0a3f] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3d0a3f]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#"
                className="block mt-2 bg-[#3d0a3f] text-white text-sm font-semibold px-4 py-2 rounded-md text-center hover:bg-[#5a1260] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3d0a3f]"
                onClick={() => setMenuOpen(false)}
              >
                Take Assessment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

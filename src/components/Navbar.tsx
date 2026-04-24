"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#", dropdown: true },
  { label: "What We Do", href: "#", dropdown: true },
  { label: "Jobs", href: "#", dropdown: true },
  { label: "Projects", href: "#" },
  { label: "TG Academy", href: "#" },
  { label: "Strategic Partnership", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book a Consultation", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP ROW */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/images/Logo.png"
              alt="Tobams Group Logo"
              width={130}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-3">

            {/* Account */}
            <button className="hidden lg:flex items-center gap-2 bg-[#6a1b6b] hover:bg-[#5a1260] text-white text-sm px-3 py-2 rounded-md transition">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-300 text-xs">
                👤
              </span>
              Account
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* CTA */}
            <Link
              href="#"
              className="bg-[#e63946] hover:bg-[#d62839] hidden lg:inline-flex text-white text-sm font-semibold px-4 py-2 rounded-md transition"
            >
              Take Assessment
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>
        </div>

        {/* BOTTOM NAV LINKS */}
        <div className="hidden lg:flex items-center justify-center gap-8 h-12 border-t border-gray-100">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 text-sm text-gray-700 hover:text-[#3d0a3f] transition ${
                i === 0
                  ? "relative after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[2px] after:bg-[#3d0a3f]"
                  : ""
              }`}
            >
              {link.label}

              {link.dropdown && (
                <svg
                  className="w-3 h-3 mt-[1px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 px-4 pb-4 bg-white">
          <div className="flex flex-col gap-2 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-700 py-2"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#"
              className="mt-2 bg-[#e63946] text-white text-center py-2 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Take Assessment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
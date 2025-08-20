"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div className="bg-white rounded-full shadow-lg flex items-center justify-between px-4 md:px-8 py-2 border border-gray-200 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="NAC Logo"
              width={60}
              height={60}
              className="cursor-pointer pt-2"
            />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 font-semibold hover:text-black"
            >
              Home
            </Link>
            <Link
              href="/direct-registration"
              className="text-gray-700 hover:text-black"
            >
              Student Participation
            </Link>
            <Link href="/legacy" className="text-gray-700 hover:text-black">
              NAC Legacy
            </Link>
            <Link
              href="/study-material"
              className="text-gray-700 hover:text-black"
            >
              Study Material
            </Link>
            <Link href="/rewards" className="text-gray-700 hover:text-black">
              Awards
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-black">
              FAQs
            </Link>
            <Link href="/list-of-pages" className="text-gray-700 hover:text-black">
              All Pages
            </Link>
          </nav>

          {/* Register Button */}
          <div className="flex-shrink-0 hidden md:block">
            <Link href="/school-registration">
              <Button className="bg-[#EE7E1A] hover:bg-orange-500 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold">
                Register as School
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 z-50 w-full">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 px-6 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 font-semibold hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/direct-registration"
                className="text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Student Participation
              </Link>
              <Link
                href="/legacy"
                className="text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                NAC Legacy
              </Link>
              <Link
                href="/study-material"
                className="text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Study Material
              </Link>
              <Link
                href="/rewards"
                className="text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Awards
              </Link>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link
                href="/list-of-pages"
                className="text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                All Pages
              </Link>
              <Link
                href="/school-registration"
                onClick={() => setMenuOpen(false)}
              >
                <Button className="bg-[#EE7E1A] hover:bg-orange-500 text-white w-full px-6 py-2 rounded-full flex items-center gap-2 font-semibold">
                  Register as School
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

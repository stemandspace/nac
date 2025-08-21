"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import route from "@/lib/route";

const navItems = [
  {
    label: "Home",
    href: route.HOME,
  },
  {
    label: "Participation Via School",
    href: route.SCHOOL_REGISTRATION,
  },
  {
    label: "Direct Participation",
    href: route.STUDENT_REGISTRATION,
  },
  {
    label: "NAC Legacy",
    href: route.LEGACY_NAC,
  },
  {
    label: "Study Material",
    href: route.STUDY_MATERIAL,
  },
  {
    label: "Awards",
    href: route.AWARDS,
  },
  {
    label: "FAQs",
    href: route.FAQ,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if a nav item is active
  const isActive = (href: string) => {
    // For root
    if (href === "/") return pathname === "/";
    // For other paths, check if pathname starts with href
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed  top-0 left-0 w-full z-50">
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`font-semibold hover:text-[#ee7e1a] ${
                  isActive(item.href) ? "text-[#ee7e1a]" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Register Button */}
          <div className="flex-shrink-0 hidden md:block relative group">
            <button
              className="bg-[#EE7E1A] hover:bg-orange-500 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold focus:outline-none"
              type="button"
            >
              Register as
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-150 z-50">
              <Link
                href={route.SCHOOL_REGISTRATION}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
              >
                School
              </Link>
              <Link
                href={route.STUDENT_REGISTRATION}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
              >
                Student
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 z-50 w-full">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    isActive(item.href)
                      ? "text-[#ee7e1a] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href={route.SCHOOL_REGISTRATION}
                onClick={() => setMenuOpen(false)}
              >
                <Button className="bg-[#EE7E1A] hover:bg-orange-500 text-white w-full px-6 py-2 rounded-full flex items-center gap-2 font-semibold">
                  Register as School
                </Button>
              </Link>
              <Link
                href={route.STUDENT_REGISTRATION}
                onClick={() => setMenuOpen(false)}
              >
                <Button className="border-2 border-[#EE7E1A] text-[#EE7E1A] bg-white hover:bg-[#EE7E1A] hover:text-white w-full px-6 py-2 rounded-full flex items-center gap-2 font-semibold transition-colors duration-200">
                  Register as Student
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

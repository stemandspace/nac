"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div className="bg-white rounded-full shadow-lg flex items-center justify-between px-6 py-2 border border-gray-200">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="NAC Logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 font-semibold hover:text-black">
              Home
            </Link>
            <Link href="/school-registration" className="text-gray-700 hover:text-black">
              Participation Via School
            </Link>
            <Link href="/direct-registration" className="text-gray-700 hover:text-black">
              Direct Participation
            </Link>
            <Link href="/legacy" className="text-gray-700 hover:text-black">
              NAC Legacy
            </Link>
            <Link href="/study-material" className="text-gray-700 hover:text-black">
              Study Material
            </Link>
            <Link href="/rewards" className="text-gray-700 hover:text-black">
              Awards
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-black">
              FAQs
            </Link>
          </nav>

          {/* Register Button (Always Visible) */}
          <div className="hidden md:block">
            <Button className="bg-[#EE7E1A] hover:bg-orange-500 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold">
              REGISTER AS: School
              <ChevronDown size={18} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-xl shadow-lg border border-gray-200 p-4 space-y-4">
            <Link href="/" className="block text-gray-700 font-medium hover:text-black">
              Home
            </Link>
            <Link href="/school-registration" className="block text-gray-700 hover:text-black">
              Participation Via School
            </Link>
            <Link href="/direct-registration" className="block text-gray-700 hover:text-black">
              Direct Participation
            </Link>
            <Link href="/legacy" className="block text-gray-700 hover:text-black">
              NAC Legacy
            </Link>
            <Link href="/study-material" className="block text-gray-700 hover:text-black">
              Study Material
            </Link>
            <Link href="/rewards" className="block text-gray-700 hover:text-black">
              Awards
            </Link>
            <Link href="/faqs" className="block text-gray-700 hover:text-black">
              FAQs
            </Link>

            {/* Mobile Register Button */}
            <Button className="w-full bg-[#EE7E1A] hover:bg-orange-500 text-white rounded-full flex items-center justify-center gap-2 font-semibold">
              REGISTER AS: School
              <ChevronDown size={18} />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

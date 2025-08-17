import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div className="bg-white rounded-full shadow-lg flex items-center justify-between px-8 py-2 border border-gray-200">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="NAC Logo"
              width={70}
              height={70}
              className="cursor-pointer"
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 font-semibold hover:text-black"
            >
              Home
            </Link>
            <Link
              href="/school-registration"
              className="text-gray-700 hover:text-black"
            >
              Participation Via School
            </Link>
            <Link
              href="/schools"
              className="text-gray-700 hover:text-black"
            >
              View Schools
            </Link>
            <Link
              href="/direct-registration"
              className="text-gray-700 hover:text-black"
            >
              Direct Participation
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
          </nav>

          {/* Register Button */}
          <div className="flex-shrink-0">
            <Link href="/school-registration">
              <Button className="bg-[#EE7E1A] hover:bg-orange-500 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold">
                REGISTER AS: School
                <ChevronDown size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import route from "@/lib/route";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Left - Navigation Links */}
          <div className="flex flex-wrap gap-6">
            <Link
              href={route.HOME}
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              Home
            </Link>

            <Link
              href={route.AWARDS}
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              Rewards
            </Link>
            <Link
              href={route.SPACETOPIA}
              target="_blank"
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              Spacetopia
            </Link>
            <Link
              href={route.CONTACT}
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              Contact
            </Link>
            <Link
              href={route.FAQ}
              className="text-gray-700 hover:text-gray-900 text-sm"
            >
              FAQs
            </Link>
          </div>

          {/* Center - Contact Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-gray-700">
            <span>nationalastronomy@gmail.com</span>
            <span>Phn: +91 8506955554</span>
            <span>Monday - Friday, 9:30 AM - 6 PM</span>
          </div>
        </div>

        {/* Bottom - Copyright and Legal */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <span>© 2025 Nationalastronomy.Org - All Rights Reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-900">
              Terms Of Service
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

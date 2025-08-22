import Link from "next/link";
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

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Left - Navigation Links */}
          <div className="flex flex-wrap gap-6 items-center justify-center w-full">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:underline text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom - Copyright and Legal */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-white">
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

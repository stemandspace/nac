export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Left - Navigation Links */}
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
              Rules
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
              Rewards
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
              Spacetopia
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
              FAQs
            </a>
          </div>

          {/* Center - Contact Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-gray-700">
            <span>nationalastronomy@gmail.com</span>
            <span>Phn: 023 456 7890</span>
            <span>Monday - Friday, 9:00 AM - 9 PM</span>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
              Facebook
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
              Youtube
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom - Copyright and Legal */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <span>© 2015 Nationalastronomy.Org - All Rights Reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-900">
              Terms Of Service
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

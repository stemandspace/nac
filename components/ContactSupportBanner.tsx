import React from "react";

const ContactSupportBanner: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <p className="text-[#EE7E1A] font-semibold text-sm uppercase tracking-wide mb-2">
              CONTACT US ANYTIME
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Need Help with Registration?
            </h3>
          </div>

          {/* Middle Section - Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/logo.png"
                alt="NAC Logo"
                className="w-30 h-30 object-contain"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center lg:text-right">
            <p className="text-white text-base mb-2">
              Our NAC 2025 Support Team is here to guide you.
            </p>
            <p className="text-white text-lg font-semibold">
              Email:{" "}
              <a
                href="mailto:hello@nationalastronomy.org"
                className="text-[#EE7E1A] hover:text-[#D67015] transition-colors underline"
              >
                hello@nationalastronomy.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupportBanner;

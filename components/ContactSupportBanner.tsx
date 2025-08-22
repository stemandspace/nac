import React from "react";

const ContactSupportBanner: React.FC = () => {
  return (
    <section className="py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center lg:text-left">
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
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center lg:text-right">
            <p className="text-white text-base mb-2">
              NAC Support Team is here to guide you.
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

            <div className="h-2" />

            <span className="text-white">Monday - Friday, 9:30 AM - 6 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupportBanner;

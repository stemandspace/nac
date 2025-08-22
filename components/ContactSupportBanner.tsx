import React from "react";
import Image from "next/image";

const ContactSupportBanner: React.FC = () => {
  return (
    <section className="py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="grid gap-4">
            <p className="text-white text-center">Educational Partner</p>
            <div className="relative w-full flex justify-center">
              <div className="relative w-40 h-16 sm:w-48 sm:h-20 md:w-56 md:h-24 -mt-7">
                <Image
                  src="https://www.spacetopia.in/space-topia/footer/footer-logo.svg"
                  alt="Educational Partner Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Middle Section - Logo */}
          <div className="flex justify-center">
            <div className="relative w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24">
              <Image
                src="/logo.png"
                alt="NAC Logo"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                priority
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

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

          {/* Middle Section - Curved Arrow */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Curved arrow pointing to the right */}
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                className="text-white"
              >
                <path
                  d="M10 40 Q60 10 100 40"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
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
                href="mailto:nac@stemands.space"
                className="text-[#EE7E1A] hover:text-[#D67015] transition-colors underline"
              >
                nac@stemands.space
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupportBanner;

import route from "@/lib/route";
import Link from "next/link";
import React from "react";

const SupportHelpSection: React.FC = () => {
  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Have a Question Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#BEDB63]/30 flex flex-col h-full">
            <div>
              <div className="w-16 h-16 bg-[#BEDB63] bg-opacity-20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2B0A] text-center mb-4">
                Have a Question
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Check our most common queries about NAC registration and
                participation.
              </p>
            </div>
            <Link
              href={route.FAQ}
              className="w-full bg-[#EE7E1A] hover:bg-[#D67015] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:scale-105 mt-auto flex justify-center items-center"
            >
              <span className="text-white">Click Here For FAQs</span>
            </Link>
          </div>

          {/* Understand the Rules Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#BEDB63]/30 flex flex-col h-full">
            <div>
              <div className="w-16 h-16 bg-[#BEDB63] bg-opacity-20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-[#70AA25]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2B0A] text-center mb-4">
                Understand the Rules
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Download the participation terms PDF.
              </p>
            </div>
            <button className="w-full bg-[#EE7E1A] hover:bg-[#D67015] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:scale-105 mt-auto">
              Download PDF
            </button>
          </div>

          {/* Need Help Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#BEDB63]/30 flex flex-col h-full">
            <div>
              <div className="w-16 h-16 bg-[#BEDB63] bg-opacity-20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-[#70AA25]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2B0A] text-center mb-4">
                Need Help?
              </h3>
              {/* <p className="text-gray-700 text-center mb-2">
                Email:{" "}
                <a
                  href="mailto:hello@nationalastronomy.org"
                  className="underline hover:text-[#70AA25] transition-colors"
                >
                  hello@nationalastronomy.org
                </a>
              </p> */}
              <p className="text-gray-700 text-center mb-6">
                Our team is here to assist schools and parents.
              </p>
            </div>
            <a
              href="mailto:hello@nationalastronomy.org"
              className="w-full bg-[#EE7E1A] hover:bg-[#D67015] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:scale-105 mt-auto flex justify-center items-center"
            >
              <span className="text-white"> hello@nationalastronomy.org</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHelpSection;

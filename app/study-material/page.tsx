import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import Section1 from "@/components/study-material/section1";
import Section2 from "@/components/study-material/section2";
import Section3 from "@/components/study-material/section3";
import Support from "@/components/school-registration/support";
import SpacetopiaSubscriptionSection from "@/components/SpacetopiaSubscriptionSection";
import ContactSupportBanner from "@/components/ContactSupportBanner";
import Link from "next/link";

export default function StudyMaterialPage() {
  return (
    <>
      <Hero
        bgimage="/home/header2.jpg"
        title="Get Ready to Excel with Comprehensive & Engaging Study Material for NAC"
        desc="Whether your child is participating via school or directly, our curated learning resources will prepare them for success in the National Astronomy Challenge."
      />
      <Section1 />
      <Section2 />
      <Section3 />

      {/* Space Comics Hero Section */}
      <section className="py-10 bg-gradient-to-br from-[#003C5C] via-[#003451] to-[#001E31] relative overflow-hidden">
        {/* Stars Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-32 left-1/4 w-1 h-1 bg-white rounded-full opacity-40"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white rounded-full opacity-70"></div>
          <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-white rounded-full opacity-50"></div>
          <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full opacity-60"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Learn Through Fun and Imagine Your
            <br />
            Future in Space
          </h2>
          <p className="text-blue-200 text-lg font-medium mb-12 max-w-3xl mx-auto">
            Explore engaging space comics for young minds and join exclusive
            career seminars with
            <br />
            scientists & space professionals.
          </p>

          {/* Comic Books Display */}
          <div className="relative mb-12">
            <div className="flex justify-center items-center space-x-8">
              {/* Left Comic */}
              <div className="transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/study/space.png"
                  alt="Space Careers Comic"
                  className="w-32 h-48 rounded-lg shadow-2xl"
                />
              </div>

              {/* Center Comic */}
              <div className="transform hover:scale-105 transition-transform duration-300 z-10">
                <img
                  src="/study/space.png"
                  alt="Discovering Space Careers"
                  className="w-40 h-60 rounded-lg shadow-2xl"
                />
              </div>

              {/* Right Comic */}
              <div className="transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/study/space.png"
                  alt="Space Adventures Comic"
                  className="w-32 h-48 rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 400"
            >
              <path
                d="M200 200 Q400 100 600 200"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M200 200 Q400 300 600 200"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://events.spacetopia.in/comic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg font-medium">
                Know More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Spacetopia Sessions Grid */}
      <section className="pt-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-medium text-gray-900 mb-4">
              Live & Interactive Spacetopia Sessions
            </h2>
            <p className="text-gray-600 text-lg font-medium max-w-3xl mx-auto">
              Join engaging live sessions, Practice Master Classes to deepen
              your space knowledge, specially designed for aspiring astronomers
              and keen space enthusiasts.
            </p>
          </div>

          {/* Grade 1-4 */}
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Grade 1-4
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="relative group cursor-pointer rounded-4xl overflow-hidden"
                >
                  <img
                    src="/study/sessions.jpg"
                    alt="Spacetopia Session"
                    className="w-full h-64 object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-medium mb-2">
                      Lorem ipsum dolor sit amet consectetur.
                    </h4>
                    <p className="text-sm font-medium flex items-center gap-2 opacity-90">
                      8.12.2025 <span>•</span> 25 min <span>•</span> 5 credit
                      require
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grade 5-7 */}
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Grade 5-7
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="relative group cursor-pointer rounded-4xl overflow-hidden"
                >
                  <img
                    src="/study/sessions.jpg"
                    alt="Spacetopia Session"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-medium mb-2">
                      Lorem ipsum dolor sit amet consectetur.
                    </h4>
                    <p className="text-sm font-medium flex items-center gap-2 opacity-90">
                      10.12.2025 <span>•</span> 30 min <span>•</span> 8 credit
                      require
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grade 8-10 */}
          <div>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Grade 8-10
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="relative group cursor-pointer rounded-4xl overflow-hidden"
                >
                  <img
                    src="/study/sessions.jpg"
                    alt="Spacetopia Session"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-medium mb-2">
                      Lorem ipsum dolor sit amet consectetur.
                    </h4>
                    <p className="text-sm font-medium flex items-center gap-2 opacity-90">
                      12.12.2025 <span>•</span> 40 min <span>•</span> 10 credit
                      require
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

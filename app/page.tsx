import Link from "next/link";
import Image from "next/image";
import route from "@/lib/route";
import { Button } from "@/components/ui/button";
import PrepareNac from "@/components/prepare-nac";
import WhatIsNacSection from "@/components/WhatIsNacSection";
import HighlightReelCarousel from "@/components/highlight-reel-carousel";
import AwardsCeremonyCarousel from "@/components/awards-ceremony-carousel";
import Hero from "@/components/hero";

const HeroImage1 = "/s1.jpg";
const HeroImage2 = "/s2.jpg";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero
        bgimage={
          "https://s3.us-east-1.amazonaws.com/myckc/myckc/H8_18ecbaac3f.jpg?updatedAt=2025-08-22T07%3A51%3A00.708Z"
        }
        title="NAC 2025 is Here! Be Part of India’s Biggest Astronomy Challenge."
        desc="<b className='text-orange-500'>For Schools:</b> Enable students (Grades 4–9) to join India’s biggest astronomy challenge. <br/> <b className='text-orange-500'>For Parents:</b> If the school isn’t participating, register your child directly and let them shine."
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Button className="bg-[#EE7E1A] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#d96f16]">
            <Link href={route.SCHOOL_REGISTRATION} className="text-white">
              Register Directly{" "}
            </Link>
          </Button>
          <Button className="bg-[#EE7E1A] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#d96f16]">
            Register your School
          </Button>
        </div>
      </Hero>

      {/* What is NAC Section */}
      <WhatIsNacSection />

      {/* Participation Pathways Section */}
      <section className="py-8 bg-[#EDF6FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
              Participation Pathways - Choose Your Journey
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
              Whether through your school or directly as a parent, every child
              has a gateway to cosmic adventure
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Path 1 */}
            <div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Path 1: School Registration
                  </h3>
                  <p className="text-gray-900">
                    Registration via School <del> INR 500</del>{" "}
                    <span className="font-bold">INR 300</span> (Taxes extra)
                  </p>
                </div>
                <Button className="bg-[#EE7E1A] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#d96f16]">
                  <Link href={route.SCHOOL_REGISTRATION} className="text-white">
                    Know More
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  "Schools register → get custom registration link.",
                  "School shares the  dedicated registration link with students.",
                  "Students starts registering on their school specific link.",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white rounded-lg border border-gray-100 p-4"
                  >
                    <div className="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md flex-shrink-0">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                      </div>
                    </div>
                    <p className="text-gray-900 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Path 2 */}
            <div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Path 2: Direct Registration
                  </h3>
                  <p className="text-gray-900">
                    Not through School Registration:{" "}
                    <span className="font-bold">INR 500</span>{" "}
                    <span className="text-sm">(Taxes extra)</span>
                  </p>
                </div>
                <Button className="bg-[#EE7E1A] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#d96f16]">
                  <Link
                    href={route.STUDENT_REGISTRATION}
                    className="text-white"
                  >
                    Know More
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  "For students whose schools are not participating.",
                  "Register directly by grade.",
                  "If their school joins later, their direction registration  will be merged with the school’s.",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white rounded-lg border border-gray-100 p-4"
                  >
                    <div className="w-10 h-10 bg-blue-200 flex items-center justify-center rounded-md flex-shrink-0">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                      </div>
                    </div>
                    <p className="text-gray-900 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Ceremony Section */}
      <AwardsCeremonyCarousel />

      {/* Prepare NAC Section */}
      <PrepareNac />

      {/* Awards & Recognition Section */}
      <section className="pt-4 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-900 leading-snug">
              Celebrating Excellence, Inspiring Futures
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed mb-5 mt-2">
              Honoring Achievements with a Space Expedition & Awards Ceremony –
              2025
            </p>
          </div>

          {/* Awards Image */}
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden relative">
              <Image
                src="/udaipur1.jpg"
                alt="Awards ceremony with students and certificates"
                className="w-full h-full object-cover"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>
          </div>
          <p className="text-center mt-5 text-lg">
            Udaipur Solar Observatory, Udaipur
          </p>
          <div className="flex items-center justify-center mt-5">
            <Link
              href={route.AWARDS}
              className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* NAC 2025 Timeline Section */}
      <section
        className="py-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/home/blue-bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-4xl font-medium text-white mb-2">
              NAC 2025
            </h2>
            <p className="text-center text-xl text-white mb-3">
              Important Timeline
            </p>
          </div>

          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
            {/* Registration Opens */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFFFFF33] rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/home/nac1.png"
                  alt="Registration Opens"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">
                REGISTRATION OPENS
              </h3>
              <p className="text-white text-sm">25th August 2025</p>
            </div>

            {/* Registration Closes */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFFFFF33] rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/home/nac2.png"
                  alt="Registration Closes"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">
                REGISTRATION CLOSES
              </h3>
              <p className="text-white text-sm">15th December 2025</p>
            </div>

            {/* Olympiad Exam */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFFFFF33] rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/home/nac3.png"
                  alt="Olympiad Exam"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">
                OLYMPIAD EXAM
              </h3>
              <p className="text-white text-sm">January 2026</p>
            </div>

            {/* Results Announced */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFFFFF33] rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/home/nac4.png"
                  alt="Results Announced"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">
                RESULTS ANNOUNCED
              </h3>
              <p className="text-white text-sm">March 2026</p>
            </div>

            {/* Awards & Udaipur Visit */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFFFFF33] rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/home/nac5.png"
                  alt="Awards & Udaipur Visit"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">
                AWARDS & UDAIPUR VISIT
              </h3>
              <p className="text-white text-sm">May 2026</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="grid grid-cols-2 max-w-xl justify-center gap-6 relative mx-auto">
            {/* School Dropdown */}

            <Link
              href={route.SCHOOL_REGISTRATION}
              className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition text-center"
            >
              School Registration
            </Link>
            <Link
              href={route.STUDENT_REGISTRATION}
              className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition text-center"
            >
              Direct Registration
            </Link>
          </div>
        </div>
      </section>

      {/* Highlight Reel - NAC Legacy Carousel */}
      <HighlightReelCarousel />
    </main>
  );
}

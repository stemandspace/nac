import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  FileText,
  Star,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AwardsCeremonyCarousel from "@/components/awards-ceremony-carousel";
import HighlightReelCarousel from "@/components/highlight-reel-carousel";
import SupportHelpSection from "@/components/SupportHelpSection";
import SpacetopiaSubscriptionSection from "@/components/SpacetopiaSubscriptionSection";
import ContactSupportBanner from "@/components/ContactSupportBanner";

const HeroImage1 = "/s1.jpg";
const HeroImage2 = "/s2.jpg";

export default function HomePage() {
  return (
    <main className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Hero */}
        <div
          className="relative min-h-[70vh] lg:min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroImage1})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 bg-opacity-30"></div>
          <div className="relative flex flex-col justify-end pb-6 h-full px-4 sm:px-6 md:px-8 lg:px-12 text-white space-y-4 sm:space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              NAC 2025 is Here!
              <br /> Be Part of India's Biggest
              <br /> Astronomy Challenge
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-xl">
              Open To Schools And Individual Students Across India And The
              World.
              <br /> Exciting Prizes, National Recognition & A Journey Into
              Space Learning Awaits!
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                href="/st/reg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-4 sm:px-5 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-200"
              >
                Register as Student
              </Link>
            </div>
          </div>
        </div>

        {/* Right Hero */}
        <div
          className="relative min-h-[70vh] lg:min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroImage2})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 bg-opacity-30"></div>
          <div className="relative flex flex-col justify-end pb-6 h-full px-4 sm:px-6 md:px-8 lg:px-12 text-white space-y-4 sm:space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              NAC 2025 is Here!
              <br /> Be Part of India's Biggest
              <br /> Astronomy Challenge
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-xl">
              Open To Schools And Individual Students Across India And The
              World.
              <br /> Exciting Prizes, National Recognition & A Journey Into
              Space Learning Awaits!
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                href="/st/reg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-4 sm:px-5 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-200"
              >
                Register as Student
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What is NAC Section */}
      <section className="py-6 bg-white pb-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-orange-500 font-semibold text-xs uppercase tracking-wide mb-2">
                WHAT IS NAC?
              </p>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
                Over 1 lakh students inspired <br /> since 2018.
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition">
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content Row */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-4 max-w-md">
                {[
                  "Fosters scientific curiosity, hands-on learning, and direct exposure to the space ecosystem.",
                  "Opportunity to interact with real scientists and win national-level recognition.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0 mt-2"></div>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/school-registration"
                className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-base font-semibold transition"
              >
                Learn More About NAC
              </Link>
            </div>

            {/* Right Column (Video/Image) */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/home/vimg1.jpg"
                  alt="NAC Students"
                  className="w-full h-auto object-cover"
                />
                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <div className="w-0 h-0 border-l-[12px] border-l-gray-900 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Pathways Section */}
      <section className="py-18 bg-[#EDF6FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
              Participation Pathways - Choose Your Journey
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dolor tincidunt cum quis
              purus commodo. Cursus praesent feugiat vestibulum fames velit
              mauris blandit.
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
                    School Registration: INR{" "}
                    <span className="line-through text-red-500">300</span>{" "}
                    <span className="font-bold">500</span>
                  </p>
                </div>
                <Button className="bg-[#EE7E1A] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#d96f16]">
                  <Link href="/school-registration" className="text-white">
                    Know More
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  "Schools register → get custom registration link.",
                  "Students register via this link.",
                  "Consolidated school-wise rankings",
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
                    Path 2: Individual Registration
                  </h3>
                  <p className="text-gray-900">
                    Individual Registration: INR{" "}
                    <span className="font-bold">500</span>{" "}
                    <span className="text-sm">(Taxes extra)</span>
                  </p>
                </div>
                <Button className="bg-[#EE7E1A] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#d96f16]">
                  <Link href="/st/reg" className="text-white">
                    Know More
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  "For students whose schools are not participating.",
                  "Register directly by grade.",
                  "National grade-wise ranking for individuals.",
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

      {/* Spacetopia Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              {/* Logo */}
              <img
                src="/home/logo.svg"
                alt="Spacetopia Logo"
                className="h-24 w-auto"
              />

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl text-gray-900 leading-snug">
                NAC 2025 Preparation Toolkit – Powered by Spacetopia
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                Get ready with Spacetopia – the reimagined learning platform
                formerly known as Cosmic Kids Club.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3">
                {[
                  "Video lessons, quizzes, comics & mock Olympiads.",
                  "Trusted by thousands of NAC participants.",
                  "Continuous space learning even beyond the Olympiad.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {/* Arrow image */}
                    <img
                      src="/home/arrow-right.png"
                      alt="Arrow"
                      className="w-5 h-5 mt-1"
                    />
                    <p className="text-gray-700 text-lg">{text}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link
                href="/study-material"
                className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition"
              >
                Know More
              </Link>
            </div>

            {/* Right video/image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/home/vimg2.jpg" // replace with actual image or video thumbnail
                  alt="NRSC Visit"
                  className="w-full h-auto object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-l-[14px] border-l-gray-900 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="pt-4 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-5 ">
            <h2 className="text-3xl md:text-4xl text-gray-900 leading-snug">
              Awards & Recognition
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dolor tristique cum quis
              purus commodo. Cursus praesent feugiat vestibulum ferme velit
              mauris blandit.
            </p>
            <Link
              href="/awards"
              className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition"
            >
              Know More
            </Link>
          </div>

          {/* Awards Image */}
          <div className="relative">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden">
              <img
                src="/home/image.png"
                alt="Awards ceremony with students and certificates"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NAC 2025 Timeline Section */}
      <section
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/home/blue-bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-medium text-white mb-8">
              NAC 2025 Timeline
            </h2>
          </div>

          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
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
              <p className="text-white text-sm">08/03/2025</p>
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
              <p className="text-white text-sm">08/03/2025</p>
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
              <p className="text-white text-sm">08/03/2025</p>
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
              <p className="text-white text-sm">08/03/2025</p>
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
              <p className="text-white text-sm">08/03/2025</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 relative">
            {/* School Dropdown */}
            <div className="relative group">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-4xl font-semibold uppercase tracking-wide flex items-center gap-2">
                <Link href="/school-registration" className="text-white">
                  REGISTER AS School
                </Link>
                <span>
                  <svg
                    className="w-4 h-4 group-hover:hidden"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4 hidden group-hover:inline"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </span>
              </Button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Primary School
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  High School
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  College
                </a>
              </div>
            </div>

            {/* Student Dropdown */}
            <div className="relative group">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 rounded-4xl font-semibold uppercase tracking-wide flex items-center gap-2">
                <Link href="/st/reg" className="text-white hover:text-blue-600">
                  Register As Student
                </Link>
                <span>
                  <svg
                    className="w-4 h-4 group-hover:hidden"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4 hidden group-hover:inline"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </span>
              </Button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Undergraduate
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Postgraduate
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Other
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Registration Buttons */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            <h2 className="text-4xl md:text-4xl text-gray-900 leading-tight">
              Why Every Child Must
              <br />
              Participate
            </h2>

            {/* Registration Buttons */}
            <div className="flex gap-4">
              <Button className="bg-[#EE7E1A] text-white px-10 py-6 rounded-4xl font-semibold uppercase tracking-wide flex items-center gap-2">
                <Link href="/school-registration" className="text-white">
                  REGISTER AS School
                </Link>
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button className="bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 rounded-4xl font-semibold flex items-center gap-2">
                <Link
                  href="/st/reg"
                  className="text-gray-700 hover:text-gray-700"
                >
                  Register As Student
                </Link>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div
              className="rounded-xl p-6 min-h-[220px] flex flex-col justify-between"
              style={{ backgroundColor: "#93C14A26" }}
            >
              <div className="mb-4">
                <img
                  src="/home/icon2.png"
                  alt="Build Scientific Curiosity"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Build Scientific Curiosity
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Risus habitant aenean
                etiam orci.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-xl p-6 min-h-[180px] flex flex-col justify-between"
              style={{ backgroundColor: "#93C14A26" }}
            >
              <div className="mb-4">
                <img
                  src="/home/icon2.png"
                  alt="Strengthen Logic & Reasoning"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Strengthen Logic & Reasoning
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Risus habitant aenean
                etiam orci.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-xl p-6 min-h-[180px] flex flex-col justify-between"
              style={{ backgroundColor: "#93C14A26" }}
            >
              <div className="mb-4">
                <img
                  src="/home/icon2.png"
                  alt="National-level Achievement"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                National-level Achievement
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Risus habitant aenean
                etiam orci.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="rounded-xl p-6 min-h-[180px] flex flex-col justify-between"
              style={{ backgroundColor: "#93C14A26" }}
            >
              <div className="mb-4">
                <img
                  src="/home/icon2.png"
                  alt="Interaction with Scientists"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Interaction with Scientists
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Risus habitant aenean
                etiam orci.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Reel - NAC Legacy Carousel */}
      <HighlightReelCarousel />

      {/* Support & Help Section */}
      <SupportHelpSection />

      {/* Spacetopia Subscription Section */}
      <SpacetopiaSubscriptionSection />

      {/* Contact Support Banner */}
      <ContactSupportBanner />
      {/* Stay Connected Section */}
    </main>
  );
}

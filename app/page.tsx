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

export default function HomePage() {
  return (
    <main className="relative">
      <div className="grid md:grid-cols-2">
        {/* Left Hero */}
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/home/header1.jpg')`,
          }}
        >
          <div className="flex flex-col justify-end pb-6 h-full px-8 md:px-12 lg:px-16 text-white space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              NAC 2025 is Here!
              <br /> Be Part of India's Biggest
              <br /> Astronomy Challenge
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-100 max-w-xl">
              Open To Schools And Individual Students Across India And The
              World.
              <br /> Exciting Prizes, National Recognition & A Journey Into
              Space Learning Awaits!
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-lg text-base font-semibold">
                Register As An Indian Student
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-5 py-2 rounded-lg text-base font-semibold">
                Register As A Foreign Student
              </button>
            </div>
          </div>
        </div>

        {/* Right Hero */}
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/home/header2.jpg')`,
          }}
        >
          <div className="flex flex-col justify-end pb-6 h-full px-8 md:px-12 lg:px-16 text-white space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              NAC 2025 is Here!
              <br /> Be Part of India's Biggest
              <br /> Astronomy Challenge
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-100 max-w-xl">
              Open To Schools And Individual Students Across India And The
              World.
              <br /> Exciting Prizes, National Recognition & A Journey Into
              Space Learning Awaits!
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-lg text-base font-semibold">
                Register As An Indian School
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-5 py-2 rounded-lg text-base font-semibold">
                Register As A Foreign School
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* What is NAC Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-3">
                WHAT IS NAC?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
                Over 1 lakh students inspired since 2018.
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition">
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Row */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  "Fosters scientific curiosity, hands-on learning, and direct exposure to the space ecosystem.",
                  "Opportunity to interact with real scientists and win national-level recognition.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center mt-1">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
                Learn More About NAC
              </button>
            </div>

            {/* Right Column (Video/Image) */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/home/vimg1.jpg"
                  alt="NAC Students"
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

      {/* Participation Pathways Section */}
      <section className="py-10 bg-[#EDF6FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Participation Pathways - Choose Your Journey
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dolor tristique cum quis
              purus commodo. Cursus praesent feugiat vestibulum ferme velit
              mauris blandit.
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Path 1 */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-gray-900">
                  Path 1: School Registration
                </h3>
                <Button className="bg-[#EE7E1A] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#d96f16]">
                  Know More
                </Button>
              </div>

              <div className="space-y-5">
                {[
                  "Schools register → get custom registration link.",
                  "Students register via this link.",
                  "Consolidated school-wise rankings",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white rounded-lg shadow-sm p-4"
                  >
                    <div className=" w-10 h-10 flex items-center justify-center rounded-md flex-shrink-0">
                      <Image
                        src="/home/icon.png"
                        alt="Step Icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Path 2 */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-gray-900">
                  Path 2: Individual Registration
                </h3>
                <Button className="bg-[#EE7E1A] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#d96f16]">
                  Know More
                </Button>
              </div>

              <div className="space-y-5">
                {[
                  "For students whose schools are not participating.",
                  "Register directly by grade.",
                  "National grade-wise ranking for individuals.",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white rounded-lg shadow-sm p-4"
                  >
                    <div className=" w-10 h-10 flex items-center justify-center rounded-md flex-shrink-0">
                      <Image
                        src="/home/icon.png"
                        alt="Step Icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Ceremony Section */}
      <section className="relative">
        <div
          className="relative h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('/home/img2.png')`,
          }}
        >
          {/* Navigation arrows */}
          <button className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content overlay */}
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h3 className="text-6xl font-bold mb-2">2019</h3>
            <p className="text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur,
            </p>
          </div>

          {/* Year pagination */}
          <div className="absolute bottom-8 right-8 flex gap-4 text-white z-10">
            <button className="text-gray-400 hover:text-white transition-colors">
              2019
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              2018
            </button>
            <button className="text-white font-semibold">2019</button>
            <button className="text-gray-400 hover:text-white transition-colors">
              2020
            </button>
          </div>
        </div>
      </section>

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
              <button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
                Know More
              </button>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur. Dolor tristique cum quis
              purus commodo. Cursus praesent feugiat vestibulum ferme velit
              mauris blandit.
            </p>
            <Button className="bg-[#EE7E1A] text-white px-14 py-8 rounded-4xl text-lg font-semibold">
              Know More
            </Button>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-12">
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
                  className="w-8 h-8 object-contain"
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
                  className="w-8 h-8 object-contain"
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
                  className="w-8 h-8 object-contain"
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
                  className="w-8 h-8 object-contain"
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
                  className="w-8 h-8 object-contain"
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
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-4xl font-semibold uppercase tracking-wide">
                REGISTER AS School
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
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 rounded-4xl font-semibold uppercase tracking-wide">
                Register As Student
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
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight">
              Why Every Child Must
              <br />
              Participate
            </h2>

            {/* Registration Buttons */}
            <div className="flex gap-4">
              <Button className="bg-[#EE7E1A] text-white px-10 py-6 rounded-4xl font-semibold uppercase tracking-wide flex items-center gap-2">
                REGISTER AS School
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button className="bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 rounded-4xl font-semibold flex items-center gap-2">
                Register As Student
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
      <section className="py-10 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-12">
              Highlight Reel - NAC Legacy Carousel
            </h2>
          </div>

          {/* Carousel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <img
                  src=" /home/reel.jpg"
                  alt="NAC Legacy Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="text-gray-500 text-xs">
                  23 November Gandhinagar Road, Fort, Mumbai, adipisci
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <img
                  src="/home/reel.jpg"
                  alt="NAC Legacy Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="text-gray-500 text-xs">
                  23 November Gandhinagar Road, Fort, Mumbai, adipisci
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <img
                  src="/home/reel.jpg"
                  alt="NAC Legacy Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="text-gray-500 text-xs">
                  23 November Gandhinagar Road, Fort, Mumbai, adipisci
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <img
                  src="/home/reel.jpg"
                  alt="NAC Legacy Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="text-gray-500 text-xs">
                  23 November Gandhinagar Road, Fort, Mumbai, adipisci
                </p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button className="bg-[#EE7E1A] text-white px-12 py-6 rounded-4xl text-lg font-semibold">
              Know More
            </Button>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-[#BEDB63] to-[#70AA25] rounded-3xl p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left content */}
              <div className="text-white space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Stay Connected!
                </h2>

                <p className="text-sm leading-relaxed opacity-90">
                  Scan this QR Code to join the Official WhatsApp Community
                  <br />
                  for real-time updates, Spacetopia events & NAC-exclusive
                  engagement
                  <br />
                  this Season over 2025.
                </p>

                <div className="pt-4">
                  <p className="text-lg font-semibold">
                    Join Our WhatsApp Community.
                  </p>
                  <p className="text-base font-semibold opacity-90">
                    Don't miss out on exclusive content made just for NAC 2025
                    <br />
                    participants!
                  </p>
                </div>
              </div>

              {/* Right QR Code */}
              <div className="flex justify-center lg:justify-end relative">
                {/* Curved arrow pointing to QR code */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden lg:block">
                  <svg
                    width="140"
                    height="120"
                    viewBox="0 0 120 80"
                    className="text-white opacity-80"
                  >
                    <path
                      d="M10 40 Q60 10 100 40"
                      stroke="currentColor"
                      strokeWidth="2"
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
                        <polygon
                          points="0 0, 10 3.5, 0 7"
                          fill="currentColor"
                        />
                      </marker>
                    </defs>
                  </svg>
                </div>

                <div className="bg-white p-1 rounded-2xl shadow-lg">
                  <img
                    src="/home/barcode.png?height=200&width=200"
                    alt="QR Code for WhatsApp Community"
                    className="w-64 h-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import ExamInfoSection from "@/components/school-registration/examinfo";
import PartnerCarousel from "@/components/school-registration/PartnerCarousel";
import Link from "next/link";
import route from "@/lib/route";
import YouTube from "react-youtube";
import AwardsCarousel from "@/components/school-registration/AwardsCarousel";

export default function StudentRegistrationPage() {
  // Extract video ID from the YouTube URL
  const videoId = "DMz1ZycaKSg";

  // YouTube player options - responsive dimensions
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };
  return (
    <div className="min-h-screen">
      <Hero
        bgimage="/home/header2.jpg"
        title="Register Your School for NAC 2025 - Inspire the Next Generation of Astronomers!"
        desc="Bring the National Astronomy Challenge experience to your students. Register your school and give them a chance to compete, learn, and shine on a national stage."
      >
        <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-4xl font-semibold uppercase tracking-wide flex items-center gap-2">
          <Link href={route.SCHOOL_REGISTRATION_FORM} className="text-white">
            Register your school
          </Link>
        </Button>
      </Hero>

      {/* Partners Section */}
      <PartnerCarousel />

      {/* 3-Step Process Section */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            A Simple Process for Schools to Join for NAC
          </h2>
          <p className="text-gray-600 mb-12">
            Watch this video to learn how schools can register, generate their
            dedicated link, and share with their students to register.
          </p>

          <div className="grid gap-8 items-center">
            <div className="relative max-w-2xl mx-auto w-full">
              <div className="overflow-hidden rounded-xl shadow-lg bg-gray-100">
                <div className="w-full aspect-video">
                  <YouTube
                    videoId={videoId}
                    opts={opts}
                    className="w-full h-full rounded-xl"
                    title="What is NAC - National Astronomy Challenge"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Steps Section */}
      <section className="py-8 bg-[#EDF6FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-2">
              Simple Steps for Schools & Students
            </h2>
            {/* <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
              We’ve made the registration process quick, clear, and supportive
              for everyone.
            </p> */}
          </div>

          {/* Two Columns */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Path 1 */}
            <div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Path 1: For Schools
                  </h3>
                  <p className="text-gray-900">
                    Registration via School <del> INR 500</del>{" "}
                    <span className="font-bold">INR 300</span> (Taxes extra)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Fill out the school registration form.",
                  "Student registration link is automatically generated and sent to you.",
                  "NAC Team will call your school for a quick briefing and support.",
                  "Share the student registration link with parents and students.",
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
                    For Students (via School):
                  </h3>
                  <p className="text-gray-900">
                    School Registration <del> USD 12</del>{" "}
                    <span className="font-bold">USD 10</span> (Taxes extra)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Receive registration link from school.",
                  "Visit NAC website to learn more & fill in the registration form.",
                  "Complete payment (if applicable).",
                  "Receive confirmation email instantly.",
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

      {/* Spacetopia Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Get Ready with Spacetopia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <p className="text-[#EE7E1A] font-semibold mb-2 text-sm md:text-base">
                NAC 2025 STUDY MATERIAL
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-4 md:mb-6">
                Prepare for NAC with Spacetopia
              </h2>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Access interactive, grade-wise NAC preparation material.",
                  "Go beyond NAC: explore live quizzes, read comics, watch 5-minute concept videos, and attempt challenges to climb the leaderboard.",
                  "Enjoy continuous space learning that lasts even beyond the Olympiad.",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <img
                      src="/home/arrow-right.png"
                      alt="icon"
                      className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700 text-sm md:text-base">{text}</p>
                  </div>
                ))}
              </div>

              <Link href={route.STUDY_MATERIAL}>
                <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-sm md:text-base">
                  Know More
                </Button>
              </Link>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="/school-reg/sp1.jpg"
                alt="Spacetopia learning"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Stay Connected Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-first">
              <img
                src="/school-reg/sp1.jpg"
                alt="NAC community"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>

            <div>
              <p className="text-[#EE7E1A] font-semibold mb-2 text-sm md:text-base">
                ENGAGEMENT ACTIVITIES
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl    font-medium text-gray-900 mb-4 md:mb-6">
                Stay Connected and <br /> Engaged All Year
              </h2>

              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                {[
                  "Monthly space quizzes & challenges",
                  "Live interactions with scientists",
                  "December 2025 special NAC participant activities",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <img
                      src="/home/arrow-right.png"
                      alt="arrow"
                      className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700 text-sm md:text-base">{text}</p>
                  </div>
                ))}
              </div>

              <Link href={route.SCHOOL_REGISTRATION_FORM}>
                <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-sm md:text-base">
                  REGISTER NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ExamInfoSection />

      <AwardsCarousel />
    </div>
  );
}

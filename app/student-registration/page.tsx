"use client";

import Image from "next/image";
import YouTube from "react-youtube";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Support from "@/components/school-registration/support";
import ExamInfo from "@/components/school-registration/examinfo";
import ContactSupportBanner from "@/components/ContactSupportBanner";
import AwardsCarousel from "@/components/school-registration/AwardsCarousel";

export default function DirectRegistrationPage() {
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
        bgimage="/direct-reg/hero.png"
        title="Your Child Can Still Be a Part of NAC 2025 - Even if Their School Isn't Participating!"
        desc="The National Astronomy Challenge is open to all students in India & overseas. If your child's school isn't participating, you can register them directly and unlock the same opportunities, rewards, and recognition!"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button className="bg-white text-black hover:bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
            Register Now
          </Button>
          <Button
            variant="outline"
            className="border-[#EE7E1A] text-[#EE7E1A] hover:bg-[#EE7E1A] hover:text-white px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Watch How It Works
          </Button>
        </div>
      </Hero>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
          {/* First Part - 3 Step Process */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Text */}
            <div>
              <div className="text-[#EE7E1A] text-sm font-semibold mb-2">
                HOW IT WORKS
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 md:mb-6">
                A Simple 3-Step Process to Join NAC 2025
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8">
                Learn how to register, pay securely, and start your NAC journey.
              </p>

              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {[
                  "STEP 1: Visit the NAC registration form.",
                  "STEP 2: Fill in details and secure payment.",
                  "STEP 3: Access preparation resources & engagement activities.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Image
                      src="/home/arrow-right.png"
                      alt="bullet"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-[#EE7E1A] text-white px-6 md:px-8 py-3 rounded-full md:rounded-4xl font-semibold hover:bg-orange-600 transition-colors text-sm md:text-base">
                REGISTER NOW
              </button>
            </div>

            {/* Right Side - Media */}
            <div className="relative order-first lg:order-last">
              <Image
                src="/home/vimg2.jpg"
                alt="How it works"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl md:rounded-4xl object-cover"
              />
            </div>
          </div>

          {/* Second Part - Open to All Minds */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-first">
              <img
                src="/direct-reg/img2.png"
                alt="NAC participants"
                className="w-full h-64 md:h-80 object-cover rounded-2xl md:rounded-4xl"
              />
            </div>

            <div>
              <div className="text-[#EE7E1A] text-sm font-semibold mb-2">
                WHO CAN PARTICIPATE?
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 md:mb-6">
                NAC 2025 is Open to All Curious Minds!
              </h2>
              <span className="text-base md:text-lg font-medium text-gray-900 pb-4 md:pb-6 block">
                Direct Registration: INR 500 | Overseas: USD 12 (Taxes extra)
              </span>

              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 pt-4 md:pt-6">
                {[
                  "Eligible Students: Grade 4 to Grade 9",
                  "No prior astronomy knowledge needed – just interest and passion",
                  "Open to all – students from any school, education board, or homeschoolers",
                  "Requirements: A laptop with working mic and camera for the proctored Olympiad",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Image
                      src="/home/arrow-right.png"
                      alt="bullet"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-[#EE7E1A] text-white px-6 md:px-8 py-3 rounded-full md:rounded-4xl font-semibold hover:bg-orange-600 transition-colors text-sm md:text-base">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            School not participating? Don’t worry – your child can still join!
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

      {/* Important Info Section */}
      <section className="py-12 md:py-16 bg-[#EFF6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900">
              Important To Know Before You Register
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "Eligibility:",
                description:
                  "If you apply directly and later your school decides to participate, your registration will be merged with the school’s.",
                icon: "/icons/eligibility.png",
              },
              {
                title: "Unique Registration:",
                description:
                  "Whether you participate directly or through your school, you will appear for only one exam, and your school will still be considered for evaluation.",
                icon: "/icons/registration.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-start"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mb-3 md:mb-4 flex justify-start">
                  <Image
                    src={"/home/icon2.png"}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>

                <p className="text-xs md:text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#EE7E1A] font-semibold mb-2 text-sm md:text-base">
              WHAT HAPPENS AFTER YOU REGISTER?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900">
              Here's Your Child's NAC Journey
            </h2>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                img: "direct-reg/flash.png",
                step: "STEP 1",
                title: "Instant Confirmation",
                description: "Email sent to your registered ID",
              },
              {
                img: "direct-reg/login.png",
                step: "STEP 2",
                title: "Spacetopia access",
                description:
                  "Login details shared instantly after registration.",
              },
              {
                img: "/direct-reg/document-text.png",
                step: "STEP 3",
                title: "Learning access",
                description: "NAC study material, quizzes, and comics.",
              },
              {
                img: "direct-reg/edit-2.png",
                step: "STEP 4",
                title: "Exam login",
                description: "Secure access on exam day.",
              },
              {
                img: "direct-reg/cup.png",
                step: "STEP 5",
                title: "Results & rewards",
                description: "National ranking and prize announcement.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#EDF6FC] rounded-2xl shadow-md hover:shadow-lg transition min-h-[320px] md:h-[380px] p-4 md:p-6"
              >
                {/* Top Circle Image */}
                <div className="bg-[#90C8FC] w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>

                {/* Bottom Text Box */}
                <div className="bg-white rounded-xl p-3 md:p-4 mt-4 md:mt-6 w-full text-start">
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    {item.step}
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacetopia Section */}
      <section className="py-12 md:py-16 bg-[#EDF6FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Get Ready with Spacetopia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <p className="text-[#EE7E1A] font-semibold mb-2 text-sm md:text-base">
                NAC 2025 STUDY MATERIAL
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-4 md:mb-6">
                Get Ready with Spacetopia
              </h2>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Curated videos, space facts, and interactive quizzes",
                  "Grade-specific mock tests",
                  "Space comics for fun learning",
                  "Available instantly after registration",
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

              <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-sm md:text-base">
                REGISTER NOW
              </Button>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="https://s3.us-east-1.amazonaws.com/myckc/myckc/Whats_App_Image_2025_08_22_at_16_50_49_654627616b.jpeg?updatedAt=2025-08-22T11%3A21%3A14.295Z"
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

              <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-sm md:text-base">
                REGISTER NOW
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ExamInfo />
      <AwardsCarousel />
      <Support />
      <ContactSupportBanner />
    </div>
  );
}

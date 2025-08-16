import { Button } from "@/components/ui/button";
import { Play, Calendar, Users, BookOpen, Edit, Trophy } from "lucide-react";
import ReactPlayer from "react-player";
import Image from "next/image";
import ExamInfo from '@/components/school-registration/examinfo';
import AwardSection from '@/components/school-registration/awardsection';
import Support from '@/components/school-registration/support';

export default function DirectRegistrationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: 'url("/direct-reg/hero.png")' }}
      >
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 to-transparent"></div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          {/* Left side - Text */}
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Child Can Still Be a Part of NAC 2025 - Even if Their School
              Isn't Participating!
            </h1>
            <p className="text-xl">
              The National Astronomy Challenge is open to all students in India
              & overseas. If your child's school isn't participating, you can
              register them directly and unlock the same opportunities, rewards,
              and recognition!
            </p>
          </div>

          {/* Right side - Buttons */}
          <div className="ml-auto flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-black hover:bg-gray-100 px-10 py-6 rounded-full text-lg">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-10 py-6 rounded-full text-lg bg-transparent"
            >
              Watch How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* First Part - 3 Step Process */}

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div>
              <div className="text-[#EE7E1A] text-sm font-semibold mb-2">
                HOW IT WORKS
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Simple 3-Step Process to Join NAC 2025
              </h2>
              <p className="text-gray-600 mb-8">
                Learn how to register, pay securely, and start your NAC journey.
              </p>

              <div className="space-y-4 mb-10">
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
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#EE7E1A] text-white px-8 py-3 rounded-4xl font-semibold hover:bg-orange-600 transition-colors">
                REGISTER AS School
              </button>
            </div>

            {/* Right Side - Media (choose video OR image) */}
            <div className="relative">
              {/* Option 1: Video */}
              {/* 
    <div className="aspect-video bg-gray-900 rounded-4xl overflow-hidden">
      <ReactPlayer
        width="100%"
        height="100%"
        light="https://picsum.photos/800/450?random=8"
        playIcon={
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-gray-900 ml-1" />
          </div>
        }
      />
    </div>
    */}

              {/* Option 2: Image */}
              <Image
                src="/home/vimg2.jpg"
                alt="How it works"
                width={600}
                height={400}
                className="w-full h-auto rounded-4xl object-cover"
              />
            </div>
          </div>

          {/* Second Part - Open to All Minds */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/direct-reg/img2.png"
                alt="NAC participants"
                className="w-full h-80 object-cover rounded-4xl"
              />
            </div>

            <div>
              <div className="text-[#EE7E1A] text-sm font-semibold mb-2">
                WHO CAN PARTICIPATE?
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                NAC 2025 is Open to All Curious Minds!
              </h2>
              <span className="text-lg font-bold text-gray-900 pb-6">
                School Registration: INR 300 | School Registration: USD 10
              </span>

              <div className="space-y-4 mb-10 pt-6">
                {[
                  "Students from Grade 1 to Grade 10 (India & Overseas)",
                  "No prior astronomy knowledge required",
                  "Direct participation for students without school affiliation",
                  "Overseas students welcome - exam fully online",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Image
                      src="/home/arrow-right.png"
                      alt="bullet"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#EE7E1A] text-white px-8 py-3 rounded-4xl font-semibold hover:bg-orange-600 transition-colors">
                REGISTER AS School
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Info Section */}
      <section className="py-16 bg-[#EFF6E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Important To Know Before You Register
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Eligibility:",
                description:
                  "Open to students from Grade 2 to Grade 10 (India & Overseas).",
                icon: "/icons/eligibility.png",
              },
              {
                title: "Unique Registration:",
                description:
                  "Each student must register with their correct name (as it will appear on the certificate).",
                icon: "/icons/registration.png",
              },
              {
                title: "Attempt Limit:",
                description:
                  "Students can take the Olympiad only once per academic year.",
                icon: "/icons/attempt.png",
              },
              {
                title: "Integrity & Fair Play:",
                description:
                  "Webcam and microphone will be monitored; malpractice may lead to disqualification.",
                icon: "/icons/integrity.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-start"
              >
                <div className="w-14 h-14 mb-4 flex justify-start">
                  <Image
                    src={"/home/icon2.png"}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <p className="text-[#EE7E1A] font-semibold mb-2">
              WHAT HAPPENS AFTER YOU REGISTER?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Here's Your Child's NAC Journey
            </h2>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                img: "direct-reg/flash.png",
                step: "STEP 1",
                title: "Instant Confirmation",
                description: "Email & WhatsApp message after payment",
              },
              {
                img: "direct-reg/login.png",
                step: "STEP 2",
                title: "Login Details",
                description: "Access to Spacetopia learning platform",
              },
              {
                img: "/direct-reg/document-text.png",
                step: "STEP 3",
                title: "Preparation Material",
                description: "Mock tests, quizzes, space comics",
              },
              {
                img: "direct-reg/edit-2.png",
                step: "STEP 4",
                title: "Final Exam Access",
                description: "Secure login on exam day",
              },
              {
                img: "direct-reg/cup.png",
                step: "STEP 5",
                title: "Results & Rewards",
                description: "National ranking & prize distribution",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#EDF6FC] rounded-2xl shadow-md hover:shadow-lg transition h-[380px] p-6"
              >
                {/* Top Circle Image */}
                <div className="bg-[#90C8FC] w-36 h-36 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Bottom Text Box */}
                <div className="bg-white rounded-xl p-4 mt-6 w-full text-start">
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    {item.step}
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacetopia Section - Reused from school registration */}
      <section className="py-16 bg-[#EDF6FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Get Ready with Spacetopia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-[#EE7E1A] font-semibold mb-2">
                NAC 2025 STUDY MATERIAL
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Ready with Spacetopia
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <img
                    src="/home/arrow-right.png"
                    alt="icon"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-gray-700">
                    Curated videos, space facts, and interactive quizzes
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <img
                    src="/home/arrow-right.png"
                    alt="icon"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-gray-700">Grade-specific mock tests</p>
                </div>

                <div className="flex items-start gap-3">
                  <img
                    src="/home/arrow-right.png"
                    alt="icon"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-gray-700">Space comics for fun learning</p>
                </div>

                <div className="flex items-start gap-3">
                  <img
                    src="/home/arrow-right.png"
                    alt="icon"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-gray-700">
                    Available instantly after registration
                  </p>
                </div>
              </div>

              <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-6 rounded-full">
                REGISTER AS School
              </Button>
            </div>

            <div>
              <img
                src="/school-reg/sp1.jpg"
                alt="Spacetopia learning"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Stay Connected Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/school-reg/sp1.jpg"
                alt="NAC community"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div>
              <p className="text-[#EE7E1A] font-semibold mb-2">
                ENGAGEMENT ACTIVITIES
              </p>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
                Stay Connected and Engaged All Year
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <img
                    src="/home/arrow-right.png"
                    alt="arrow"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-gray-700">
                    Monthly space quizzes & challenges
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <img
                    src="/home/arrow-right.png"
                    alt="arrow"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-gray-700">
                    Live interactions with scientists
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <img
                    src="/home/arrow-right.png"
                    alt="arrow"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-gray-700">
                    December 2025 special NAC participant activities
                  </p>
                </div>
              </div>

              <p className="text-lg font-semibold text-gray-900 mb-6">
                JOIN THE NAC WHATSAPP COMMUNITY
              </p>

              <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-6 rounded-full">
                REGISTER AS School
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ExamInfo />
      <AwardSection />
      <Support />

      {/* Contact Section - Reused from school registration */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-500 font-semibold mb-2">
                CONTACT US ANYTIME
              </p>
              <h2 className="text-2xl font-bold">
                Need Help with Registration?
              </h2>
            </div>
            <div className="text-right">
              <p className="mb-2">
                Our NAC 2025 Support Team is here to guide you.
              </p>
              <p className="text-lg font-semibold">Email: nac@stemands.space</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

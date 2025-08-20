import Hero from "@/components/hero";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import ExamInfoSection from "@/components/school-registration/examinfo";
import SupportHelpSection from "@/components/SupportHelpSection";

export default function StudentRegistrationPage() {
  return (
    <div className="min-h-screen">
      <Hero
        bgimage="/home/header2.jpg"
        title="Register Your School for NAC 2025 - Inspire the Next Generation of Astronomers!"
        desc="Bring the National Astronomy Challenge experience to your students. Register your school and give them a chance to compete, learn, and shine on a national stage."
      />

      {/* Partners Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            PROUDLY PARTNERED WITH LEADING SCHOOLS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 flex items-center justify-center h-24"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                  <span className="font-semibold">yourlogo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            A Simple 3-Step Process to Join NAC 2025
          </h2>
          <p className="text-gray-600 mb-12">
            Learn how to register, pay securely, and start your NAC journey.
          </p>

          <div className="relative rounded-2xl overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              width="100%"
              height="500px"
              light="https://picsum.photos/1000/500?random=3"
              playing={false}
              controls={true}
              playIcon={
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[20px] border-l-black border-y-[12px] border-y-transparent ml-1"></div>
                </div>
              }
            />
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

              <p className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">
                JOIN THE NAC WHATSAPP COMMUNITY
              </p>

              <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-sm md:text-base">
                REGISTER NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ExamInfoSection />

      {/* Two Steps Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Two Simple Steps for Schools & Students
            </h2>
            <p className="text-gray-600">
              We've made the registration process quick, clear, and supportive
              for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Schools */}
            <div>
              <h3 className="text-2xl font-bold mb-6">For Schools:</h3>
              <div className="space-y-4">
                {[
                  "Fill out the school registration form.",
                  "Student registration link is automatically generated and sent to you.",
                  "NAC Team will call your school for a quick briefing and support.",
                  "Share the student registration link with parents and students.",
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* For Students */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                For Students (via School):
              </h3>
              <div className="space-y-4">
                {[
                  "Receive registration link from school.",
                  "Visit NAC website to learn more & fill in the registration form.",
                  "Complete payment (if applicable).",
                  "Receive confirmation email instantly.",
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "?",
                title: "Have a Question",
                description:
                  "Check our most common queries about NAC registration and participation",
                buttonText: "Click Here For FAQs",
              },
              {
                icon: "⚠",
                title: "Understand the Rules",
                description: "Download the participation terms PDF",
                buttonText: "Download PDF",
              },
              {
                icon: "🏠",
                title: "Need Help?",
                description:
                  "Email: hello@nationalastronomy.org\nOur team is here to assist schools and parents",
                buttonText: "Contact Support",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6 whitespace-pre-line">
                  {item.description}
                </p>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-black text-white rounded-lg p-8 flex items-center justify-between">
            <div>
              <div className="text-orange-500 text-sm font-semibold mb-2">
                CONTACT US ANYTIME
              </div>
              <h3 className="text-2xl font-bold">
                Need Help with Registration?
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div>Our NAC 2025 Support Team is here to guide you.</div>
                <div className="font-bold">Email: nac@stemands.space</div>
              </div>
              <div className="w-16 h-16">
                <svg viewBox="0 0 100 50" className="w-full h-full text-white">
                  <path
                    d="M20 25 Q50 5 80 25"
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
                      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-orange-500 text-sm font-semibold mb-2">
              AWARDS & RECOGNITION
            </div>
            <h2 className="text-4xl font-bold">
              Rewards that Inspire Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Top 3 students in each grade (direct participation category) win a Telescope",
              "All winners receive medals, certificates, and national recognition",
              "Top performers invited to Awards Ceremony & Solar Observatory Visit - Udaipur",
              "Special recognition for youngest achievers in each grade",
            ].map((description, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <Image
                    src="https://picsum.photos/300/200?random=6"
                    alt={`Award ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SupportHelpSection />
    </div>
  );
}

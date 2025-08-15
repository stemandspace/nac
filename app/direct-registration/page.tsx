import { Button } from "@/components/ui/button"
import { Play, Calendar, Users, BookOpen, Edit, Trophy } from "lucide-react"
import ReactPlayer from "react-player"

export default function DirectRegistrationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://picsum.photos/1920/600?random=7")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Child Can Still Be a Part of NAC 2025 - Even if Their School Isn't Participating!
            </h1>
            <p className="text-xl mb-8">
              The National Astronomy Challenge is open to all students in India & overseas. If your child's school isn't
              participating, you can register them directly and unlock the same opportunities, rewards, and recognition!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
                Register Now
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg bg-transparent"
              >
                Watch How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold mb-2">WHAT HAPPENS AFTER YOU REGISTER?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Here's Your Child's NAC Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                step: "STEP 1",
                title: "Instant Confirmation",
                description: "Email & WhatsApp message after payment",
              },
              {
                icon: <Users className="w-8 h-8" />,
                step: "STEP 1",
                title: "Login Details",
                description: "Access to Spacetopia learning platform",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                step: "STEP 1",
                title: "Preparation Material",
                description: "Mock tests, quizzes, space comics",
              },
              {
                icon: <Edit className="w-8 h-8" />,
                step: "STEP 1",
                title: "Final Exam Access",
                description: "Secure login on exam day",
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                step: "STEP 1",
                title: "Results & Rewards",
                description: "National ranking & prize distribution",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-400 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <p className="text-sm text-gray-600 mb-2">{item.step}</p>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Part - 3 Step Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-orange-500 font-semibold mb-2">HOW IT WORKS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Simple 3-Step Process to Join NAC 2025
              </h2>
              <p className="text-gray-600 mb-6">Learn how to register, pay securely, and start your NAC journey.</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>STEP 1:</strong> Visit the NAC registration form.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>STEP 2:</strong> Fill in details and secure payment.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>STEP 3:</strong> Access preparation resources & engagement activities.
                  </p>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                REGISTER AS School
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <ReactPlayer
                  url="https://picsum.photos/800/450?random=8"
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
            </div>
          </div>

          {/* Second Part - Open to All Minds */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/600/400?random=9"
                alt="NAC participants"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div>
              <p className="text-orange-500 font-semibold mb-2">WHO CAN PARTICIPATE?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                NAC 2025 is Open to All Curious Minds!
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Students from Grade 1 to Grade 10 (India & Overseas)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">No prior astronomy knowledge required</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Direct participation for students without school affiliation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Overseas students welcome - exam fully online</p>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                REGISTER AS School
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Info Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Important To Know Before You Register</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Eligibility:",
                description: "Open to students from Grade 2 to Grade 10 (India & Overseas).",
              },
              {
                title: "Unique Registration:",
                description:
                  "Each student must register with their correct name (as it will appear on the certificate).",
              },
              {
                title: "Unique Registration:",
                description: "Students can take the Olympiad only once per academic year.",
              },
              {
                title: "Integrity & Fair Play:",
                description: "Webcam and microphone will be monitored; malpractice may lead to disqualification.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacetopia Section - Reused from school registration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Get Ready with Spacetopia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-orange-500 font-semibold mb-2">NAC 2025 STUDY MATERIAL</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Ready with Spacetopia</h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Curated videos, space facts, and interactive quizzes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Grade-specific mock tests</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Space comics for fun learning</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Available instantly after registration</p>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                REGISTER AS School
              </Button>
            </div>

            <div>
              <img
                src="https://picsum.photos/600/400?random=10"
                alt="Spacetopia learning"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Stay Connected Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://picsum.photos/600/400?random=11"
                alt="NAC community"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div>
              <p className="text-orange-500 font-semibold mb-2">ENGAGEMENT ACTIVITIES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stay Connected and Engaged All Year</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Monthly space quizzes & challenges</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">Live interactions with scientists</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700">December 2025 special NAC participant activities</p>
                </div>
              </div>

              <p className="text-lg font-semibold text-gray-900 mb-6">JOIN THE NAC WHATSAPP COMMUNITY</p>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                REGISTER AS School
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Details Section - Reused from school registration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-semibold mb-2">EXAM PATTERN & FORMAT</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Know the NAC 2025 Exam Inside Out</h2>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-gray-900">TYPE:</p>
                  <p className="text-gray-600">Multiple Choice Questions (MCQs)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">TOTAL QUESTIONS:</p>
                  <p className="text-gray-600">60</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">DURATION:</p>
                  <p className="text-gray-600">60 minutes</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">NEGATIVE MARKING:</p>
                  <p className="text-gray-600">25% for each wrong answer</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">QUESTION TYPES:</p>
                  <p className="text-gray-600">1. Application-Based - Real-world scenarios & problem-solving</p>
                  <p className="text-gray-600">2. Knowledge-Based - Core concepts & factual understanding</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">MODE:</p>
                  <p className="text-gray-600">Online through SHL - the world's largest secured assessment platform</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">PREPARATION SUPPORT:</p>
                  <p className="text-gray-600">1. Access to Mock Exams</p>
                  <p className="text-gray-600">2. Sample Papers on Spacetopia</p>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full mt-8">
                REGISTER AS School
              </Button>
            </div>

            <div>
              <img
                src="https://picsum.photos/600/400?random=12"
                alt="NAC exam"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - Reused from school registration */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold mb-2">AWARDS & RECOGNITION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Rewards that Inspire Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Top 3 students in each grade (direct participation category) win a Telescope",
                image: "https://picsum.photos/300/200?random=13",
              },
              {
                title: "All winners receive medals, certificates, and national recognition",
                image: "https://picsum.photos/300/200?random=14",
              },
              {
                title: "Top performers invited to Awards Ceremony & Solar Observatory Visit - Udaipur",
                image: "https://picsum.photos/300/200?random=15",
              },
              {
                title: "Special recognition for youngest achievers in each grade",
                image: "https://picsum.photos/300/200?random=16",
              },
            ].map((award, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                  src={award.image || "/placeholder.svg"}
                  alt={`Award ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-700">{award.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Reused from school registration */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-500 font-semibold mb-2">CONTACT US ANYTIME</p>
              <h2 className="text-2xl font-bold">Need Help with Registration?</h2>
            </div>
            <div className="text-right">
              <p className="mb-2">Our NAC 2025 Support Team is here to guide you.</p>
              <p className="text-lg font-semibold">Email: nac@stemands.space</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import ReactPlayer from "react-player"

export default function StudentRegistrationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=1"
            alt="NAC Registration Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Register Your School for NAC 2025 - Inspire the Next Generation of Astronomers!
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bring the National Astronomy Challenge experience to your students. Register your school and give them a
            chance to compete, learn, and shine on a national stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Register Your School
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Watch How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Exam Information Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              EXAM PATTERN & FORMAT
            </span>
          </div>
          <h2 className="text-4xl font-bold text-center mb-12">Know the NAC 2025 Exam Inside Out</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold">TYPE:</span>
                  <span>Multiple Choice Questions (MCQs)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">TOTAL QUESTIONS:</span>
                  <span>80</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">DURATION:</span>
                  <span>60 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">NEGATIVE MARKING:</span>
                  <span>25% for each wrong answer</span>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold">QUESTION TYPES:</div>
                  <div className="text-sm space-y-1">
                    <div>1. Application-Based - Real-world scenarios & problem-solving</div>
                    <div>2. Knowledge-Based - Core concepts & factual understanding</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold">MODE:</div>
                  <div className="text-sm">Online through SHL - the world's largest secured assessment platform</div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold">PREPARATION SUPPORT:</div>
                  <div className="text-sm space-y-1">
                    <div>1. Access to Mock Exams</div>
                    <div>2. Sample Papers on Spacetopia</div>
                  </div>
                </div>
              </div>

              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                REGISTER AS School
              </button>
            </div>

            <div className="relative">
              <Image
                src="https://picsum.photos/600/400?random=2"
                alt="NAC Exam"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">A Simple 3-Step Process to Join NAC 2025</h2>
          <p className="text-gray-600 mb-12">Learn how to register, pay securely, and start your NAC journey.</p>

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
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Get Ready with Spacetopia */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-500 text-sm font-semibold mb-2">NAC 2025 STUDY MATERIAL</div>
              <h3 className="text-4xl font-bold mb-6">Get Ready with Spacetopia</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Curated videos, space facts, and interactive quizzes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Grade-specific mock tests</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Space comics for fun learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Available instantly after registration</span>
                </div>
              </div>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                REGISTER AS School
              </button>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/400?random=4"
                alt="Spacetopia Learning"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Stay Connected Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://picsum.photos/600/400?random=5"
                alt="NAC Community"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <div className="text-orange-500 text-sm font-semibold mb-2">ENGAGEMENT ACTIVITIES</div>
              <h3 className="text-4xl font-bold mb-6">Stay Connected and Engaged All Year</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Monthly space quizzes & challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Live interactions with scientists</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>December 2025 special NAC participant activities</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="font-bold text-lg mb-2">JOIN THE NAC WHATSAPP COMMUNITY</div>
              </div>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                REGISTER AS School
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Two Steps Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Two Simple Steps for Schools & Students</h2>
            <p className="text-gray-600">
              We've made the registration process quick, clear, and supportive for everyone.
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
              <h3 className="text-2xl font-bold mb-6">For Students (via School):</h3>
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

      {/* Partners Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">PROUDLY PARTNERED WITH LEADING SCHOOLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="border rounded-lg p-6 flex items-center justify-center h-24">
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

      {/* Support Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "?",
                title: "Have a Question",
                description: "Check our most common queries about NAC registration and participation",
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
                description: "Email: hello@nationalastronomy.org\nOur team is here to assist schools and parents",
                buttonText: "Contact Support",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6 whitespace-pre-line">{item.description}</p>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-black text-white rounded-lg p-8 flex items-center justify-between">
            <div>
              <div className="text-orange-500 text-sm font-semibold mb-2">CONTACT US ANYTIME</div>
              <h3 className="text-2xl font-bold">Need Help with Registration?</h3>
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
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
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
            <div className="text-orange-500 text-sm font-semibold mb-2">AWARDS & RECOGNITION</div>
            <h2 className="text-4xl font-bold">Rewards that Inspire Excellence</h2>
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
    </div>
  )
}

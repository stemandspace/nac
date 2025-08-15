import { Button } from "@/components/ui/button"

export default function StudyMaterialPage() {
  return (
    <div className="min-h-screen">
      {/* Support Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Have a Question Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Have a Question</h3>
              <p className="text-gray-600 mb-6">
                Check our most common queries about NAC registration and participation.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full w-full">
                CONTACT OUR TEAM
              </Button>
            </div>

            {/* Understand the Rules Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Understand the Rules</h3>
              <p className="text-gray-600 mb-6">Download the participation terms for comprehensive understanding.</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full w-full">
                DOWNLOAD PDF
              </Button>
            </div>

            {/* Need Help Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Email: help@nationalastronomy.org We have a fast response time and provide comprehensive support.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full w-full">
                CONTACT SUPPORT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Space Comics Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn Through Fun and Imagine Your
            <br />
            Future in Space
          </h2>
          <p className="text-blue-200 text-lg mb-12 max-w-3xl mx-auto">
            Explore engaging space comics for young minds and join exclusive career seminars with
            <br />
            scientists & space professionals.
          </p>

          {/* Comic Books Display */}
          <div className="relative mb-12">
            <div className="flex justify-center items-center space-x-8">
              {/* Left Comic */}
              <div className="transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://picsum.photos/200/300?random=1"
                  alt="Space Careers Comic"
                  className="w-48 h-72 rounded-lg shadow-2xl"
                />
              </div>

              {/* Center Comic */}
              <div className="transform hover:scale-105 transition-transform duration-300 z-10">
                <img
                  src="https://picsum.photos/220/330?random=2"
                  alt="Discovering Space Careers"
                  className="w-56 h-84 rounded-lg shadow-2xl"
                />
              </div>

              {/* Right Comic */}
              <div className="transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://picsum.photos/200/300?random=3"
                  alt="Space Adventures Comic"
                  className="w-48 h-72 rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
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
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
              Buy Space Comics
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full text-lg bg-transparent"
            >
              Register for Career Seminar
            </Button>
          </div>
        </div>
      </section>

      {/* Spacetopia Sessions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Live & Interactive Spacetopia Sessions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join engaging live sessions, Practice Master Classes to deepen your space knowledge, specially designed
              for aspiring astronomers and keen space enthusiasts.
            </p>
          </div>

          {/* Grade 1-4 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Grade 1-4</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-black rounded-lg overflow-hidden relative group cursor-pointer">
                  <img
                    src="https://picsum.photos/400/250?random=10"
                    alt="Spacetopia Session"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="font-semibold mb-1">Lorem Ipsum dolor sit amet consectetur.</h4>
                    <p className="text-sm opacity-80">Duration: 45 mins • 5 month course</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grade 5-7 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Grade 5-7</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-black rounded-lg overflow-hidden relative group cursor-pointer">
                  <img
                    src="https://picsum.photos/400/250?random=20"
                    alt="Spacetopia Session"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="font-semibold mb-1">Lorem Ipsum dolor sit amet consectetur.</h4>
                    <p className="text-sm opacity-80">Duration: 45 mins • 5 month course</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grade 8-10 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Grade 8-10</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-black rounded-lg overflow-hidden relative group cursor-pointer">
                  <img
                    src="https://picsum.photos/400/250?random=30"
                    alt="Spacetopia Session"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="font-semibold mb-1">Lorem Ipsum dolor sit amet consectetur.</h4>
                    <p className="text-sm opacity-80">Duration: 45 mins • 5 month course</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

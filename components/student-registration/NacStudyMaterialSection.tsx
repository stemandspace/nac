"use client";

import YouTube from "react-youtube";

const NacStudyMaterialSection = () => {
  // Video IDs for the two videos
  const spacetopiaVideoId = "DMz1ZycaKSg"; // Replace with actual Spacetopia video ID
  const accessVideoId = "DMz1ZycaKSg"; // Replace with actual access video ID

  // YouTube player options
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
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-3">
            NAC STUDY MATERIAL ACCESS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Do you wish to access NAC study material for your grade?
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The material is available on Spacetopia (formerly Cosmic Kids Club)
            — a space-themed edutainment platform created by astronomers and
            space enthusiasts.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Free Nebula Account
            </h3>
            <p className="text-gray-600">
              With NAC registration, you receive a free Nebula account with 15
              welcome credits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Grade-Specific Material
            </h3>
            <p className="text-gray-600">
              Each grade-specific material costs 41 credits (₹10 per credit).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Annual Plans
            </h3>
            <p className="text-gray-600">
              Choose Protostar or Supernova annual plans at 50% discount for
              unlimited access throughout the year.
            </p>
          </div>
        </div>

        {/* Video Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Spacetopia for Kids Video */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Spacetopia for Kids
              </h3>
              <p className="text-gray-600">
                Discover the amazing world of space-themed edutainment designed
                specifically for young learners.
              </p>
            </div>
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
              <YouTube
                videoId={spacetopiaVideoId}
                opts={opts}
                className="w-full h-full"
                title="Spacetopia for Kids - Space-themed Edutainment Platform"
              />
            </div>
          </div>

          {/* How to Access NAC Content Video */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                How to Access NAC Content
              </h3>
              <p className="text-gray-600">
                Learn step-by-step how to access and navigate through your NAC
                study materials on Spacetopia.
              </p>
            </div>
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
              <YouTube
                videoId={accessVideoId}
                opts={opts}
                className="w-full h-full"
                title="How to Access NAC Content on Spacetopia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NacStudyMaterialSection;

"use client";

import YouTube from "react-youtube";

const NacStudyMaterialSection = () => {
  // Video IDs for the two videos
  const spacetopiaVideoId = "YF6kxt0IW98"; // Replace with actual Spacetopia video ID
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

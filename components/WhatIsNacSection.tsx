"use client";

import YouTube from "react-youtube";

const WhatIsNacSection = () => {
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
    <section className="py-6 bg-white pb-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight text-center">
            National Astronomy Challenge Explained
          </h2>
          <p className="text-gray-600 text-center">
            A unique talent discovery program inspiring students of Grades 4–9
            through space and astronomy.
          </p>
        </div>

        {/* Content Row */}
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
  );
};

export default WhatIsNacSection;

"use client";

import YouTube from "react-youtube";
import Link from "next/link";

export default function PrepareNac() {
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
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {/* Logo */}
            <img
              src="/home/logo.svg"
              alt="Spacetopia Logo"
              className="h-24 w-auto"
            />

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl text-gray-900 leading-snug">
              Prepare for NAC with Spacetopia
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              The reimagined learning platform, formerly known as Cosmic Kids
              Club.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3">
              {[
                "Access interactive, grade-wise NAC preparation material.",
                "Go beyond NAC: explore live quizzes, read comics, watch 5-minute concept videos, and attempt challenges to climb the leaderboard.",
                "Enjoy continuous space learning that lasts even beyond the Olympiad.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  {/* Arrow image */}
                  <img
                    src="/home/arrow-right.png"
                    alt="Arrow"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-gray-700 text-lg">{text}</p>
                </div>
              ))}
            </div>
            <br />
            {/* Button */}
            <Link
              href="/study-material"
              className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition mt-10"
            >
              Know More
            </Link>
          </div>

          {/* Right video/image */}
          <div className="relative">
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
    </section>
  );
}

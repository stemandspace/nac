"use client";
import { Play } from "lucide-react";

export default function StudyMaterialSection() {
  return (
    <section className="bg-[#F4FAFF] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Access NAC 2025 Study Material Easily via <br />
          <span className="block mt-2">
            Spacetopia (Formey known as Cosmic Kids Club)
          </span>
        </h2>
        <p className="text-gray-600 mb-10 text-sm sm:text-base">
          Your all-in-one learning hub with videos, quizzes, mock tests, and
          space comics – available instantly after registration.
        </p>

        {/* Video Thumbnail */}
        <div className="relative max-w-4xl mx-auto">
          <img
            src="/study/s1.jpg"
            alt="STEM in Space Event"
            className="w-full h-[320px] sm:h-[400px] md:h-[450px] object-cover rounded-2xl shadow-lg"
          />

          {/* Play Button Overlay */}
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white rounded-full shadow-lg p-4 sm:p-5 md:p-6 hover:scale-110 transition">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";
import Youtube from "../youtube";

export default function StudyMaterialSection() {
  return (
    <section className="bg-[#F4FAFF] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Access NAC 2025 Study Material via <br />
          <span className="block mt-2">
            Spacetopia (Formey known as Cosmic Kids Club)
          </span>
        </h2>
        <p className="text-gray-600 mb-10 text-sm sm:text-base">
          Your all-in-one learning hub with videos, quizzes, mock tests, and
          space comics – available instantly after registration.
        </p>
        <div className="grid gap-8 items-center">
          <div className="relative max-w-2xl mx-auto w-full">
            <div className="overflow-hidden rounded-xl shadow-lg bg-gray-100">
              <Youtube videoId="DMz1ZycaKSg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

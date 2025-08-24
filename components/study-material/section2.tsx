// components/MemberSection.tsx
"use client";
import route from "@/lib/route";
import Youtube from "../youtube";
import Link from "next/link";

export default function MemberSection() {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Left - Video/Image */}
        <div className="grid gap-8 items-center">
          <div className="relative max-w-2xl mx-auto w-full">
            <div className="overflow-hidden rounded-xl shadow-lg bg-gray-100">
              <Youtube videoId="YF6kxt0IW98" />
            </div>
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Cosmic Kids Club is Now Spacetopia – Bigger, Better, and More
            Powerful
          </h3>
          <p className="text-gray-600 mb-6">
            Formerly known as Cosmic Kids Club, Spacetopia is a next-level space
            learning platform, packed with interactive content, quizzes, comics,
            and live sessions to keep your child inspired and engaged.
          </p>
          <div className="flex gap-5 flex-wrap">
            <Link href={route.STUDENT_REGISTRATION}>
              <button className="bg-[#EE7E1A] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
                Register Directly
              </button>
            </Link>

            <Link href={route.SCHOOL_REGISTRATION}>
              <button className="bg-[#EE7E1A] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
                Register Your School
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/MemberSection.tsx
"use client";
import Image from "next/image";
import { Play } from "lucide-react";

export default function MemberSection() {
  return (
    <section className="py-10 px-6 bg-white">
      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Left - Video/Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/study/s1.jpg"
            alt="STEM in Space"
            width={800}
            height={500}
            className="w-full h-[350px] object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
              <Play size={32} className="text-black" />
            </span>
          </button>
        </div>

        {/* Right - Text Content */}
        <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            CKC is Now Spacetopia – Bigger, Better, and More Powerful
          </h3>
          <p className="text-gray-600 mb-6">
            Formerly known as Cosmic Kids Club, Spacetopia is a next-level space
            learning platform, packed with interactive content, quizzes, comics,
            and live sessions to keep your child inspired and engaged.
          </p>
          <button className="bg-[#EE7E1A] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
            Register Your School
          </button>
        </div>
      </div>
    </section>
  );
}

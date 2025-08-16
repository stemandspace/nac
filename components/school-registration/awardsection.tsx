// components/AwardsSection.tsx
import React from "react";
import Image from "next/image";

export default function AwardsSection() {
  const awards = [
    "Top 3 students in each grade (direct participation category) win a Telescope",
    "All winners receive medals, certificates, and national recognition",
    "Top performers invited to Awards Ceremony & Solar Observatory Visit - Udaipur",
    "Special recognition for youngest achievers in each grade",
  ];

  return (
    <section className="py-8 px-6 bg-[#EDF6FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-orange-500 text-sm font-semibold mb-2">
            AWARDS & RECOGNITION
          </div>
          <h2 className="text-4xl">Rewards that Inspire Excellence</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {awards.map((description, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src="/home/reel.jpg"
                  alt={`Award ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-4 text-center">
                <p className="text-sm text-gray-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

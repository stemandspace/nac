"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ObservatorySection() {
  // Image list
  const images = [
    "/awards1.png",
    "/awards1.png", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to previous image
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Go to next image
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title + Description + Arrows */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Udaipur Solar Observatory (USO), Udaipur
            </h2>
            <p className="mt-3 text-gray-500 max-w-4xl">
              Every year, we recognize exceptional achievements in space learning and exploration 
              through a range of awards for both students and schools. From top-ranking stars to 
              high-participation schools, our awards highlight dedication, curiosity, and a passion 
              for discovery.
            </p>
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={handlePrev}
              className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-800"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <Image
            key={currentIndex} // ensures re-render when image changes
            src={images[currentIndex]}
            alt="Udaipur Solar Observatory"
            width={1000}
            height={600}
            className="rounded-3xl w-full object-cover transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { fixImageUrl } from "@/lib/image";

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const carouselImages: string[] = [
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_udaipur_3_69a4faff5d.jpg?updatedAt=2025-08-22T08%3A26%3A40.124Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Udaipur_1_ccfd1afb1f.jpeg?updatedAt=2025-08-22T08%3A26%3A40.130Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Udaipur2_e4a5c20607.jpg?updatedAt=2025-08-22T08%3A26%3A40.065Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Udaipur_4_5f9ac9b4be.jpg?updatedAt=2025-08-22T08%3A26%3A39.170Z",
];

export default function USOSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl font-medium text-gray-900 leading-tight">
              Udaipur Solar Observatory (USO), Udaipur
            </h2>
            <p className="text-sm font-medium">
              The journey continues! NAC winners and school representatives will
              head to the Udaipur Solar Observatory – one of Asia’s premier
              solar research centers – for an exclusive experience
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Content Row with Carousel */}
        <div className="grid gap-8 items-center">
          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-lg">
              {/* Carousel Images */}
              <div className="relative">
                <Image
                  src={fixImageUrl(carouselImages[currentIndex])}
                  alt={`Udaipur Solar Observatory ${currentIndex + 1}`}
                  width={800}
                  height={600}
                  quality={100}
                  className="w-full h-auto object-cover transition-opacity duration-500 aspect-video"
                  priority={currentIndex === 0}
                />
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-black"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { fixImageUrl } from "@/lib/image";

interface GallerySectionProps {
  images: {
    [key: string]: string[];
  };
  years: string[];
}

export default function GallerySection({ images, years }: GallerySectionProps) {
  const [selectedYear, setSelectedYear] = useState(years[0] || "All");
  const [isLoading, setIsLoading] = useState(false);

  // Filter images based on selected year
  const filteredImages =
    selectedYear === "All"
      ? Object.values(images).flat()
      : images[selectedYear] || [];

  const handleYearChange = (year: string) => {
    setIsLoading(true);
    setSelectedYear(year);
    // Simulate loading for better UX
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <section className="py-16 bg-[#5BB0E01C] font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Year Selector */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
            Gallery of Impact
          </h2>

          {/* Year Selector */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-medium whitespace-nowrap">
              Select year:
            </span>
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
                className="appearance-none border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5BB0E0] focus:border-transparent cursor-pointer min-w-[120px]"
                disabled={isLoading}
              >
                <option value="All">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year} className="font-medium">
                    {year}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5BB0E0]"></div>
          </div>
        )}

        {/* Gallery Grid */}
        {!isLoading && (
          <>
            {filteredImages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No images found for {selectedYear}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={fixImageUrl(image)}
                        alt={image}
                        width={300}
                        height={200}
                        className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />

                      {/* Overlay with year */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3">
                          <span className="bg-[#5BB0E0] text-white text-xs px-2 py-1 rounded-full font-medium">
                            {selectedYear}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Results Count */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Showing {filteredImages.length} image
                {filteredImages.length !== 1 ? "s" : ""}
                {selectedYear !== "All" && ` from ${selectedYear}`}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

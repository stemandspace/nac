"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./awards-ceremony-carousel.css";

// Add description to each slide
interface AwardImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const awardImages: AwardImage[] = [
  {
    id: 1,
    src: "/year/2018.jpg",
    alt: "Awards Ceremony 2019",
    title: "2018",
    description: "National University of Singapore  & Boeing Corp",
  },
  {
    id: 2,
    src: "/year/2019.JPG",
    alt: "Awards Ceremony 2018",
    title: "2019",
    description: "Al Thuraya Astronomy Center | Dubai",
  },
  {
    id: 3,
    src: "/year/2020.jpeg",
    alt: "Awards Ceremony 2020",
    title: "2020",
    description: "ISRO, Thumba Station . Thiruvatpuram",
  },
  {
    id: 4,
    src: "/year/2021.jpeg",
    alt: "Awards Ceremony 2021",
    title: "2021",
    description: "ISRO, Thumba Station . Thiruvatpuram",
  },
  {
    id: 5,
    src: "/year/2022.jpeg",
    alt: "Awards Ceremony 2022",
    title: "2022",
    description: "ARIES , Nanital",
  },
  {
    id: 6,
    src: "/year/2023.jpg",
    alt: "Awards Ceremony 2022",
    title: "2023",
    description: "GMRT, Pune",
  },
  {
    id: 7,
    src: "/year/2024.jpg",
    alt: "Awards Ceremony 2022",
    title: "2024",
    description: "ISRO, NRSC Hyderabad",
  },
];

export default function AwardsCeremonyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === awardImages.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const prevSlide = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? awardImages.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsLoading(true);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Touch/swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    } else if (isRightSwipe) {
      prevSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
      } else if (event.key === "ArrowRight") {
        nextSlide();
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  const currentImage = awardImages[currentIndex];

  return (
    <div className="relative overflow-hidden">
      {/* Blurred background image that extends beyond the carousel */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat blur-sm opacity-60"
        style={{
          backgroundImage: `url(${currentImage.src})`,
          transform: "scale(1.1)",
        }}
      />

      {/* Dark overlay for blackish tone */}
      <div className="absolute inset-0 -z-5 bg-black/70" />

      <section className="relative awards-carousel w-full md:max-w-3xl mx-auto py-5">
        <div
          ref={carouselRef}
          className="relative w-full aspect-video bg-cover bg-center bg-no-repeat awards-carousel-slide transition-all duration-700 ease-in-out rounded-md overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${currentImage.src})`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Awards Ceremony Gallery"
          aria-live="polite"
        >
          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-20 loading-overlay">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full loading-spinner"></div>
            </div>
          )}

          {/* Bottom left: Title and Description */}
          <div className="absolute bottom-8 left-8 z-10 max-w-[60%]">
            <h2 className="text-2xl md:text-3xl font-medium text-white drop-shadow mb-1">
              {currentImage.title}
            </h2>
            <p className="text-white text-base md:text-lg  bg-opacity-40 rounded-lg py-2">
              {currentImage.description}
            </p>
          </div>

          {/* Bottom right: Navigation arrows and slide titles */}
          <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end space-y-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  prevSlide();
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className="w-10 h-10 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 carousel-nav-button"
                aria-label="Previous slide"
                disabled={isLoading}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-end">
                <span className="text-white text-base md:text-lg font-semibold drop-shadow">
                  {currentImage.title}
                </span>
              </div>
              <button
                onClick={() => {
                  nextSlide();
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className="w-10 h-10 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 carousel-nav-button"
                aria-label="Next slide"
                disabled={isLoading}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Swipe hint for mobile */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none md:hidden swipe-hint">
            <p className="text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
              Swipe to navigate
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

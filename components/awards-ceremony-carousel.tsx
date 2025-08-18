"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./awards-ceremony-carousel.css";

interface AwardImage {
  id: number;
  src: string;
  alt: string;
}

const awardImages: AwardImage[] = [
  {
    id: 1,
    src: "/g1.jpg",
    alt: "Awards Ceremony 2019",
  },
  {
    id: 2,
    src: "/g2.jpg",
    alt: "Awards Ceremony 2018",
  },
  {
    id: 3,
    src: "/g3.jpg",
    alt: "Awards Ceremony 2020",
  },
  {
    id: 4,
    src: "/g4.jpg",
    alt: "Awards Ceremony 2021",
  },
  {
    id: 5,
    src: "/g5.jpg",
    alt: "Awards Ceremony 2022",
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
    // Resume auto-play after 5 seconds
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
    }, 5000); // Change slide every 5 seconds

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
    <section className="relative awards-carousel">
      <div
        ref={carouselRef}
        className="relative h-[600px] bg-cover bg-center bg-no-repeat awards-carousel-slide transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${currentImage.src})`,
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

        {/* Navigation arrows */}
        <button
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 5000);
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 carousel-nav-button"
          aria-label="Previous slide"
          disabled={isLoading}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 5000);
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 carousel-nav-button"
          aria-label="Next slide"
          disabled={isLoading}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image counter and auto-play indicator */}
        <div className="absolute top-6 right-6 flex flex-col items-end gap-2 z-10">
          <div className="bg-black bg-opacity-30 px-3 py-1 rounded-full text-sm text-white">
            {currentIndex + 1} / {awardImages.length}
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
          <div
            className="h-full bg-white progress-bar-fill transition-all duration-500 ease-linear"
            style={{
              width: `${((currentIndex + 1) / awardImages.length) * 100}%`,
            }}
          ></div>
        </div>

        {/* Swipe hint for mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none md:hidden swipe-hint">
          <p className="text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
            Swipe to navigate
          </p>
        </div>
      </div>
    </section>
  );
}

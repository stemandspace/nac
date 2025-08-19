"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "./ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface HighlightReelItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

const highlightReelData: HighlightReelItem[] = [
  {
    id: 1,
    image: "/hr1.jpg",
    title: "NAC Legacy Event 2024",
    description: "Celebrating excellence in education and innovation",
    date: "23 November 2024",
  },
  {
    id: 2,
    image: "/hr2.jpg",
    title: "Student Achievement Awards",
    description: "Recognizing outstanding academic performance",
    date: "20 November 2024",
  },
  {
    id: 3,
    image: "/hr3.jpg",
    title: "Innovation Summit",
    description: "Showcasing cutting-edge educational technology",
    date: "18 November 2024",
  },
  {
    id: 4,
    image: "/hr4.jpg",
    title: "Community Outreach Program",
    description: "Building bridges between education and society",
    date: "15 November 2024",
  },
  {
    id: 5,
    image: "/hr5.jpg",
    title: "Leadership Workshop",
    description: "Empowering future educational leaders",
    date: "12 November 2024",
  },
  {
    id: 6,
    image: "/hr6.jpg",
    title: "Research Symposium",
    description: "Advancing knowledge in educational sciences",
    date: "10 November 2024",
  },
];

export default function HighlightReelCarousel() {
  const swiperRef = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("");

  useEffect(() => {
    // Debug: Log the number of slides
    console.log("Highlight Reel Data:", highlightReelData.length, "items");

    // Add resize listener to debug breakpoint changes
    const handleResize = () => {
      if (swiperRef.current) {
        const swiper = swiperRef.current.swiper;
        if (swiper) {
          console.log(
            "Window resized - Current breakpoint:",
            swiper.currentBreakpoint
          );
          console.log("Current slidesPerView:", swiper.params.slidesPerView);
          setCurrentBreakpoint(swiper.currentBreakpoint || "unknown");
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl text-gray-900 mb-6 font-medium">
            Highlight Reel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our legacy of excellence through memorable moments and
            achievements
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="mb-12 relative w-full">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            watchSlidesProgress={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className=""
            onSwiper={(swiper) => {
              setIsInitialized(true);
              setCurrentBreakpoint(swiper.currentBreakpoint || "unknown");
            }}
            onSlideChange={(swiper) => {
              console.log("Slide changed to:", swiper.activeIndex);
            }}
            onBreakpoint={(swiper, breakpoint) => {
              console.log("Breakpoint changed to:", breakpoint);
              console.log(
                "Current slidesPerView:",
                swiper.params.slidesPerView
              );
              setCurrentBreakpoint(String(breakpoint));
            }}
          >
            {highlightReelData.map((item, index) => (
              <SwiperSlide key={item.id} className="rounded-xl overflow-hidden">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="aspect-video relative overflow-hidden rounded-t-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.image}`);
                        e.currentTarget.src = "/placeholder.jpg";
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button className="bg-[#EE7E1A] hover:bg-[#D67015] text-white px-12 py-6 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
}

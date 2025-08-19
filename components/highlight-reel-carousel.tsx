"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "./ui/button";
import "./highlight-reel-carousel.css";

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

  useEffect(() => {
    // Debug: Log the number of slides
    console.log("Highlight Reel Data:", highlightReelData.length, "items");
  }, []);

  return (
    <section className="py-16 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
            Highlight Reel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our legacy of excellence through memorable moments and
            achievements
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="mb-12 relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={4}
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
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="highlight-reel-swiper"
            onSwiper={(swiper) => {
              console.log(
                "Swiper initialized with",
                swiper.slides.length,
                "slides"
              );
              console.log("Current breakpoint:", swiper.currentBreakpoint);
              console.log("Swiper instance:", swiper);
            }}
            onSlideChange={(swiper) => {
              console.log("Slide changed to:", swiper.activeIndex);
            }}
          >
            {highlightReelData.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.image}`);
                        e.currentTarget.src = "/placeholder.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-[#EE7E1A] text-sm font-medium">
                      {item.date}
                    </p>
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

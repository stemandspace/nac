"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  User,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import Support from "@/components/school-registration/support";
import Hero from "@/components/hero";

import AwardsCeremonyCarousel from "@/components/awards-ceremony-carousel";
export default function LegacyPage() {
  const [selectedYear, setSelectedYear] = useState("2018");
  const [currentSlide, setCurrentSlide] = useState(0);

  const years = ["2018", "2019", "2020", "2021"];

  const timelineData = {
    "2018": {
      image: "https://picsum.photos/800/500?random=1",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    "2019": {
      image: "https://picsum.photos/800/500?random=2",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    "2020": {
      image: "https://picsum.photos/800/500?random=3",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    "2021": {
      image: "https://picsum.photos/800/500?random=4",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
  };

  const galleryImages = [
    "/legacy/img1.jpg",
    "/legacy/img4.jpg",
    "/legacy/img6.jpg",
    "/legacy/img2.jpg",
    "/legacy/img7.jpg",
    "/legacy/img3.jpg",
    "/legacy/img5.jpg",
    "/legacy/img8.jpg",
  ];

  const testimonialVideos = [
    "/legacy/testimonial.jpg",
    "/legacy/testimonial.jpg",
    "/legacy/testimonial.jpg",
    "/legacy/testimonial.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialVideos.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length
    );
  };

  return (
    <div className="min-h-screen bg-white font-medium">
      <Hero
        bgimage="/legacy/bghero.jpg"
        title="National Astronomy Challenge: Celebrating the Legacy (2018-2024)"
        desc="From our humble beginning in 2018, NAC has become a launchpad for over 500+ schools, 100,000+ students, and countless dreams. Award Ceremonies, Space Expeditions, and Global Participation - witness the journey through the years."
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-4"></div>
      </Hero>

      {/* Inspiring Section */}
      <section className="py-16 bg-white font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-medium">
                Inspiring Young Astronomers Across the Globe
              </h2>
              <p className="text-gray-600 mb-4 font-medium">
                From our humble beginning in 2018, NAC has become a launchpad
                for over 500+ schools, 100,000+ students, and countless dreams.
              </p>
              <p className="text-gray-600 font-medium">
                Award Ceremonies, Space Expeditions, and Global Participation -
                witness the journey through the years.
              </p>
            </div>
            <div className="relative">
              <img
                src="/legacy/section2.jpg"
                alt="Award ceremony"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <AwardsCeremonyCarousel />

      {/* Student Testimonials */}
      <section className="py-16 bg-white font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center text-gray-900 mb-12">
            Students love National Astronomy Challenge
          </h2>
          <div className="relative">
            {/* Full-width responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {testimonialVideos.map((video, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer w-full"
                >
                  <img
                    src={video || "/legacy/bghero.jpg"}
                    alt={`Student testimonial ${index + 1}`}
                    className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
                  />
                  {/* Optional play overlay */}
                  {/* <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-center justify-center group-hover:bg-opacity-40 transition-all">
              <div className="bg-white bg-opacity-90 p-3 rounded-full">
                <Play className="w-6 h-6 text-gray-800" />
              </div>
            </div> */}
                </div>
              ))}
            </div>
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#5BB0E01C] font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-medium text-gray-900">
              Gallery of Impact
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-medium">
                Select year:
              </span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm font-medium"
              >
                {years.map((year) => (
                  <option key={year} value={year} className="font-medium">
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-gray-50 font-medium">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-gray-900">Join NAC 2025</h2>
          <p className="text-2xl text-gray-900 mb-10 font-medium">
            Registrations Open Now!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center justify-between w-full sm:w-[520px] bg-[#EDF6FC] px-6 py-5 rounded-lg shadow">
              <div className="flex items-center gap-3">
                <div className="bg-[#5BB0E0] text-white p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-medium whitespace-nowrap">
                  Are you a School?
                </span>
              </div>
              <Link href="/school-registration">
                <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-4 sm:px-6 py-4 rounded-full whitespace-nowrap text-sm sm:text-base font-medium">
                  Register Your School
                </Button>
              </Link>
            </div>

            {/* Student Card */}
            <div className="flex items-center justify-between w-full sm:w-[520px] bg-[#EDF6FC] px-6 py-5 rounded-lg shadow">
              <div className="flex items-center gap-3">
                <div className="bg-[#5BB0E0] text-white p-3 rounded-lg">
                  <User className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-medium whitespace-nowrap">
                  Are you a Student?
                </span>
              </div>
              <Link href="/direct-registration">
                <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-4 sm:px-6 py-4 rounded-full whitespace-nowrap text-sm sm:text-base font-medium">
                  Register Directly
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Support />
    </div>
  );
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, User, GraduationCap } from "lucide-react"
import Link from "next/link"
import Support from '@/components/school-registration/support';
import Subscribe from '@/components/school-registration/subscribe'

export default function LegacyPage() {
  const [selectedYear, setSelectedYear] = useState("2018")
  const [currentSlide, setCurrentSlide] = useState(0)

  const years = ["2018", "2019", "2020", "2021"]

  const timelineData = {
    "2018": { image: "https://picsum.photos/800/500?random=1", description: "Lorem ipsum dolor sit amet consectetur." },
    "2019": { image: "https://picsum.photos/800/500?random=2", description: "Lorem ipsum dolor sit amet consectetur." },
    "2020": { image: "https://picsum.photos/800/500?random=3", description: "Lorem ipsum dolor sit amet consectetur." },
    "2021": { image: "https://picsum.photos/800/500?random=4", description: "Lorem ipsum dolor sit amet consectetur." },
  }

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

  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialVideos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length)
  }

  return (
    <div className="min-h-screen bg-white">

<section className="relative bg-black text-white min-h-screen flex items-end">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url('/legacy/bghero.jpg')` }}
  >
    {/* Overlay gradients */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/70 to-transparent"></div>
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  </div>

  {/* Foreground content */}
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
    <div className="flex items-center justify-between gap-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          National Astronomy Challenge:
        </h1>
        <p className="text-xl">Celebrating the Legacy (2018-2024)</p>
      </div>
      <div className="w-40 h-40 relative">
        <img
          src="/home/arrow-right.png"
          alt="Arrow"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</section>

      {/* Inspiring Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl  text-gray-900 mb-6">
                Inspiring Young Astronomers Across the Globe
              </h2>
              <p className="text-gray-600 mb-4">
                From our humble beginning in 2018, NAC has become a launchpad for over 500+ schools, 100,000+ students,
                and countless dreams.
              </p>
              <p className="text-gray-600">
                Award Ceremonies, Space Expeditions, and Global Participation - witness the journey through the years.
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

      {/* Timeline Section */}
    <section className="relative">
        <div
          className="relative h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('/home/img2.png')`,
          }}
        >
          {/* Navigation arrows */}
          <button className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content overlay */}
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h3 className="text-6xl font-bold mb-2">2019</h3>
            <p className="text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur,
            </p>
          </div>

          {/* Year pagination */}
          <div className="absolute bottom-8 right-8 flex gap-4 text-white z-10">
            <button className="text-gray-400 hover:text-white transition-colors">
              2019
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              2018
            </button>
            <button className="text-white font-semibold">2019</button>
            <button className="text-gray-400 hover:text-white transition-colors">
              2020
            </button>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
      Students love National Astronomy Challenge
    </h2>
    <div className="relative">
      {/* Full-width responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {testimonialVideos.map((video, index) => (
          <div key={index} className="relative group cursor-pointer w-full">
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
      <section className="py-16 bg-[#5BB0E01C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Gallery of Impact</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Select year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
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
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold text-gray-900">Join NAC 2025</h2>
    <p className="text-2xl text-gray-900 mb-10">Registrations Open Now!</p>
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
          <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-4 sm:px-6 py-4 rounded-full whitespace-nowrap text-sm sm:text-base">
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
          <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-4 sm:px-6 py-4 rounded-full whitespace-nowrap text-sm sm:text-base">
            Register Directly
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>

<Support /> 
<Subscribe />
    </div>
  )
}

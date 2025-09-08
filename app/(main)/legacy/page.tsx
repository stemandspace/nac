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
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GallerySection from "@/components/GallerySection";
import route from "@/lib/route";
export default function LegacyPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const years = [
    "2017-2018",
    "2018-2019",
    "2020-2021",
    "2022-2023",
    "2023-2024",
    "2024-2025",
  ];

  const galleryData = {
    "2017-2018": [
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_S333_cb556242cb.jpg?updatedAt=2025-08-22T12%3A19%3A34.631Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_S555_8b30d60806.jpg?updatedAt=2025-08-22T12%3A19%3A07.679Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_S666_75778b0b2b.jpg?updatedAt=2025-08-22T12%3A19%3A07.577Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_S222_3163fde6f1.jpg?updatedAt=2025-08-22T12%3A19%3A02.408Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_S777_c4e49e14bd.jpg?updatedAt=2025-08-22T12%3A19%3A02.377Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_S444_6aa8124d06.jpg?updatedAt=2025-08-22T12%3A19%3A02.331Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_S555_4d8fe034b8.jpg?updatedAt=2025-08-22T12%3A19%3A02.541Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_S333_fbf280eb67.jpg?updatedAt=2025-08-22T12%3A19%3A02.418Z",
    ],
    "2018-2019": [
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_G27_5225eb0883.jpeg?updatedAt=2025-08-22T05%3A52%3A07.855Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_D2_f53cbbc750.JPG?updatedAt=2025-08-22T06%3A57%3A40.540Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_D1_31e8bb6fa8.jpg?updatedAt=2025-08-22T06%3A57%3A39.476Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_D5_1aa8333262.jpg?updatedAt=2025-08-22T06%3A57%3A39.441Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_D3_1561a332a0.jpg?updatedAt=2025-08-22T06%3A57%3A39.418Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_D4_8cdd01c82e.jpg?updatedAt=2025-08-22T06%3A57%3A39.416Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_D222_19a6a18b99.jpg?updatedAt=2025-08-22T12%3A19%3A02.371Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_D111_72bca0a656.jpg?updatedAt=2025-08-22T12%3A19%3A02.303Z",
    ],
    "2020-2021": [
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_T4_8b85d6f606.jpg?updatedAt=2025-08-22T07%3A11%3A32.681Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_T_1_27f7c97232.jpg?updatedAt=2025-08-22T07%3A11%3A31.658Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_T2_54662504d6.jpg?updatedAt=2025-08-22T07%3A11%3A31.439Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_T3_710f371ca6.jpg?updatedAt=2025-08-22T07%3A11%3A31.350Z",
    ],
    "2022-2023": [
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_N4_82128f2914.jpg?updatedAt=2025-08-22T08%3A13%3A40.828Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_N5_06e9e21cb9.jpeg?updatedAt=2025-08-22T08%3A13%3A40.585Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_N3_5a39fe4e58.jpeg?updatedAt=2025-08-22T08%3A13%3A40.334Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_N111_150c6a0c72.jpg?updatedAt=2025-08-22T12%3A18%3A45.436Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_N222_1c7807ee8c.jpeg?updatedAt=2025-08-22T12%3A18%3A45.065Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_N_9a5700d0e7.jpeg?updatedAt=2025-08-22T16%3A07%3A10.341Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_N444_598802e2e6.jpeg?updatedAt=2025-08-22T12%3A18%3A44.957Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Nanital_111_bb6087d2bd.jpeg?updatedAt=2025-08-22T15%3A52%3A38.826Z",
    ],
    "2023-2024": [
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Pune_10_71f64522b4.jpeg?updatedAt=2025-08-22T07%3A28%3A31.893Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Pune_6_c2a8548f85.jpeg?updatedAt=2025-08-22T07%3A28%3A31.892Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Pune9_7ced89bff8.jpeg?updatedAt=2025-08-22T07%3A28%3A31.562Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Pune_2_1269c6ff7b.jpeg?updatedAt=2025-08-22T07%3A25%3A23.758Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Pune_3_b30879b627.jpeg?updatedAt=2025-08-22T07%3A25%3A23.672Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Pune_4_e92def024b.jpeg?updatedAt=2025-08-22T07%3A25%3A04.827Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Pune7_d460b5aa21.jpeg?updatedAt=2025-08-22T07%3A28%3A31.918Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_Whats_App_Image_2025_08_22_at_21_41_48_730f3fe4cf.jpeg?updatedAt=2025-08-22T16%3A12%3A29.319Z",
    ],
    "2024-2025": [
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_H5_c0f7204e9b.jpeg?updatedAt=2025-08-22T07%3A48%3A03.054Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_H4_0cc0ba711c.jpeg?updatedAt=2025-08-22T07%3A48%3A02.818Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_H3_57643e1240.jpeg?updatedAt=2025-08-22T07%3A48%3A02.669Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_H1_f347fd8e05.jpeg?updatedAt=2025-08-22T07%3A48%3A02.555Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_H2_ccdea93ceb.jpeg?updatedAt=2025-08-22T07%3A48%3A02.529Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_H333_b4ce6c2b27.jpeg?updatedAt=2025-08-22T12%3A40%3A38.378Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_H444_e8a480c3a8.jpeg?updatedAt=2025-08-22T12%3A40%3A38.303Z",
      "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_H111_a13b0cebfc.jpeg?updatedAt=2025-08-22T12%3A40%3A38.060Z",
    ],
  };

  const testimonialVideos = [
    "https://youtu.be/FbqOS-DKAdQ",
    "https://youtu.be/McjgvMo4JQY",
    "https://youtu.be/4j97ueQk50k",
    "https://youtu.be/RPs1cQzPAd8",
    "https://youtu.be/2QgnkQdsS2c",
    // "https://youtu.be/EayTzG2JJR8",
    "https://youtu.be/0wyQWtJXgPQ",
    "https://youtu.be/HrM72fs-8Xc",
    "https://youtu.be/n6CRckfs5uU",
    "https://youtu.be/iLaGZ00wuAA",
    "https://youtu.be/2idvkf7Usgo",
    "https://youtu.be/IbjOdBgZdlA",
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
      />

      {/* Inspiring Section */}
      <section className="py-16 bg-white font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-medium">
                NAC: Inspiring Young Astronomers Worldwide
              </h2>
              <p className="text-gray-600 mb-4 font-medium">
                A brainchild of astronomers and space enthusiasts at STEM &
                Space – an ISRO-registered space tutor and the only company in
                Asia awarded by Dr. Buzz Aldrin – NAC has been igniting young
                minds since 2018.
              </p>
              <p className="text-gray-600 font-medium">
                With 500+ schools, 100,000+ students, and global participation,
                it’s become a launchpad for curiosity through award ceremonies,
                space expeditions, and more.
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
      <TestimonialsCarousel videoUrls={testimonialVideos} />

      {/* Gallery Section */}
      <GallerySection images={galleryData} years={years} />

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
              <Link href={route.SCHOOL_REGISTRATION_FORM}>
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
              <Link href={route.STUDENT_REGISTRATION_FORM}>
                <Button className="bg-[#EE7E1A] hover:bg-orange-600 text-white px-4 sm:px-6 py-4 rounded-full whitespace-nowrap text-sm sm:text-base font-medium">
                  Register Directly
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

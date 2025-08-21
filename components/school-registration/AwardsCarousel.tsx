"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Awards = [
  {
    description:
      "Top 3 students in each grade (direct participation category) win a Telescope",
    image: "/rewards/R1.jpg",
  },
  {
    description:
      "All winners receive medals, certificates, and national recognition",
    image: "/rewards/R2.jpg",
  },
  {
    description:
      "Top performers invited to Awards Ceremony & Solar Observatory Visit - Udaipur",
    image: "/rewards/R3.jpg",
  },
  {
    description: "Special recognition for youngest achievers in each grade",
    image: "/rewards/R4.jpg",
  },
  {
    description: "Exclusive access to advanced space science workshops",
    image: "/rewards/R5.JPG",
  },
  {
    description:
      "Opportunity to participate in international space competitions",
    image: "/rewards/R6.jpg",
  },
  {
    description:
      "Opportunity to participate in international space competitions",
    image: "/rewards/R7.jpg",
  },
  {
    description:
      "Opportunity to participate in international space competitions",
    image: "/rewards/R8.jpg",
  },
  {
    description:
      "Opportunity to participate in international space competitions",
    image: "/rewards/R9.jpg",
  },
  {
    description:
      "Opportunity to participate in international space competitions",
    image: "/rewards/R10.jpg",
  },
];

export default function AwardsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
      "(min-width: 1280px)": { slidesToScroll: 4 },
    },
  });

  // Auto-play functionality
  React.useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 4000); // Auto-scroll every 4 seconds

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#EDF6FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-orange-500 text-sm font-semibold mb-2">
            AWARDS & RECOGNITION
          </div>
          <h2 className="text-4xl font-bold">
            Rewards that Inspire Excellence
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {Awards.map((award, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] w-64 h-48 sm:w-80 sm:h-64 md:w-96 md:h-72 lg:w-[28rem] lg:h-80 border rounded-lg p-4 flex items-center justify-center bg-white shadow-sm"
              >
                <Image
                  src={award.image}
                  alt={`Award ${index + 1}`}
                  width={200}
                  height={150}
                  className="w-full h-full object-contain"
                  priority={index < 3} // Prioritize first 3 images
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

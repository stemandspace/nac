"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Partners = [
  "/logos/Logo1.jpeg",
  "/logos/Logo2.jpeg",
  "/logos/Logo3.jpeg",
  "/logos/Logo4.jpeg",
  "/logos/Logo5.jpeg",
];

export default function PartnerCarousel() {
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
      }, 3000); // Auto-scroll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-medium text-center mb-12">
          PROUDLY PARTNERED WITH LEADING SCHOOLS
        </h2>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {Partners.map((partner, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] w-32 h-24 sm:w-40 sm:h-32 md:w-48 md:h-36 lg:w-56 lg:h-40 border rounded-lg p-4 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={partner}
                  alt={`Partner ${index + 1}`}
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

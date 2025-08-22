"use client";

import React from "react";
import Image from "next/image";
import { fixImageUrl } from "@/lib/image";
import useEmblaCarousel from "embla-carousel-react";

const imageUrls = [
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P18_22f9956d18.JPG?updatedAt=2025-08-22T06%3A27%3A53.136Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P13_1f39b1c8f3.JPG?updatedAt=2025-08-22T06%3A27%3A52.626Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P16_00903870b5.JPG?updatedAt=2025-08-22T06%3A27%3A52.514Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P15_c1738e5717.JPG?updatedAt=2025-08-22T06%3A27%3A52.209Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P17_3ad1ba75cf.JPG?updatedAt=2025-08-22T06%3A27%3A52.010Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P10_c9db82d2b6.JPG?updatedAt=2025-08-22T06%3A27%3A51.613Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P11_1_fda1c8f376.JPG?updatedAt=2025-08-22T06%3A27%3A51.232Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P11_9cb66aa589.JPG?updatedAt=2025-08-22T06%3A27%3A51.098Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P23_1_f917284636.jpg?updatedAt=2025-08-22T06%3A27%3A31.486Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P23_45a1958456.jpg?updatedAt=2025-08-22T06%3A27%3A31.256Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P24_092a155bbb.jpg?updatedAt=2025-08-22T06%3A27%3A31.211Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P_25_9a19b9f4a9.jpg?updatedAt=2025-08-22T06%3A27%3A31.102Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P22_c106536c75.jpg?updatedAt=2025-08-22T06%3A27%3A31.098Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P_27_3fb4178de6.jpg?updatedAt=2025-08-22T06%3A27%3A30.911Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P_28_7622bde8e6.jpg?updatedAt=2025-08-22T06%3A27%3A30.447Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P_26_53c3bbeade.jpg?updatedAt=2025-08-22T06%3A27%3A30.428Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P_29_76d219e169.jpg?updatedAt=2025-08-22T06%3A27%3A30.109Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P20_b347e35096.jpg?updatedAt=2025-08-22T06%3A27%3A22.512Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_P21_5d9860b73e.jpg?updatedAt=2025-08-22T06%3A27%3A22.284Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_R10_934a743148.jpg?updatedAt=2025-08-22T06%3A04%3A28.355Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_R9_9d4499b02c.jpg?updatedAt=2025-08-22T06%3A04%3A27.750Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_R8_62209920bd.jpg?updatedAt=2025-08-22T06%3A04%3A27.384Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_R3_8eee1a4433.jpg?updatedAt=2025-08-22T06%3A04%3A26.171Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_R2_c77b6beb10.jpg?updatedAt=2025-08-22T06%3A04%3A26.012Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_R7_8a42d52aae.jpg?updatedAt=2025-08-22T06%3A04%3A25.478Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_R6_9a3aede9e8.jpg?updatedAt=2025-08-22T06%3A04%3A25.185Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_R1_12495fdadb.jpg?updatedAt=2025-08-22T06%3A04%3A24.430Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_G31_409384e689.jpeg?updatedAt=2025-08-22T05%3A52%3A08.163Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_G15_29832fe45d.jpg?updatedAt=2025-08-22T05%3A52%3A08.055Z",
  "https://s3.us-east-1.amazonaws.com/myckc/myckc/thumbnail_G3_d690314124.jpg?updatedAt=2025-08-22T05%3A52%3A07.706Z",
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
            {imageUrls.map((imageUrl, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] w-64 h-48 sm:w-80 sm:h-64 md:w-96 md:h-72 lg:w-[28rem] lg:h-80 border rounded-lg p-4 flex items-center justify-center bg-white shadow-sm"
              >
                <Image
                  src={fixImageUrl(imageUrl)}
                  alt={`Award ${index + 1}`}
                  width={200}
                  height={150}
                  quality={30}
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

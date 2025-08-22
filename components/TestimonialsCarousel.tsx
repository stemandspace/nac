"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Youtube from "@/components/youtube";

interface VideoItem {
  url: string;
  title?: string;
}

interface TestimonialsCarouselProps {
  videoUrls?: string[];
  videos?: VideoItem[];
  title?: string;
  showTitles?: boolean;
}

function extractYouTubeId(url: string): string | null {
  try {
    // Handles youtu.be/<id>, youtube.com/watch?v=<id>, and other common forms
    const shortMatch = url.match(/youtu\.be\/(^[?&#/]+|[\w-]{11})/);
    if (shortMatch && shortMatch[1] && shortMatch[1].length >= 10)
      return shortMatch[1].slice(0, 11);

    const idMatch = url.match(/[?&]v=([\w-]{11})/);
    if (idMatch) return idMatch[1];

    const embedMatch = url.match(/embed\/([\w-]{11})/);
    if (embedMatch) return embedMatch[1];

    // Fallback: last 11 char group
    const generic = url.match(/[\w-]{11}(?=$|[?&#])/);
    return generic ? generic[0] : null;
  } catch {
    return null;
  }
}

export default function TestimonialsCarousel({
  videoUrls,
  videos,
  title = "Students love National Astronomy Challenge",
  showTitles = true,
}: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 1 },
      "(min-width: 1024px)": { slidesToScroll: 2 },
      "(min-width: 1280px)": { slidesToScroll: 3 },
    },
  });

  const items = React.useMemo(() => {
    if (videos && videos.length > 0) return videos;
    if (videoUrls && videoUrls.length > 0)
      return videoUrls.map((u, i) => ({ url: u, title: undefined }));
    return [] as VideoItem[];
  }, [videos, videoUrls]);

  const videoIds = React.useMemo(
    () =>
      items
        .map((it) => ({ id: extractYouTubeId(it.url), title: it.title }))
        .filter((v): v is { id: string; title?: string } => Boolean(v.id)),
    [items]
  );

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  // Auto-scroll removed per request: manual navigation only

  if (videoIds.length === 0) return null;

  return (
    <section className=" bg-white font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Carousel Container (full width on mobile) */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {videoIds.map((video, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_80%] lg:flex-[0_0_45%] xl:flex-[0_0_32%]"
                >
                  <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100">
                    <Youtube videoId={video.id} />
                  </div>
                  {showTitles && (
                    <div className="mt-3">
                      <h3 className="text-sm font-medium text-gray-900">
                        {video.title || ""}
                      </h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons in a separate row below */}
          <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="bg-[#EE7E1A] hover:bg-orange-600 text-white shadow-lg p-3 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="bg-[#EE7E1A] hover:bg-orange-600 text-white shadow-lg p-3 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

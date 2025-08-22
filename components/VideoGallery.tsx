"use client";

import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

interface VideoItem {
  url: string;
  title?: string;
}

interface VideoGalleryProps {
  videoUrls?: string[];
  videos?: VideoItem[];
  title?: string;
  categories?: { name: string; videos: VideoItem[] }[];
}

export default function VideoGallery({
  videoUrls,
  videos,
  title,
  categories,
}: VideoGalleryProps) {
  const hasCategories = Array.isArray(categories) && categories.length > 0;
  const [activeIdx, setActiveIdx] = React.useState(0);

  const currentVideos: VideoItem[] = React.useMemo(() => {
    if (hasCategories) return categories![activeIdx]?.videos || [];
    if (videos && videos.length > 0) return videos;
    if (videoUrls && videoUrls.length > 0)
      return videoUrls.map((u) => ({ url: u }));
    return [];
  }, [hasCategories, categories, activeIdx, videos, videoUrls]);

  if (!hasCategories && (!currentVideos || currentVideos.length === 0))
    return null;

  return (
    <section className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {hasCategories && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories!.map((c, idx) => (
              <button
                key={c.name}
                onClick={() => setActiveIdx(idx)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  idx === activeIdx
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        )}

        <TestimonialsCarousel videos={currentVideos} title={title} showTitles />
      </div>
    </section>
  );
}

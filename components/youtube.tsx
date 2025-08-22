"use client";

import YouTube from "react-youtube";

interface YoutubeProps {
  videoId: string;
}

const Youtube: React.FC<YoutubeProps> = ({ videoId }) => {
  // YouTube player options - responsive dimensions
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="w-full aspect-video">
      <YouTube
        videoId={videoId}
        opts={opts}
        className="w-full h-full rounded-xl"
        title="What is NAC - National Astronomy Challenge"
      />
    </div>
  );
};

export default Youtube;

//  <div className="grid gap-8 items-center">
//       <div className="relative max-w-2xl mx-auto w-full">
//         <div className="overflow-hidden rounded-xl shadow-lg bg-gray-100">

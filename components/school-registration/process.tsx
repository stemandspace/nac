"use client";
import ReactPlayer from "react-player";

export default function ProcessSection() {
  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          A Simple 3-Step Process to Join NAC 2025
        </h2>
        <p className="text-gray-600 mb-12">
          Learn how to register, pay securely, and start your NAC journey.
        </p>

        <div className="relative rounded-2xl overflow-hidden">
          <ReactPlayer
           src="/school-reg/proces-img.jpg" 
            width="100%"
            height="500px"
            // light="/school-reg/proces-img.jpg" 
            playing={false}
            controls={true}
            playIcon={
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-0 h-0 border-l-[20px] border-l-black border-y-[12px] border-y-transparent ml-1"></div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

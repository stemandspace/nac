import React from "react";

interface HeroProps {
  bgimage: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ bgimage, title, desc, children }) => {
  return (
    <section
      className="relative min-h-screen flex items-end justify-start px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%), url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto w-full py-8 sm:py-12 md:py-16">
        <div>
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xl sm:max-w-2xl font-light text-white leading-tight mb-4 sm:mb-6">
            {title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between">
            <p className="max-w-xl sm:max-w-3xl text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 leading-relaxed">
              {desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import clsx from "clsx";
interface HeroProps {
  bgimage: string;
  title: string;
  desc?: string;
  children?: React.ReactNode;
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
      <div className="max-w-7xl mx-auto w-full py-8">
        <div>
          <h1 className="text-xl md:text-3xl font-medium leading-tight text-white mb-2 max-w-xl">
            {title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between">
            {desc && (
              <p
                className={clsx(
                  "max-w-xl text-sm text-white mb-6 sm:mb-8 leading-relaxed",
                  children ? "mb-0" : "mb-6 sm:mb-8"
                )}
              >
                {desc}
              </p>
            )}
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

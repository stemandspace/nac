import React from "react";
import Link from "next/link";
import Image from "next/image";
import route from "@/lib/route";
import { Button } from "@/components/ui/button";

interface HeroProps {
  bgimage: string;
  title: string;
  desc?: string;
  children?: React.ReactNode;
  isDanger?: boolean;
  alt?: string;
}

const Hero: React.FC<HeroProps> = ({
  bgimage,
  title,
  desc,
  children,
  alt = "Hero background",
}) => {
  return (
    <section
      className="relative min-h-screen flex items-end justify-start px-4 sm:px-6 lg:px-8"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <Image
        src={bgimage}
        alt={alt}
        fill
        priority={true}
        className="object-cover -z-10"
        sizes="100vw"
        quality={85}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 -z-10" />

      <div className="max-w-7xl mx-auto w-full lg:py-8 py-5 relative z-10">
        <div className="space-y-6">
          <h1 className="text-xl md:text-3xl font-medium leading-tight text-white mb-2 max-w-xl">
            {title}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between w-full">
            {desc && (
              <p
                dangerouslySetInnerHTML={{ __html: desc }}
                className="max-w-xl text-sm text-white leading-relaxed mb-6 sm:mb-8"
              />
            )}

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button
                asChild
                className="bg-white text-black px-8 py-6 rounded-4xl font-semibold uppercase tracking-wide hover:bg-orange-500 hover:text-white transition-colors duration-200"
              >
                <Link href={route.STUDENT_REGISTRATION_FORM}>
                  Register Directly
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="bg-transparent text-white border-white px-8 py-6 rounded-4xl font-semibold uppercase tracking-wide hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200"
              >
                <Link href={route.SCHOOL_REGISTRATION_FORM}>
                  Register your school
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

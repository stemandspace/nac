import React from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import route from "@/lib/route";
interface HeroProps {
  bgimage: string;
  title: string;
  desc?: string;
  children?: React.ReactNode;
  isDanger?: boolean;
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
      <div className="max-w-7xl mx-auto w-full lg:py-8 py-5">
        <div>
          <h1 className="text-xl md:text-3xl font-medium leading-tight text-white mb-2 max-w-xl">
            {title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between w-full">
            <p
              dangerouslySetInnerHTML={{ __html: desc ?? "" }}
              className={clsx(
                "max-w-xl text-sm text-white leading-relaxed mb-6 sm:mb-8"
              )}
            />
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button className="bg-white  text-black px-8 py-6 rounded-4xl font-semibold uppercase tracking-wide flex items-center gap-2">
                <Link href={route.STUDENT_REGISTRATION_FORM}>
                  Register Directly
                </Link>
              </Button>

              <Button className="bg-transparent  text-white border border-white px-8 py-6 rounded-4xl font-semibold uppercase tracking-wide flex items-center gap-2">
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

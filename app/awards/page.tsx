import { Button } from "@/components/ui/button";
import Image from "next/image";
import Section3 from "@/components/study-material/awards1";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  User,
  GraduationCap,
} from "lucide-react";
import Support from "@/components/school-registration/support";
import Subscribe from "@/components/school-registration/subscribe";
import Contact from "@/components/school-registration/contact";

export default function RewardsPage() {
  return (
    <>
      <section className="relative h-screen flex items-end pb-6">
        <div className="absolute inset-0">
          <Image
            src="/home/header2.jpg"
            alt="NAC 2025 Award Ceremony"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-white px-6 max-w-2xl ml-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Celebrating Excellence in Space Learning
          </h1>
          <p className="text-xl mb-6">
            Every great achievement deserves to be celebrated!
          </p>
        </div>
      </section>

      <Section3 />

      <div className="min-h-screen bg-white">
        {/* Student Awards Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto bg-[#F1F8FC] rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Student Awards
          </h2>

          {/* Header */}
          <div className="grid grid-cols-3 gap-6 font-semibold text-gray-900 mb-4">
            <div>Award Name</div>
            <div>Criteria</div>
            <div>Recognition</div>
          </div>

          {/* Rows */}
          <div className="grid grid-cols-3 gap-6 mb-4">
            <div className="bg-white rounded-lg px-4 py-3">
              Galaxy Gold Award
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Rank 1 student in respective grade
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Invited for Award Ceremony and Space Expedition along with school
              representative
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-4">
            <div className="bg-white rounded-lg px-4 py-3">
              Lunar Silver Award
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Rank 2 student in respective grade
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Invited for Award Ceremony and Space Expedition along with school
              representative
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg px-4 py-3">
              Cosmic Bronze Award
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Rank 3 student in respective grade
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Invited for Award Ceremony and Space Expedition along with school
              representative
            </div>
          </div>

          {/* Divider */}
          <hr className="my-10 border-gray-300" />

          {/* Certificate Section */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Certificate of Excellence
          </h2>

          {/* Header */}
          <div className="grid grid-cols-3 gap-6 font-semibold text-gray-900 mb-4">
            <div>Certificate Type</div>
            <div>Criteria</div>
            <div>Recognition</div>
          </div>

          {/* Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-lg px-4 py-3">
              Certificate of Excellence
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Achieving over 75 percentile in NAC 2025
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Certificate awarded
            </div>
          </div>
        </section>

        {/* School Awards Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto bg-[#F1F8FC] rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            School Awards
          </h2>

          {/* Header */}
          <div className="grid grid-cols-3 gap-6 font-semibold text-gray-900 mb-4">
            <div>Award</div>
            <div>Criteria</div>
            <div>Reward</div>
          </div>

          {/* Rows */}
          <div className="grid grid-cols-3 gap-6 mb-4">
            <div className="bg-white rounded-lg px-4 py-3">
              Galaxy Gold Award
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Student of school receiving Rank 1
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Science Expedition of nominated teacher
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-4">
            <div className="bg-white rounded-lg px-4 py-3">
              Lunar Silver Award
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Student of school receiving Rank 1
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Science Expedition of nominated teacher
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-4">
            <div className="bg-white rounded-lg px-4 py-3">
              Cosmic Bronze Award
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Student of school receiving Rank 3
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Science Expedition of nominated teacher
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg px-4 py-3">
              Meteor Shower Awards
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              School with highest number of silent achievers (75 percentile &
              above)
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Science Expedition of nominated teacher
            </div>
          </div>

          {/* Divider */}
          <hr className="my-10 border-gray-300" />

          {/* Certificates Section */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Certificates
          </h2>

          {/* Header */}
          <div className="grid grid-cols-3 gap-6 font-semibold text-gray-900 mb-4">
            <div>Certificate Type</div>
            <div>Criteria</div>
            <div>Recognition</div>
          </div>

          {/* Rows */}
          <div className="grid grid-cols-3 gap-6 mb-4">
            <div className="bg-white rounded-lg px-4 py-3">
              Cosmic Constellation Champion
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              School with highest number of participants
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Science Expedition of nominated teacher
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-lg px-4 py-3">
              Space School of the Year
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              School with highest engagement through CEC free webinars
            </div>
            <div className="bg-white rounded-lg px-4 py-3">
              Science Expedition of nominated teacher
            </div>
          </div>
        </section>

        <section className=" py-20 px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Journey Beyond the Classroom – NAC Space Expeditions Since 2018
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Every year, NAC winners embark on unforgettable space & science
            expeditions, exploring observatories, interacting with scientists,
            and experiencing astronomy up close.
          </p>
        </section>

        <section className="relative">
          <div
            className="relative h-[600px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('/home/img2.png')`,
            }}
          >
            {/* Navigation arrows */}
            <button className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content overlay */}
            <div className="absolute bottom-8 left-8 text-white z-10">
              <h3 className="text-6xl font-bold mb-2">2019</h3>
              <p className="text-lg text-gray-200">
                Lorem ipsum dolor sit amet consectetur,
              </p>
            </div>

            {/* Year pagination */}
            <div className="absolute bottom-8 right-8 flex gap-4 text-white z-10">
              <button className="text-gray-400 hover:text-white transition-colors">
                2019
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                2018
              </button>
              <button className="text-white font-semibold">2019</button>
              <button className="text-gray-400 hover:text-white transition-colors">
                2020
              </button>
            </div>
          </div>
        </section>

        <Support />
        <Subscribe />
        <Contact />
      </div>
    </>
  );
}

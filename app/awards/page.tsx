import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "@/components/hero";
import ContactSupportBanner from "@/components/ContactSupportBanner";
import SpacetopiaSubscriptionSection from "@/components/SpacetopiaSubscriptionSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function RewardsPage() {
  return (
    <>
      <Hero
        bgimage="/home/header2.jpg"
        title="Celebrating Excellence in Space Learning"
        desc="Every great achievement deserves to be celebrated!"
      />

      <div className="min-h-screen bg-gray-50">
        {/* What is NAC Section */}
        <section className=" bg-white py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Row */}
            <div className="flex justify-between items-center mb-8">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
                  Udaipur Solar Observatory (USO), Udaipur
                </h2>
                <p className="text-sm font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem commodi soluta sunt maxime quo repellat esse quibusdam
                  voluptatem inventore fugit perferendis corrupti, repudiandae
                  consectetur tenetur expedita illum fugiat ipsa sed.{" "}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition">
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Content Row */}
            <div className="grid  gap-8 items-center">
              {/* Right Column (Video/Image) */}
              <div className="relative">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="udaipur.png"
                    alt="NAC Students"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Awards Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-900 mb-8">
            Student Awards
          </h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Award Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Criteria
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Recognition
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Galaxy Gold Award
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Rank 1 student in respective grade
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Invited for Award Ceremony and Space Expedition along with
                    school representative
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Lunar Silver Award
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Rank 2 student in respective grade
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Invited for Award Ceremony and Space Expedition along with
                    school representative
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Cosmic Bronze Award
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Rank 3 student in respective grade
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Invited for Award Ceremony and Space Expedition along with
                    school representative
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Certificate of Excellence Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-900 mb-8">
            Certificate of Excellence
          </h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Certificate Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Criteria
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Recognition
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Certificate of Excellence
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Achieving over 70 percentile in NAC 2025
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Certificate awarded
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* School Awards Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-900 mb-8">
            School Awards
          </h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Award
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Criteria
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Reward
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Galaxy Gold Award
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Student of school receiving Rank 1
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Science Expedition of nominated teacher
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Lunar Silver Award
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Student of school receiving Rank 1
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Science Expedition of nominated teacher
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Cosmic Bronze Award
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Student of school receiving Rank 3
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Science Expedition of nominated teacher
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Meteor Shower Awards
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    School with highest number of silent achievers (75
                    percentile & above)
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Science Expedition of nominated teacher
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Certificates */}
          <div className="mt-12 bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Certificate Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Criteria
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Recognition
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Cosmic Constellation Champion
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    School with highest number of participants
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Science Expedition of nominated teacher
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Space School of the Year
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    School with highest engagement through CEC free webinars
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    Science Expedition of nominated teacher
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Support and Partners Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          {/* Support Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium">?</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">
                Have a Question
              </h3>
              <p className="text-sm font-medium text-gray-600 mb-4">
                Check our most common queries about NAC registration and
                participation.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full w-full font-medium">
                Click here for FAQs
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium">!</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">
                Understand the Rules
              </h3>
              <p className="text-sm font-medium text-gray-600 mb-4">
                Read about the participation terms for NAC.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full w-full font-medium">
                Download PDF
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium">?</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm font-medium text-gray-600 mb-4">
                Email: nationalastronomy@gmail.com Call us to help in case of
                any query.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full w-full font-medium">
                Contact Support
              </Button>
            </div>
          </div>
        </section>
        <SpacetopiaSubscriptionSection />
        <ContactSupportBanner />
      </div>
    </>
  );
}

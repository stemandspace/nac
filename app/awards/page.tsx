import Hero from "@/components/hero";
import USOSection from "@/components/USOSection";
export default function RewardsPage() {
  return (
    <>
      <Hero
        bgimage="https://s3.us-east-1.amazonaws.com/myckc/myckc/IMG_0335_1cfdb92b36.jpg?updatedAt=2025-08-22T08%3A38%3A29.021Z"
        title="Celebrating Excellence in Space Learning"
        desc="Every great achievement deserves to be celebrated!"
      />

      <div className="min-h-screen bg-gray-50">
        {/* USO Section */}
        <USOSection />

        {/* Student Awards Section */}
        <section className="pt-10 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-8 text-center font-bold">
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
          <p className="text-gray-700 text-center mt-5">
            For school participants, gold medals will be awarded to the top
            student in each grade at every school. For retail participants, gold
            medals will be awarded to the top student in each grade through
            direct participation.
          </p>
        </section>

        {/* Certificate of Excellence Section */}
        <section className="pt-10 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-8 text-center font-bold">
            Certificate of Excellence to awarded
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
                    Achieving over 75 percentile in NAC 2025
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
        <section className="pt-10 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl    text-gray-900 mb-2 text-center font-bold">
            School Awards
          </h2>
          <p className="text-gray-700 text-center mb-5">
            Three top students from each grade 4–9, along with a school
            representative, will be invited to the celebration
          </p>
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
      </div>
    </>
  );
}

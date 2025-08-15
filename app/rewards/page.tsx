import { Button } from "@/components/ui/button"

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Student Awards Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Student Awards</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Award Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Criteria</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Recognition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Galaxy Gold Award</td>
                <td className="px-6 py-4 text-sm text-gray-700">Rank 1 student in respective grade</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Invited for Award Ceremony and Space Expedition along with school representative
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Lunar Silver Award</td>
                <td className="px-6 py-4 text-sm text-gray-700">Rank 2 student in respective grade</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Invited for Award Ceremony and Space Expedition along with school representative
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Cosmic Bronze Award</td>
                <td className="px-6 py-4 text-sm text-gray-700">Rank 3 student in respective grade</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Invited for Award Ceremony and Space Expedition along with school representative
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Certificate of Excellence Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Certificate of Excellence</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Certificate Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Criteria</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Recognition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Certificate of Excellence</td>
                <td className="px-6 py-4 text-sm text-gray-700">Achieving over 70 percentile in NAC 2025</td>
                <td className="px-6 py-4 text-sm text-gray-700">Certificate awarded</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* School Awards Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">School Awards</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Award</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Criteria</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Reward</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Galaxy Gold Award</td>
                <td className="px-6 py-4 text-sm text-gray-700">Student of school receiving Rank 1</td>
                <td className="px-6 py-4 text-sm text-gray-700">Science Expedition of nominated teacher</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Lunar Silver Award</td>
                <td className="px-6 py-4 text-sm text-gray-700">Student of school receiving Rank 1</td>
                <td className="px-6 py-4 text-sm text-gray-700">Science Expedition of nominated teacher</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Cosmic Bronze Award</td>
                <td className="px-6 py-4 text-sm text-gray-700">Student of school receiving Rank 3</td>
                <td className="px-6 py-4 text-sm text-gray-700">Science Expedition of nominated teacher</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Meteor Shower Awards</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  School with highest number of silent achievers (75 percentile & above)
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">Science Expedition of nominated teacher</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Certificates */}
        <div className="mt-12 bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Certificate Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Criteria</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Recognition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Cosmic Constellation Champion</td>
                <td className="px-6 py-4 text-sm text-gray-700">School with highest number of participants</td>
                <td className="px-6 py-4 text-sm text-gray-700">Science Expedition of nominated teacher</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Space School of the Year</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  School with highest engagement through CEC free webinars
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">Science Expedition of nominated teacher</td>
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
              <span className="text-white font-bold">?</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Have a Question</h3>
            <p className="text-sm text-gray-600 mb-4">
              Check our most common queries about NAC registration and participation.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full w-full">
              Click here for FAQs
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">!</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Understand the Rules</h3>
            <p className="text-sm text-gray-600 mb-4">Read about the participation terms for NAC.</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full w-full">
              Download PDF
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">?</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Email: nationalastronomy@gmail.com Call us to help in case of any query.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full w-full">
              Contact Support
            </Button>
          </div>
        </div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-500 p-8 rounded-lg text-center text-white">
            <h3 className="text-xl font-bold mb-2">Subscribe our YouTube Channel</h3>
            <div className="bg-white text-green-500 p-4 rounded-lg mx-auto w-fit">
              <div className="text-2xl font-bold">SPACETOPIA</div>
              <div className="text-sm">SPACE SCIENCE MADE SIMPLE</div>
            </div>
          </div>

          <div className="bg-green-600 p-8 rounded-lg text-center text-white">
            <h3 className="text-xl font-bold mb-4">Join NAC WhatsApp Community</h3>
            <div className="bg-white p-4 rounded-lg mx-auto w-fit">
              <div className="w-24 h-24 bg-black mx-auto flex items-center justify-center">
                <div className="text-white text-xs">QR CODE</div>
              </div>
            </div>
          </div>

          <div className="bg-green-700 p-8 rounded-lg text-center text-white">
            <h3 className="text-xl font-bold mb-2">Subscribe Stories from the Universe</h3>
            <div className="bg-purple-600 text-white p-4 rounded-lg mx-auto w-fit">
              <div className="text-lg font-bold">STORIES</div>
              <div className="text-sm">FROM THE UNIVERSE</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

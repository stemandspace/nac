"use client";
import Image from "next/image";

export default function StudyMaterialSection() {
    return (
        <section className="bg-[#F0F8FF] py-16 px-6">
        <div className="max-w-7xl mx-auto">
            {/* Top: Heading + Content */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-2">
                Access NAC 2025 Study Material.
                <br /> Your Options at Spacetopia
                </h2>
                <p className="text-gray-600 mb-6">
                Every NAC participant gets 15 credits free – choose how you want
                to unlock the rest.
                </p>

                <div className="space-y-6 text-gray-700">
                <div>
                    <h3 className="font-semibold mb-1">Free Credits</h3>
                    <p>
                    15 Credits Free for every registered NAC participant – enough
                    to explore sample papers, a few quizzes, and introductory
                    space content.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">
                    Full NAC Preparation Requirement
                    </h3>
                    <p>
                    Credits Needed for NAC 2025 Study Material: 41 credits (After
                    free credits, you need an additional 26 credits).
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Our Access Options</h3>
                    <ul className="space-y-2 list-disc pl-6">
                    <li>
                        Option 1 – <b>Buy Additional Credits</b>: Purchase 26 extra
                        credits to unlock the complete NAC 2025 preparation pack.
                    </li>
                    <li>
                        Option 2 – <b>Go Premium (Best Value)</b>: Protostar
                        Membership = ₹2,499/year (40% NAC discount)
                    </li>
                    <li>
                        <b>Supernova Membership</b> = ₹2,999/year (40% NAC
                        discount)
                    </li>
                    </ul>
                </div>

                <p className="text-sm text-gray-500">
                    Includes unlimited content access, all NAC study material, plus
                    exclusive live sessions and year-round engagement.
                </p>
                </div>
            </div>

            {/* Right Image */}
            <div>
                <Image
                src="/study/s3.jpg"
                alt="NAC Study Material"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                />
            </div>
            </div>

            {/* Bottom Pricing Table */}
           <div className="mt-16 overflow-x-auto">
  <table className="min-w-full bg-white shadow-md rounded-2xl overflow-hidden text-sm">
<thead className="bg-[#EDF6FC]">
  <tr>
    <th className="px-6 py-4 font-bold text-black text-base text-left">Plan</th>
    <th className="px-6 py-4 font-bold text-black text-base text-left">Credits Included</th>
    <th className="px-6 py-4 font-bold text-black text-base text-left">
      NAC 2025 Material Access
    </th>
    <th className="px-6 py-4 font-bold text-black text-base text-left">Extra Benefits</th>
    <th className="px-6 py-4 font-bold text-black text-base text-left">Price</th>
  </tr>
</thead>

    <tbody className="divide-y divide-gray-200 rounded-4xl">
      <tr>
        <td className="px-6 py-4">Free Access Included (With Registration)</td>
        <td className="px-6 py-4">15 Credits</td>
        <td className="px-6 py-4">
          Limited sample papers, basic quizzes, and introductory content
        </td>
        <td className="px-6 py-4">-</td>
        <td className="px-6 py-4 font-medium">Free</td>
      </tr>

      <tr>
        <td className="px-6 py-4">Credit Top-Up</td>
        <td className="px-6 py-4">26 Credits (adds to your free 15)</td>
        <td className="px-6 py-4">Full NAC 2025 study pack (41 credits total)</td>
        <td className="px-6 py-4">-</td>
        <td className="px-6 py-4 font-medium">XXX (Per 26 credits)</td>
      </tr>

      <tr>
        <td className="px-6 py-4">Protostar Membership</td>
        <td className="px-6 py-4">Unlimited Credits</td>
        <td className="px-6 py-4">
          Full NAC 2025 study pack + All Spacetopia content
        </td>
        <td className="px-6 py-4">
          Exclusive live sessions, engagement activities, year-round access
        </td>
        <td className="px-6 py-4 font-medium text-[#2D7A0B]">
          ₹2,499/year (40% NAC Discount)
        </td>
      </tr>

      <tr>
        <td className="px-6 py-4">Supernova Membership</td>
        <td className="px-6 py-4">Unlimited Credits</td>
        <td className="px-6 py-4">
          Full NAC 2025 study pack + All Spacetopia content
        </td>
        <td className="px-6 py-4">
          Everything in Protostar + premium event invites & advanced workshops
        </td>
        <td className="px-6 py-4 font-medium text-[#2D7A0B]">
          ₹2,999/year (40% NAC Discount)
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
        </section>
    );
}

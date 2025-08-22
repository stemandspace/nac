"use client";
import Image from "next/image";

export default function StudyMaterialSection() {
  return (
    <section className="bg-[#F0F8FF] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-2 text-center">
            Access NAC Study Material at Spacetopia
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Every NAC participant gets 15 credits free – choose how you want to
            unlock the rest.
          </p>
        </div>

        {/* Top: Heading + Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
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
                    Membership = ₹2,499/year (50% discount)
                  </li>
                  <li>
                    <b>Supernova Membership</b> = ₹2,999/year (50% discount)
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
      </div>
    </section>
  );
}

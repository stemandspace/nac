import Image from "next/image";

export default function SpacetopiaSection() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Get Ready with Spacetopia */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#EE7E1A] text-sm font-semibold mb-2">
              NAC 2025 STUDY MATERIAL
            </div>
            <h3 className="text-4xl mb-6">Get Ready with Spacetopia</h3>
            <div className="space-y-4 mb-8">
              {[
                "Curated videos, space facts, and interactive quizzes",
                "Grade-specific mock tests",
                "Space comics for fun learning",
                "Available instantly after registration",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Image
                    src="/home/arrow-right.png"
                    alt="bullet"
                    width={20}
                    height={20}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-[#EE7E1A] text-white px-8 py-3 rounded-4xl font-semibold hover:bg-orange-600 transition-colors">
              REGISTER AS School
            </button>
          </div>

          <div>
            <Image
              src="/school-reg/sp1.jpg"
              alt="Spacetopia Learning"
              width={600}
              height={400}
              className="rounded-4xl"
            />
          </div>
        </div>

        {/* Stay Connected Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/school-reg/sp2.jpg"
              alt="NAC Community"
              width={600}
              height={400}
              className="rounded-4xl"
            />
          </div>
          <div>
            <div className="text-[#EE7E1A] text-sm font-semibold mb-2">
              ENGAGEMENT ACTIVITIES
            </div>
            <h3 className="text-4xl font-bold mb-6">
              Stay Connected and Engaged All Year
            </h3>
            <div className="space-y-4 mb-8">
              {[
                "Monthly space quizzes & challenges",
                "Live interactions with scientists",
                "December 2025 special NAC participant activities",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Image
                    src="/home/arrow-right.png"
                    alt="bullet"
                    width={20}
                    height={20}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <div className="font-bold text-lg mb-2">
                JOIN THE NAC WHATSAPP COMMUNITY
              </div>
            </div>
            <button className="bg-[#EE7E1A] text-white px-8 py-3 rounded-4xl font-semibold hover:bg-orange-600 transition-colors">
              REGISTER AS School
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

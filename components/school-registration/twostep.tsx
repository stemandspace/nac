import Image from "next/image";

export default function TwoSteps() {
  return (
    <section className="py-8 px-6" style={{ backgroundColor: "#EDF6FC" }}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-3">
            Two Simple Steps for Schools & Students
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-sm">
            We've made the registration process quick, clear, and supportive for everyone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* For Schools */}
          <div>
            <h3 className="text-xl font-semibold mb-5">For Schools:</h3>
            <div className="space-y-4">
              {[
                "Fill out the school registration form.",
                "Student registration link is automatically generated and sent to you.",
                "NAC Team will call your school for a quick briefing and support.",
                "Share the student registration link with parents and students.",
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-8 h-8 min-w-8 min-h-8">
                    <Image
                      src="/home/icon.png"
                      alt="icon"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Students */}
          <div>
            <h3 className="text-xl font-semibold mb-5">For Students (via School):</h3>
            <div className="space-y-4">
              {[
                "Receive registration link from school.",
                "Visit NAC website to learn more & fill in the registration form.",
                "Complete payment (if applicable).",
                "Receive confirmation email instantly.",
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-8 h-8 min-w-8 min-h-8">
                    <Image
                      src="/home/icon.png"
                      alt="icon"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

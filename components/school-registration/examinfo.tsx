import Image from "next/image";

export default function ExamInfoSection() {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div>
          <div className="mb-4">
            <span className="text-[#EE7E1A] text-sm font-semibold uppercase">
              EXAM PATTERN & FORMAT
            </span>
          </div>

          <h2 className="text-4xl font-bold mb-8 leading-snug">
            Know the NAC 2025 Exam <br /> Inside Out
          </h2>

          <div className="space-y-5 text-sm text-gray-800">
            {/* TYPE */}
            <div className="grid grid-cols-2 gap-6">
              <span className="font-semibold">TYPE:</span>
              <span>Multiple Choice Questions (MCQs)</span>
            </div>

            {/* TOTAL QUESTIONS */}
            <div className="grid grid-cols-2 gap-6">
              <span className="font-semibold">TOTAL QUESTIONS:</span>
              <span>60</span>
            </div>

            {/* DURATION */}
            <div className="grid grid-cols-2 gap-6">
              <span className="font-semibold">DURATION:</span>
              <span>60 minutes</span>
            </div>

            {/* NEGATIVE MARKING */}
            <div className="grid grid-cols-2 gap-6">
              <span className="font-semibold">NEGATIVE MARKING:</span>
              <span>25% for each wrong answer</span>
            </div>

            {/* QUESTION TYPES */}
            <div className="grid grid-cols-2 gap-6">
              <span className="font-semibold">QUESTION TYPES:</span>
              <ol className="list-decimal list-inside space-y-1">
                <li>Application-Based – Real-world scenarios & problem-solving</li>
                <li>Knowledge-Based – Core concepts & factual understanding</li>
              </ol>
            </div>

            {/* MODE */}
            <div className="grid grid-cols-2 gap-6">
              <span className="font-semibold">MODE:</span>
              
              <p>Online through SHL – the world’s largest secured assessment platform</p>
            </div>

            {/* PREPARATION SUPPORT */}
            <div className="grid grid-cols-2 gap-6">
              <span className="font-semibold">PREPARATION SUPPORT:</span>
              <ol className="list-decimal list-inside space-y-1">
                <li>Access to Mock Exams</li>
                <li>Sample Papers on Spacetopia</li>
              </ol>
            </div>
          </div>

          <button className="mt-8 bg-[#EE7E1A] hover:bg-orange-600 transition text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
            REGISTER AS: School
            <span className="text-lg">⌄</span>
          </button>
        </div>

        {/* Right Section - Image */}
        <div>
          <Image
            src="/school-reg/examinfo.png"
            alt="NAC Exam Group Photo"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

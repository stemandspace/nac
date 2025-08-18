"use client";

import Image from "next/image";

export default function SubscribePage() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 - YouTube */}
        <div className="bg-gradient-to-b from-[#ABD25D] to-[#5C9A0D] rounded-2xl shadow-md text-center p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-medium text-white mb-6">
            Subscribe our YouTube channel
          </h3>
          <div className="flex justify-center mb-6">
            <Image
              src="/school-reg/spacetopia1.png"
              alt="Spacetopia Logo"
              width={200}
              height={80}
              className="mx-auto rounded-2xl h-auto w-auto max-w-[70%] sm:max-w-[200px]"
            />
          </div>
          <button className="bg-[#EE7E1A] hover:bg-orange-600 text-white w-full max-w-[280px] mx-auto py-3 rounded-full font-medium transition">
            Subscribe
          </button>
        </div>

        {/* Card 2 - WhatsApp */}
        <div className="bg-gradient-to-b from-[#ABD25D] to-[#5C9A0D] rounded-2xl shadow-md text-center p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-medium text-white mb-6">
            Join Our WhatsApp Community
          </h3>
          <div className="flex justify-center mb-6">
            <div className="bg-white p-2 sm:p-3 rounded-2xl">
              <Image
                src="/school-reg/barcode.png"
                alt="WhatsApp QR"
                width={120}
                height={120}
                className="mx-auto rounded-2xl h-auto w-auto max-w-[80px] sm:max-w-[120px]"
              />
            </div>
          </div>
          <button className="bg-[#EE7E1A] hover:bg-orange-600 text-white w-full max-w-[280px] mx-auto py-3 rounded-full font-medium transition">
            Join Now
          </button>
        </div>

        {/* Card 3 - Stories of the Universe */}
        <div className="bg-gradient-to-b from-[#ABD25D] to-[#5C9A0D] rounded-2xl shadow-md text-center p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-medium text-white mb-6">
            Subscribe Stories of the Universe
          </h3>
          <div className="flex justify-center mb-6">
            <Image
              src="/school-reg/stories1.png"
              alt="Stories of the Universe"
              width={280}
              height={100}
              className="mx-auto rounded-2xl h-auto w-auto max-w-[80%] sm:max-w-[280px]"
            />
          </div>
          <button className="bg-[#EE7E1A] hover:bg-orange-600 text-white w-full max-w-[280px] mx-auto py-3 rounded-full font-medium transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

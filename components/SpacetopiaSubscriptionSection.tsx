import React from "react";
import Image from "next/image";

const SpacetopiaSubscriptionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* YouTube Channel Card */}
          <div className="bg-gradient-to-b from-[#BEDB63] to-[#70AA25] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="text-white text-center mb-6">
              <h3 className="text-xl font-bold mb-4">
                Subscribe our You Tube channel
              </h3>
            </div>

            {/* Spacetopia Logo Container */}
            <div className="bg-white rounded-xl p-6 mb-6 flex-1 flex flex-col items-center justify-center">
              <Image
                src="/spl.png"
                alt="Spacetopia Logo"
                width={200}
                height={200}
              />
            </div>

            <button className="w-full bg-[#EE7E1A] hover:bg-[#D67015] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:scale-105">
              Subscribe
            </button>
          </div>

          {/* WhatsApp Community Card */}
          <div className="bg-gradient-to-b from-[#BEDB63] to-[#70AA25] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="text-white text-center mb-6">
              <h3 className="text-xl font-bold mb-4">
                Join Our WhatsApp Community
              </h3>
            </div>

            {/* QR Code Container */}
            <div className="bg-white rounded-xl p-6 mb-6 flex-1 flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <Image src="/qr1.png" alt="QR Code" width={100} height={100} />
              </div>
            </div>

            <button className="w-full bg-[#EE7E1A] hover:bg-[#D67015] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:scale-105">
              Join Community
            </button>
          </div>

          {/* Stories of the Universe Card */}
          <div className="bg-gradient-to-b from-[#BEDB63] to-[#70AA25] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="text-white text-center mb-6">
              <h3 className="text-xl font-bold mb-4">
                Subscribe Stories of the Universe
              </h3>
            </div>

            {/* Cosmic Background Container */}
            <div className="bg-white rounded-xl p-6 mb-6 flex-1 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Starry background effect */}
              <Image
                src="/spu.png"
                alt="Starry Background"
                width={200}
                height={200}
              />
            </div>

            <button className="w-full bg-[#EE7E1A] hover:bg-[#D67015] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacetopiaSubscriptionSection;

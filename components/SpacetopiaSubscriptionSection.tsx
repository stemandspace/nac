import React from "react";
import Image from "next/image";
import Link from "next/link";

const YOUTUBE_URL =
  "https://youtube.com/@spacetopia.official?si=kRHNha5iERUq60Oc";
const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbAESlf6rsQqEgT6DZ2n";
const STORIES_URL =
  "https://youtube.com/@storiesbyspacetopia?si=Fe1H1QU9sj3xf27K";

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

            <Link
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#EE7E1A] hover:bg-[#D67015] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:scale-105 flex justify-center items-center text-center"
            >
              Subscribe
            </Link>
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
                <Image src="/wa.jpg" alt="QR Code" width={100} height={100} />
              </div>
            </div>

            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#EE7E1A] hover:bg-[#D67015] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:scale-105 flex justify-center items-center text-center"
            >
              Join Community
            </Link>
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

            <Link
              href={STORIES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#EE7E1A] hover:bg-[#D67015] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:scale-105 flex justify-center items-center text-center"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacetopiaSubscriptionSection;

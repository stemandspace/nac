import Image from "next/image";

    export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-end justify-center pb-6">
        <div className="absolute inset-0">
            <Image
            src="/home/header2.jpg"
            alt="NAC 2025 Award Ceremony"
            fill
            className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-white max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Heading + Paragraph */}
            <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get Ready to Excel with Comprehensive & Engaging Study Material for NAC 2025
            </h1>
            <p className="text-xl mb-6">
                Whether your child is participating via school or directly, our curated learning 
                resources will prepare them for success in the National Astronomy Challenge.
            </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Register Your School
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                Register Your Child
            </button>
            </div>
        </div>
        </section>
    );
    }

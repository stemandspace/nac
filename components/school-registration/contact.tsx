// components/ContactSection.tsx
import React from "react";

    export default function ContactSection() {
    return (
        <section className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Contact Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left text */}
            <div className="text-center lg:text-left">
                <div className="text-orange-500 text-sm font-semibold mb-2">
                CONTACT US ANYTIME
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                Need Help with Registration?
                </h3>
            </div>

            {/* Right side (arrow + info) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="w-16 h-16">
                <svg viewBox="0 0 100 50" className="w-full h-full text-white">
                    <path
                    d="M20 25 Q50 5 80 25"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    />
                    <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                    >
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                    </defs>
                </svg>
                </div>
                <div>
                <p className="text-sm sm:text-base">
                    Our NAC 2025 Support Team is here to guide you.
                </p>
                <p className="font-bold text-sm sm:text-base">
                    Email: nac@stemands.space
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

    // components/ContactSection.tsx
    import React from "react";

    export default function ContactSection() {
    return (
        <section className="py-4 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            {/* Contact Section */}
            <div className="bg-black text-white rounded-lg p-8 flex items-center justify-between">
            <div>
                <div className="text-orange-500 text-sm font-semibold mb-2">
                CONTACT US ANYTIME
                </div>
                <h3 className="text-2xl font-bold">Need Help with Registration?</h3>
            </div>
            <div className="flex justify-center items-center gap-4">
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
                <div className="text-right">
                <div>Our NAC 2025 Support Team is here to guide you.</div>
                <div className="font-bold">Email: nac@stemands.space</div>
                </div>
  
            </div>
            </div>
        </div>
        </section>
    );
    }

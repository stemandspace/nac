
export default function WhatsAppPage() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#BEDB63] to-[#70AA25] rounded-3xl p-12 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left content */}
            <div className="text-white space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Stay Connected!
              </h2>

              <p className="text-sm leading-relaxed opacity-90">
                Scan this QR Code to join the Official WhatsApp Community
                <br />
                for real-time updates, Spacetopia events & NAC-exclusive
                engagement
                <br />
                this Season over 2025.
              </p>

              <div className="pt-4">
                <p className="text-lg font-semibold">
                  Join Our WhatsApp Community.
                </p>
                <p className="text-base font-semibold opacity-90">
                  Don't miss out on exclusive content made just for NAC 2025
                  <br />
                  participants!
                </p>
              </div>
            </div>

            {/* Right QR Code */}
            <div className="flex justify-center lg:justify-end relative">
              {/* Curved arrow pointing to QR code */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden lg:block">
                <svg
                  width="140"
                  height="120"
                  viewBox="0 0 120 80"
                  className="text-white opacity-80"
                >
                  <path
                    d="M10 40 Q60 10 100 40"
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
                      <polygon
                        points="0 0, 10 3.5, 0 7"
                        fill="currentColor"
                      />
                    </marker>
                  </defs>
                </svg>
              </div>

              <div className="bg-white p-1 rounded-2xl shadow-lg">
                <img
                  src="/home/barcode.png?height=200&width=200"
                  alt="QR Code for WhatsApp Community"
                  className="w-64 h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

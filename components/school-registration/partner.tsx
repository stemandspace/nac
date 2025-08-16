export default function PartnersSection() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-center mb-12">
          PROUDLY PARTNERED WITH LEADING SCHOOLS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 flex items-center justify-center h-24"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/school-reg/icon.png"
                  alt="School Logo"
                  className="w-6 h-6 object-contain"
                />
                <span className="font-semibold">yourlogo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/SupportSection.tsx
import Image from "next/image";

export default function SupportSection() {
  const supportItems = [
    {
      icon: "/school-reg/message-question.png",
      title: "Have a Question",
      description:
        "Check our most common queries about NAC registration and participation",
      buttonText: "Click Here For FAQs",
    },
    {
      icon: "/school-reg/danger.png",
      title: "Understand the Rules",
      description: "Download the participation terms PDF",
      buttonText: "Download PDF",
    },
    {
      icon: "/school-reg/messages-2.png",
      title: "Need Help?",
      description:
        "Email: hello@nationalastronomy.org\nOur team is here to assist schools and parents",
      buttonText: "Contact Support",
    },
  ];

  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-300 rounded-xl p-6 h-full"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#93C14A] rounded-2xl flex items-center justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Text aligned left */}
              <h3 className="text-xl font-bold mb-4 text-left">{item.title}</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line text-left text-sm">
                {item.description}
              </p>

              {/* Button stays at bottom */}
              <div className="mt-auto">
                <button className="bg-[#EE7E1A] text-white px-8 py-3 rounded-4xl font-semibold hover:bg-orange-600 transition-colors w-full">
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: 'Is the kelong stable and safe to stay on overnight?',
        answer:
            'Yes, our kelong is built on a solid floating platform and securely anchored. It’s designed to withstand regular sea movement and weather conditions. Many of our guests find it surprisingly calm and relaxing — like sleeping on a gentle cradle over the sea. Safety equipment is provided, and our crew is on-site 24/7 to ensure your comfort and peace of mind.',
    },
    {
        question: 'What kind of safety measures do you have in place for sea activities?',
        answer:
            'Your safety is our priority. All of our water activities are supervised by trained local guides who are experienced in handling sea conditions. Life jackets, first-aid kits, and safety briefings are provided before each trip. For children or first-time snorkelers, our team offers hands-on assistance to ensure a relaxed and secure experience.',
    },
    {
        question: 'Is there mobile signal or internet on the kelong?',
        answer:
            'Yes, mobile signal is usually available, and we provide limited Wi-Fi access for basic needs like messaging or sharing photos. However, many guests find it refreshing to take a digital detox and enjoy the sea without distractions.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className="bg-[#FDF6E3] font-montserrat py-14 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[#005B99] font-semibold mb-2 text-xl sm:text-sm">FAQ</h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mb-10 leading-snug">
            Things You’re Wondering<br />About
          </h1>
        </div>
      
        <div className="max-w-3xl mx-auto space-y-6 px-0 sm:px-2">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-transparent border-b border-gray-300 pb-5">
              <button
                className="flex justify-between items-start w-full text-left gap-4"
                onClick={() => toggle(index)}
              >
                <h2 className="font-semibold text-sm sm:text-base md:text-lg text-[#1F2937]">
                  {faq.question}
                </h2>
                <ChevronUp
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-700 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <p className="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    );
}

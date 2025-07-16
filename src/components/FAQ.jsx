import React, { useState } from "react";

const faqData = [
  {
    question: "What areas do you cover?",
    answer:
      "We offer properties across Egypt's top destinations including El Gouna, North Coast, New Cairo, and more.",
  },
  {
    question: "Do you assist with legal and paperwork?",
    answer:
      "Yes! Our team handles the legal process, paperwork, and contracts to ensure a smooth and secure transaction.",
  },
  {
    question: "Can I book a virtual property tour?",
    answer:
      "Absolutely! We offer virtual tours for many of our listings so you can explore from the comfort of your home.",
  },
  {
    question: "Is there support for international buyers?",
    answer:
      "Yes, we help international clients with remote purchases and can handle everything from A to Z.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-8 py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-4 hover:border-orange-400 transition-all duration-300 cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span className="text-orange-400">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-gray-300">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

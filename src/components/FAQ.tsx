import { useState } from "react";

const faqData = [
  {
    question: "What types of bikes do you offer?",
    answer: "We offer a wide range including mountain bikes, electric bikes, road bikes, and more.",
  },
  {
    question: "Do you provide home delivery?",
    answer: "Yes, we provide fast and secure home delivery across the country.",
  },
  {
    question: "Can I return or exchange a bike?",
    answer: "Returns and exchanges are allowed within 7 days of delivery if unused and in original condition.",
  },
  {
    question: "Do you offer any warranty?",
    answer: "All bikes come with a manufacturer's warranty. Terms vary by model.",
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order from your dashboard under 'My Orders' once logged in.",
  },
  {
    question: "Do you offer installment payments?",
    answer: "Yes, EMI options are available for select banks at checkout.",
  },
  {
    question: "Is test ride available?",
    answer: "Yes, we offer test ride at select locations. Book through the product page.",
  },
  {
    question: "Can I customize my bike?",
    answer: "Yes, we offer customization options on select models. Contact support for details.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className=" mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 font-medium flex justify-between items-center"
              >
                {item.question}
                <span className="ml-2 text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-sm text-gray-700 bg-white">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

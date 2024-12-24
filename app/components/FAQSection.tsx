'use client' 

import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial with full access to all features.',
  },
  {
    question: 'Can I upgrade or downgrade my plan later?',
    answer: 'Absolutely! You can change your plan at any time from your account settings.',
  },
  {
    question: 'Does BOOKYOURDAY integrate with Google Calendar?',
    answer: 'Yes, BOOKYOURDAY seamlessly integrates with Google Calendar for easy synchronization.',
  },
  {
    question: 'Is my data secure?',
    answer: 'We prioritize security and use industry-standard measures to protect your data.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <span className="text-gray-600">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-2 bg-gray-50 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

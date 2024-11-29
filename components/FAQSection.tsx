"use client";
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "What services does your firm offer?",
      answer: "We specialize in Research Services, Monitoring Services, Evaluation Services, and Capacity Building. These services include Qualitative & Quantitative Research, Data Collection & Analysis, Project Monitoring Frameworks, Indicator Development, Training Workshops, and more."
    },
    {
      question: "How long does a typical project take?",
      answer: "The project timeline varies depending on scope and complexity. Short-term projects may take a few weeks, while larger projects could take several months. We always aim to deliver within the agreed timeline."
    },
    {
      question: "What is the process for engaging your services?",
      answer: "Our process includes an initial consultation, proposal development, project kickoff, data collection, and final reporting. We maintain transparency and communicate regularly throughout the project lifecycle."
    },
    {
      question: "What are the costs associated with your services?",
      answer: "Costs are based on the specific services and the scope of your project. After an initial consultation, we will provide a custom quote tailored to your needs."
    },
    {
      question: "How do you ensure the quality of your research and evaluations?",
      answer: "We use rigorous methodologies, including Logical Framework Approach and Theory of Change, supported by the latest tools and technologies to ensure accuracy and quality."
    },
    {
      question: "Can you customize training programs for my organization?",
      answer: "Absolutely! We can customize training workshops and mentorship programs to meet the specific needs of your organization."
    },
  ];

  return (
    <section className="bg-white  p-10 m-10 rounded-2xl mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-center text-tealblack ">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-4 py-4 text-left text-gray-800 font-extrabold "
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span>{activeIndex === index ? '-' : '+'}</span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-4 text-gray-700 bg-white rounded-xl shadow-2xl font-bold">
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

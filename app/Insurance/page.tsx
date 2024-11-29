// pages/services/trade-insurance.tsx
import React from 'react';

const TradeInsurance = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Trade Insurance</h1>
      <p className="text-lg text-gray-600">
        At Middle Ground Limited, we understand the complexities and risks involved in international trade. Our trade insurance solutions are designed to protect businesses from potential losses and provide peace of mind in an unpredictable market.
      </p>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Our Insurance Solutions</h2>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-blue-600">Import/Export Insurance</h3>
            <p className="text-gray-700 mt-2">
              Our Import/Export Insurance covers potential losses due to damage, theft, or delays during the shipping process. We ensure that your goods are protected, giving you confidence in your trading operations.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-blue-600">Freight Insurance</h3>
            <p className="text-gray-700 mt-2">
              Freight Insurance provides coverage for goods while in transit, protecting against unforeseen incidents such as accidents, natural disasters, or cargo handling errors. Our policies are tailored to fit the specific needs of your business.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-blue-600">Trade Credit Insurance</h3>
            <p className="text-gray-700 mt-2">
              Trade Credit Insurance safeguards your business from non-payment by clients. This insurance covers the risk of defaults, allowing you to trade with confidence, knowing that your receivables are protected.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Our Trade Insurance?</h2>
        <p className="text-gray-700">
          By choosing Middle Ground Limited for your trade insurance needs, you benefit from:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Expertise:</strong> Our team has extensive knowledge of the trade and insurance landscape, ensuring you receive the best advice tailored to your needs.</li>
          <li><strong>Comprehensive Coverage:</strong> We provide a range of insurance products that cover various risks associated with trading.</li>
          <li><strong>Peace of Mind:</strong> Our insurance solutions are designed to protect your business interests, allowing you to focus on growth and operations.</li>
          <li><strong>Responsive Support:</strong> Our dedicated team is available to assist you with claims and inquiries, ensuring you receive prompt and efficient service.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">How to Get Started</h2>
        <p className="text-gray-700">
          Getting started with our trade insurance solutions is simple:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li><strong>Consultation:</strong> Contact us for an initial consultation to discuss your trading activities and insurance needs.</li>
          <li><strong>Assessment:</strong> We’ll assess your specific risks and recommend the most suitable insurance products.</li>
          <li><strong>Policy Setup:</strong> Once you select your coverage, we will guide you through the policy setup process.</li>
          <li><strong>Ongoing Support:</strong> We offer ongoing support to ensure your insurance needs continue to be met as your business evolves.</li>
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-gray-700">
          For reliable trade insurance solutions designed to protect your business interests, contact Middle Ground Limited today. Let us help you navigate the complexities of trade with confidence.
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default TradeInsurance;

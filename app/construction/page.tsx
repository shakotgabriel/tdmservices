// pages/services/construction-infrastructure.tsx
import React from 'react';

const ConstructionAndInfrastructure = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Construction & Infrastructure Development</h1>
      <p className="text-lg text-gray-600">
        At Middle Ground Limited, we specialize in delivering robust construction and infrastructure solutions across South Sudan and beyond. Our experienced team is dedicated to transforming concepts into reality, managing each project from initial planning to final handover. We ensure every project is executed to the highest standards, on time, and within budget.
      </p>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-blue-600">Commercial & Residential Projects</h3>
            <p className="text-gray-700 mt-2">
              We provide construction solutions for both commercial and residential projects, creating durable structures that meet the highest standards. From office buildings and retail spaces to housing and residential developments, our team handles all phases of construction, ensuring every project is tailored to our client’s needs and meets their specifications.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-blue-600">Infrastructure Development</h3>
            <p className="text-gray-700 mt-2">
              Our expertise extends to infrastructure projects essential for communities and industries, including the construction of roads, bridges, drainage systems, and more. We are committed to sustainable development practices, ensuring that all infrastructure we build not only meets current demands but is also prepared to support future growth and community needs.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-blue-600">Turnkey Solutions</h3>
            <p className="text-gray-700 mt-2">
              Middle Ground Limited offers complete turnkey solutions, managing every stage of the construction lifecycle. Our team coordinates design, engineering, procurement, construction, and project management to provide a seamless experience for our clients. This approach allows clients to focus on their business while we handle the intricate details of construction from start to finish.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-700">
          With a deep commitment to excellence, Middle Ground Limited brings a comprehensive, hands-on approach to every construction project. We ensure:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Quality Assurance:</strong> Our projects adhere to strict quality standards, ensuring longevity and resilience in every structure we build.</li>
          <li><strong>On-Time Delivery:</strong> We understand the importance of deadlines and are dedicated to meeting or exceeding them without compromising quality.</li>
          <li><strong>Budget Management:</strong> We maintain cost-efficiency at every step, optimizing resources to deliver maximum value within the agreed budget.</li>
          <li><strong>Environmental Responsibility:</strong> We incorporate sustainable practices, reducing waste and minimizing the environmental footprint of our projects.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Our Process</h2>
        <p className="text-gray-700">
          We follow a structured approach to construction and infrastructure development, ensuring transparency and accountability:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li><strong>Initial Consultation:</strong> Understanding client requirements and project goals.</li>
          <li><strong>Planning & Design:</strong> Developing detailed project plans, timelines, and design blueprints.</li>
          <li><strong>Resource Procurement:</strong> Sourcing high-quality materials and skilled labor.</li>
          <li><strong>Construction Phase:</strong> Executing the project with rigorous oversight, ensuring adherence to quality and safety standards.</li>
          <li><strong>Completion & Handover:</strong> Finalizing and delivering a project that meets client expectations in every aspect.</li>
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-gray-700">
          Ready to start your construction or infrastructure project? Reach out to us today for a consultation and let us bring your vision to life.
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

export default ConstructionAndInfrastructure;

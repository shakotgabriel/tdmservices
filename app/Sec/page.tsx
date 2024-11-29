"use client";

import React from 'react';
import Image from 'next/image';

const Sec = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-black p-10 rounded-lg shadow-md mb-8">
      {/* Left Image */}
      <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
        <Image
          src="/images/MG.png"
          alt="Lida Fusion"
          className="w-full h-auto object-cover rounded-lg"
          width={300}
          height={250}
        />
      </div>

      {/* Right Text Section */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          About Lida Fusion Company Limited
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Lida Fusion Company Limited was founded in [Year] with a mission to provide
          innovative and high-quality monitoring and evaluation (M&E) services. Our commitment
          to data-driven insights and rigorous methodologies has made us a trusted partner in
          achieving measurable and sustainable impact for our clients. As we continue to grow,
          we strive to enhance our services, expand our reach, and remain at the forefront of
          M&E innovations.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          With a focus on delivering actionable insights, we have helped countless organizations
          successfully monitor and evaluate their projects, ensuring that they are on track to
          achieve their goals. Our team is dedicated to applying the latest tools and techniques
          to provide accurate, transparent, and meaningful results.
        </p>
        <p className="text-lg text-gray-700">
          As we look toward the future, Lida Fusion remains committed to the highest standards of
          excellence, integrity, and innovation in all our M&E services, aiming to support our
          clients in making well-informed decisions that drive positive change.
        </p>
      </div>
    </section>
  );
};

export default Sec;

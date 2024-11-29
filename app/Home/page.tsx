import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import ScrollAnimation for performance optimization
const ScrollAnimation = dynamic(() => import('@/components/scroll-animation'), { ssr: false });

// Reusable WhiteCard Component
const WhiteCard = ({ text }) => (
  <div className="p-8 bg-green-200 shadow-lg rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
    <p className="text-black font-semibold text-lg uppercase">{text}</p>
  </div>
);

function Page() {
  return (
    <main className="grid h-screen w-full bg-transparent grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <section className="grid grid-rows-2 gap-10 p-8 lg:p-12 relative bg-white">
        {/* Row 1: Logo Image and White Card */}
        <div className="grid grid-cols-2 items-center gap-6">
          {/* Logo Image */}
          <div className="flex justify-center">
            <Image
              src="/images/TDMLOGO.png"
              alt="Company logo showcasing innovation"
              width={300}
              height={200}
              className="h-auto"
              priority // Load important images eagerly
            />
          </div>

          {/* White Card */}
          <WhiteCard text="Driving innovation and excellence in every service we provide." />
        </div>

        {/* Row 2: Overlay Image and White Card */}
        <div className="grid grid-cols-2 items-center gap-6">
          {/* Overlay Image */}
          <div className="flex justify-center animate-pulse">
            <Image
              src="/images/pngegg.png"
              alt="Creative overlay graphic for branding"
              width={300}
              height={200}
              className="h-auto"
              loading="lazy" // Improve performance for non-critical images
            />
          </div>

          {/* White Card */}
          <WhiteCard text="Delivering exceptional, locally tailored solutions that meet the unique needs of South Sudan." />
        </div>
      </section>

      {/* Right Section with Image */}
      <ScrollAnimation>
        <section className="bg-green-100 flex items-center justify-center">
          <Image
            src="/images/dam.jpg"
            alt="Image representing modern infrastructure"
            width={600}
            height={400}
            className="w-full h-auto max-h-[700px] object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            loading="lazy" // Lazy load for performance
          />
        </section>
      </ScrollAnimation>
    </main>
  );
}

export default Page;

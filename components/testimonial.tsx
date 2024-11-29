import React from 'react';
import { NeonGradientCard } from "./ui/neon-gradient-card";
import FadeInBottom from './Fadeinbottom';
function Testimonial() {
  return (
    <div className="py-32">
      <h2 className="text-3xl font-extrabold text-center mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-20">
        <FadeInBottom>
          <NeonGradientCard className="p-2">
            <div className="font-[sans-serif]  rounded-lg mx-auto relative  p-14">
              <div className="mt-6 text-center">
                <div>
                  <h4 className="text-sm font-extrabold text-gray-800">Deng</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Web Designer | Software hub PVT. LTD.</p>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-extrabold text-gray-800 mb-2">Amazing Design Inspiration</h2>
                  <p className="text-sm text-gray-800 leading-relaxed">The service was amazing. I never had to wait that long for my food. </p>
                </div>
              </div>
            </div>
          </NeonGradientCard>
        </FadeInBottom>

        <FadeInBottom>
          <NeonGradientCard className="p-2">
            <div className="font-[sans-serif]   rounded-lg mx-auto relative  p-14">
              <div className="mt-6 text-center">
                <div>
                  <h4 className="text-sm font-extrabold text-gray-800">Gatluak</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Graphic Designer | Creative Agency</p>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-extrabold text-gray-800 mb-2">Exceptional Service</h2>
                  <p className="text-sm text-gray-800 leading-relaxed"> The team was very professional and the results exceeded my expectations.</p>
                </div>
              </div>
            </div>
          </NeonGradientCard>
        </FadeInBottom>

        <FadeInBottom>
          <NeonGradientCard className="p-2">
            <div className="font-[sans-serif] rounded-lg mx-auto relative  p-14 ">
              <div className="mt-6 text-center">
                <div>
                  <h4 className="text-sm font-extrabold text-gray-800">Sule</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Product Manager | Tech Solutions</p>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-extrabold text-gray-800 mb-2">Highly Recommend</h2>
                  <p className="text-sm text-gray-800 leading-relaxed"> I would definitely recommend their services to others.</p>
                </div>
              </div>
            </div>
          </NeonGradientCard>
        </FadeInBottom>
      </div>
    </div>
  );
}

export default Testimonial;
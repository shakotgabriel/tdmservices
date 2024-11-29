"use client";


import Image from 'next/image';
import FlipCard from "./animata/flip-card";
import FadeInRight from "./fadeinright";

export function VisionMissionSection() {
  return (
    <div className="relative flex flex-col md:flex-row md:p-16 ">
      {/* Image Section */}
      <div className="flex-1 md:w-1/2 relative ">
        <Image 
          src="/images/map-removebg-preview.png" // Ensure this path is correct
          alt="World Globe" 
          className="object-cover globe" // Added globe class for spinning animation
          width={500} // Set the desired width
          height={400} // Set the desired height
          priority // Optional: Load the image with priority
        />
      </div>

      {/* Vision and Mission Sections */}
      <div className="flex-1 md:w-1/2 flex flex-col justify-center space-y-8 ">
        {/* Vision Section - Replaced with FlipCard */}
        <FadeInRight>
          <FlipCard 
            image="/images/vision.png" // Replace with your vision image path
            title="Our Vision"
            description="To be a leader in the industry, recognized for our innovative solutions and commitment to excellence."
            subtitle="Leading the Future"
            rotate="y"
            className="text-white w-72" // Increased height and width, removed shadow
          />
        </FadeInRight>

        {/* Mission Section - Replaced with FlipCard */}
        <FadeInRight>
          <FlipCard 
            image="/images/mission.png" // Replace with your mission image path
            title="Our Mission"
            description="To bridge global markets with local expertise by delivering innovative, reliable, and high-quality services that empower businesses and improve lives."
            subtitle="Empowering Businesses"
            rotate="y"
            className="text-white w-72" // Increased height and width, removed shadow
          />
        </FadeInRight>
      </div>
    </div>
  );
}

export default VisionMissionSection;
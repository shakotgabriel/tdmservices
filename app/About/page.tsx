import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-12 bg-white">

      {/* Section 2: Mission and Vision */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="bg-greenish p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission and Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            At TDM, customer focus is our driving force. We build strong, long-term relationships with clients and suppliers, aiming to lead industry change and respond swiftly to customer needs.
          </p>
          <p className="text-lg text-gray-700 font-semibold">Our mission is to deliver:</p>
          <ul className="list-inside list-disc text-gray-600 space-y-2 mt-4">
            <li><strong>Quality:</strong> Consistent and reliable solutions.</li>
            <li><strong>Fair Pricing:</strong> Competitive rates without compromising value.</li>
            <li><strong>Honest Communication:</strong> Transparency in all our dealings.</li>
          </ul>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/idea.jpg"
            alt="Map showcasing TDM's vision of global presence"
            layout="fill"
            objectFit="cover"
            className="transform hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Section 3: Philosophy */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
          <Image
            src="/images/evaluation.webp"
            alt="TDM team working collaboratively"
            layout="fill"
            objectFit="cover"
            className="transform hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
        <div className="bg-green-100 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Philosophy</h2>
          <p className="text-lg text-gray-700 mb-6">
            We believe our people are our greatest asset. By empowering our team with the right resources and direction, we foster growth and maintain our commitment to customer satisfaction.
          </p>
          <p className="text-lg text-gray-700">
            Our Group Philosophy, <strong>&quot;Every Relationship is Family, and Family Comes First,&quot;</strong> reflects our passion for teamwork, relationships, and integrity.
          </p>
        </div>
      </div>
    
    </div>
  );
}

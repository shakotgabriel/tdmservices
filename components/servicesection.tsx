"use client";
import Image from "next/image";
import Fadeinright from "./fadeinright";

const services = [
  {
    id: 1,
    title: "Information Technology Solutions",
    image: "/images/web.jpg",
    alt: "Technology Solutions",
  },
  {
    id: 2,
    title: "Import & Export Services",
    image: "/images/port.jpg",
    alt: "Import Export Services",
  },
  {
    id: 3,
    title: "Starlink",
    image: "/images/spacex.jpg",
    alt: "Starlink Services",
  },
  {
    id: 4,
    title: "Graphic Design",
    image: "/images/graphic.jpeg",
    alt: "Graphic Design",
  },
  {
    id: 5,
    title: "General Printing",
    image: "/images/prin.jpg",
    alt: "Medical Equipment",
  },
  {
    id: 6,
    title: "Logistics and Transportation",
    image: "/images/ware-house.jpg",
    alt: "Logistics and Transportation",
  },
];

export function ServicesSection() {
  return (
    <div className="py-16 bg-greenish">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Fadeinright key={service.id}>
              <div className=" rounded-lg p-5 flex flex-col items-center text-center ">
                <div className="relative w-full h-64">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    layout="fill"
                    className="rounded-lg shadow-2xl border-2 border-black border-y-fresh object-cover hover:scale-110"
                  />
                </div>
                <h3 className="font-black text-xl text-black mt-4">
                  {service.title}
                </h3>
              </div>
            </Fadeinright>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;

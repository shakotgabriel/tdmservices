'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const servicesData = [
  {
    label: "TECHNOLOGY & IT SOLUTIONS",
    href: "/IT",
    icon: "💻",
    description: `We provide cutting-edge technology solutions designed to meet the ever-evolving demands of businesses. 
      Our expertise in web development, IT infrastructure, and digital transformation helps organizations stay competitive.
      Whether you're a startup or an established enterprise, we craft solutions that fit your unique needs.`,
    additionalServices: [
      "Custom Website Development: Responsive and tailored websites that enhance your online presence.",
      "E-commerce Platforms: Fully integrated online stores with secure payment gateways and seamless user experiences.",
      "Content Management Systems (CMS): Scalable systems that empower businesses to manage their content effectively.",
      "Web Hosting & Maintenance: Reliable hosting solutions with 24/7 technical support and maintenance.",
      "Software & Hardware Solutions: Bespoke software applications and procurement of high-quality hardware for your business.",
      "Security Systems: Comprehensive surveillance, access control, and cybersecurity solutions to protect your assets.",
    ],
  },
  {
    label: "IMPORT & EXPORT SERVICES",
    href: "/import",
    icon: "🌐",
    description: `We simplify international trade by providing comprehensive import and export solutions. 
      Our team manages the complex logistics, compliance, and sourcing processes, ensuring a smooth experience for businesses 
      of all sizes looking to expand their reach globally.`,
    additionalServices: [
      "Customs Clearance: Assisting clients in navigating regulatory requirements for imported/exported goods.",
      "Global Sourcing: Connecting businesses with top-tier suppliers for products, raw materials, and equipment.",
      "Freight Forwarding: Managing transportation logistics across air, sea, and land to guarantee timely delivery.",
    ],
  },
  {
    label: "GRAPHIC DESIGN",
    href: "/design",
    icon: "🎨",
    description: `Elevate your brand with our professional graphic design services. 
      From concept to creation, we ensure that every design aligns with your brand identity and resonates with your audience.`,
    additionalServices: [
      "Logo Design: Crafting memorable logos that represent your business values and vision.",
      "Promotional Materials: Eye-catching brochures, flyers, and banners for impactful marketing.",
      "Social Media Graphics: Engaging visuals tailored for various social media platforms.",
      "Custom Branding: Complete branding packages, including color schemes, typography, and design templates.",
    ],
  },
  {
    label: "CAR SHADES & CANOPIES",
    href: "/car",
    icon: "🚗",
    description: `Protect your vehicles and create comfortable spaces with our durable car shades and canopies. 
      Ideal for residential, commercial, and event use, our solutions are designed to withstand diverse weather conditions.`,
    additionalServices: [
      "Steel Car Shades: Custom-built solutions for parking lots, homes, and public spaces.",
      "Event Canopies: Versatile and stylish canopies perfect for sports, family gatherings, and exhibitions.",
      "Installation & Maintenance: Expert installation and long-term maintenance services.",
    ],
  },
  {
    label: "SUPPLY OF MEDICAL EQUIPMENT",
    href: "/medical",
    icon: "🏥",
    description: `Empowering healthcare providers with advanced medical equipment and supplies to deliver exceptional care. 
      We are a trusted partner for hospitals and clinics, ensuring the highest standards of quality and reliability.`,
    additionalServices: [
      "Diagnostic Tools: State-of-the-art X-ray machines, ultrasound devices, and other diagnostic technologies.",
      "Hospital Supplies: High-quality surgical instruments, hospital beds, and essential medical items.",
      "Personal Protective Equipment (PPE): Reliable masks, gloves, and safety gear to protect healthcare professionals.",
      "After-sales Support: Maintenance and training services for the equipment we supply.",
    ],
  },
  {
    label: "GENERAL PRINTING",
    href: "/general-printing",
    icon: "🖨️",
    description: `Our printing services provide businesses and individuals with high-quality, customized media and promotional materials. 
      We ensure that every product reflects your brand identity and delivers a professional impact.`,
    additionalServices: [
      "Documentary Production: Professional video documentation services for events, projects, and organizations.",
      "Photography Services: Capturing moments with high-quality photography for personal or commercial use.",
      "Promotional Products: Custom-branded T-shirts, caps, mugs, banners, and more for marketing and events.",
      "Consultancy: Expert advice on media production and promotional strategies.",
    ],
  },
  {
    label: "STARLINK",
    href: "/starlink",
    icon: "🛰️",
    description: `As an authorized Starlink retailer, we provide seamless satellite internet solutions. 
      Our services include kit sales, installation, and activation, ensuring connectivity in even the most remote areas.`,
    additionalServices: [
      "Starlink Kits: Sales of complete Starlink kits for homes and businesses.",
      "Installation Services: Professional installation to optimize satellite internet performance.",
      "Activation Support: Assistance with Starlink account setup and activation.",
    ],
  },
  {
    label: "LOGISTICS & TRANSPORTATION",
    href: "/logistics",
    icon: "🚚",
    description: `Our logistics services are designed to streamline supply chains and deliver goods efficiently. 
      From transportation to storage, we ensure reliability and cost-effectiveness at every step.`,
    additionalServices: [
      "Freight Forwarding: Coordinating the movement of goods by land, sea, or air with precision.",
      "Warehousing: Secure and scalable storage solutions for businesses of all sizes.",
      "Supply Chain Management: Enhancing the flow of goods from origin to destination through advanced strategies.",
      "Real-time Tracking: Providing visibility into your shipment status at all times.",
    ],
  },
]

const ServiceCard = ({ service }: { service: typeof servicesData[number] }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="h-full bg-greenish flex flex-col border-t-4 border-fresh dark:border-orange-400">
      <CardHeader className=" dark:from-green-950 dark:to-orange-950">
        <CardTitle className="flex items-center justify-between">
          <span className="text-xl font-semibold text-black dark:text-green-300">{service.label}</span>
          <span className="text-4xl">{service.icon}</span>
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="list-disc pl-5 mt-4 text-gray-600 dark:text-gray-300 space-y-2">
            {service.additionalServices.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </CardContent>
      <div className="p-4 mt-auto">
        <Button
          variant="outline"
          className="w-full text-orange-600 border-orange-600 hover:bg-orange-100 dark:text-orange-400 dark:border-orange-400 dark:hover:bg-orange-950"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <span className="mr-2">Show Less</span>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span className="mr-2">Learn More</span>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </Card>
  )
}

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white dark:from-green-950 dark:to-orange-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our <span className="text-black dark:text-green-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Badge variant="outline" className="text-lg py-2 px-4 bg-orange-100 text-orange-700 border-orange-500 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-400">
            Explore our comprehensive range of services
          </Badge>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection


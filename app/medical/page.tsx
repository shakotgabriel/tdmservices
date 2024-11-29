'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Stethoscope, Hospital, ShieldPlus, HeartPulse } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ProductCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ProductCard = ({ title, description, icon: Icon }: ProductCardProps) => (
  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
    <CardHeader className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
      <CardTitle className="flex items-center space-x-2">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
)

const MedicalEquipment = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Supply of Medical Equipment</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Middle Ground Limited imports and distributes high-quality medical equipment for hospitals and clinics. Our selection 
          includes a wide range of essential tools and supplies to support patient care and medical procedures.
        </p>
      </motion.div>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Our Products</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ProductCard
            title="Diagnostic Tools"
            description="We provide advanced diagnostic tools such as X-ray machines, ultrasound devices, and other technologies to aid in accurate medical assessments and treatment planning."
            icon={Stethoscope}
          />
          <ProductCard
            title="Hospital Supplies"
            description="Our inventory includes critical hospital supplies like surgical instruments, hospital beds, and other essential items that enhance patient care and streamline hospital operations."
            icon={Hospital}
          />
          <ProductCard
            title="Personal Protective Equipment (PPE)"
            description="We offer a full range of PPE, including masks, gloves, and other safety gear to protect healthcare professionals and patients alike, ensuring a safe and hygienic environment."
            icon={ShieldPlus}
          />
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Why Choose Our Medical Equipment Supply?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {['Quality Assurance', 'Wide Selection', 'Reliability'].map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">
                  0{index + 1}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {index === 0 && "All equipment is sourced from reputable manufacturers, meeting international standards."}
                  {index === 1 && "Comprehensive range of tools and supplies to meet diverse medical needs."}
                  {index === 2 && "Our products are durable and designed to support continuous medical operations."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Ready to equip your healthcare facility with top-quality medical tools and supplies? Get in touch with us today to learn more 
          about our offerings.
        </p>
        <Button asChild className="mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600">
          <a href="/Contacts">
            Contact Us
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.section>

      <motion.section {...fadeInUp} className="mt-12">
        <Card className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Empowering Healthcare</h3>
              <p className="text-gray-600 dark:text-gray-300">Partner with us to equip your facility with cutting-edge medical technology.</p>
            </div>
            <HeartPulse className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}

export default MedicalEquipment


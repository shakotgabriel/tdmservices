'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Umbrella, Tent, Sun, Wind, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => (
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

const CarShadesCanopies = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Car Shades & Canopies</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Protect your vehicles and create comfortable spaces with our durable car shades and canopies. 
          Ideal for residential, commercial, and event use, our solutions are designed to withstand diverse weather conditions.
        </p>
      </motion.div>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Steel Car Shades"
            description="Custom-built solutions for parking lots, homes, and public spaces. Our steel car shades provide long-lasting protection for vehicles in various settings."
            icon={Umbrella}
          />
          <ServiceCard
            title="Event Canopies"
            description="Versatile and stylish canopies perfect for sports, family gatherings, and exhibitions. Create comfortable outdoor spaces for any occasion."
            icon={Tent}
          />
          <ServiceCard
            title="Installation & Maintenance"
            description="Expert installation and long-term maintenance services to ensure your shades and canopies remain in top condition for years to come."
            icon={Sun}
          />
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Why Choose Our Car Shades & Canopies?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Weather Resistant', description: 'Our products are designed to withstand various weather conditions, providing year-round protection.', icon: Sun },
            { title: 'Durable Construction', description: 'Built with high-quality materials, our shades and canopies offer long-lasting performance.', icon: Shield },
            { title: 'Customizable Solutions', description: 'We offer tailored designs to meet your specific needs and complement your space.', icon: Wind },
          ].map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">
                  0{index + 1}
                </Badge>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <item.icon className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Get Started</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Ready to enhance your outdoor spaces with our durable car shades and canopies? Contact us today to discuss your needs and get a customized solution.
        </p>
        <Button asChild className="mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600">
          <a href="/Contacts">
            Request a Quote
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.section>

      <motion.section {...fadeInUp} className="mt-12">
        <Card className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Protect & Enhance Your Space</h3>
              <p className="text-gray-600 dark:text-gray-300">Experience the perfect blend of functionality and style with our car shades and canopies.</p>
            </div>
            <Umbrella className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}

export default CarShadesCanopies


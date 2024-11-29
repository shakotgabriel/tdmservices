'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Truck, Warehouse, GitBranch, Clock, Shield, Box } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => (
  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
    <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900 dark:to-amber-900">
      <CardTitle className="flex items-center space-x-2">
        <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
)

const Logistics = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Logistics, Transportation & Warehousing</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Middle Ground Limited provides comprehensive logistics solutions to meet your business needs. Our services encompass the 
          safe transport of goods, flexible warehousing options, and effective supply chain management to streamline operations and 
          ensure timely delivery.
        </p>
      </motion.div>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Freight Forwarding"
            description="We provide reliable and timely freight forwarding services via land, sea, and air, ensuring safe transportation and efficient delivery of your goods."
            icon={Truck}
          />
          <ServiceCard
            title="Warehousing"
            description="Our warehousing solutions offer both short-term and long-term storage options, tailored to your specific requirements in secure, well-maintained facilities."
            icon={Warehouse}
          />
          <ServiceCard
            title="Supply Chain Management"
            description="From origin to destination, we handle every step of the process, ensuring efficient coordination and minimizing delays for a seamless supply chain experience."
            icon={GitBranch}
          />
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Why Choose Our Logistics Services?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Comprehensive Solutions', description: 'Our end-to-end logistics services cover all aspects of transportation, storage, and management.', icon: Box },
            { title: 'Reliable Delivery', description: 'We prioritize timely and safe delivery, ensuring that your goods reach their destination as planned.', icon: Clock },
            { title: 'Flexible Storage Options', description: 'Our warehousing solutions are adaptable, providing short- and long-term options to suit your needs.', icon: Shield },
          ].map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900 dark:to-amber-900">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">
                  0{index + 1}
                </Badge>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <item.icon className="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
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
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Ready to streamline your logistics operations? Contact us today to discuss how our logistics, transportation, and warehousing 
          services can support your business goals.
        </p>
        <Button asChild className="mt-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600">
          <a href="/Contacts">
            Contact Us
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.section>

      <motion.section {...fadeInUp} className="mt-12">
        <Card className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900 dark:to-amber-900">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Optimize Your Supply Chain</h3>
              <p className="text-gray-600 dark:text-gray-300">Let us handle your logistics while you focus on growing your business.</p>
            </div>
            <Truck className="w-16 h-16 text-orange-600 dark:text-orange-400" />
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}

export default Logistics


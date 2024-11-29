'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Globe, Truck, FileCheck, Search } from 'lucide-react'
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

const ImportExport = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Import & Export Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Middle Ground Limited facilitates the smooth exchange of goods between South Sudan and global markets. 
          Our comprehensive import and export services ensure that your goods are transported efficiently and comply with all necessary regulations, 
          making international trade seamless for our clients.
        </p>
      </motion.div>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Customs Clearance"
            description="We handle all regulatory requirements to ensure your goods clear customs smoothly, working with local and international customs authorities to minimize delays and ensure compliance."
            icon={FileCheck}
          />
          <ServiceCard
            title="Global Sourcing"
            description="Leveraging our network of international suppliers, we help clients find and procure high-quality products, raw materials, and equipment from around the world."
            icon={Search}
          />
          <ServiceCard
            title="Freight Forwarding"
            description="Our logistics experts manage the end-to-end transportation of your goods by air, sea, or land, streamlining the process for a smooth journey from origin to destination."
            icon={Truck}
          />
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Why Choose Our Import & Export Services?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {['Expertise in Compliance', 'Global Network', 'End-to-End Support'].map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">
                  0{index + 1}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {index === 0 && "Our team stays up-to-date on customs regulations, ensuring that your goods meet all legal requirements."}
                  {index === 1 && "Access a wide range of trusted suppliers, allowing you to source high-quality materials and products from around the world."}
                  {index === 2 && "From sourcing to delivery, we manage the entire logistics process, reducing your burden and ensuring a seamless experience."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Interested in our import and export services? Get in touch with us to discuss your needs and learn how we can support your business 
          in international trade.
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
              <h3 className="text-2xl font-semibold mb-2">Ready to go global?</h3>
              <p className="text-gray-600 dark:text-gray-300">Let us handle your import and export needs while you focus on growing your business.</p>
            </div>
            <Globe className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}

export default ImportExport


'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Monitor, Shield, Cpu, Phone } from 'lucide-react'
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
    <CardHeader className="bg-gradient-to-r from-red-100 to-amber-100 dark:from-red-900 dark:to-amber-900">
      <CardTitle className="flex items-center space-x-2">
        <Icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
)

const TechnologyAndIT = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Technology & IT Solutions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
           We provide a comprehensive range of technology services designed to support businesses in South Sudan and beyond. 
          Our solutions cater to diverse needs, helping clients enhance their operations, improve security, and adopt the latest advancements in technology.
        </p>
      </motion.div>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Software Solutions"
            description="We provide tailored software development to meet your unique business needs, ranging from web applications to mobile and enterprise-level solutions."
            icon={Monitor}
          />
          <ServiceCard
            title="Hardware Solutions"
            description="Our hardware procurement services ensure you get reliable, high-quality devices to support your operations."
            icon={Cpu}
          />
          <ServiceCard
            title="Security Systems"
            description="Our team specializes in deploying robust security systems, including surveillance cameras, access control mechanisms, and other advanced security solutions."
            icon={Shield}
          />
          <ServiceCard
            title="Mobile Solutions"
            description="We develop cutting-edge mobile applications and provide mobile device management solutions to keep your workforce connected and productive."
            icon={Phone}
          />
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Why Choose Our Technology Solutions?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {['Customized Solutions', 'Expertise & Innovation', 'Comprehensive Support'].map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-red-50 to-amber-50 dark:from-red-900 dark:to-amber-900">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">
                  0{index + 1}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {index === 0 && "We work closely with our clients to develop solutions that align with their specific goals and challenges."}
                  {index === 1 && "Our team is skilled in the latest technology trends, providing innovative solutions to give you a competitive edge."}
                  {index === 2 && "From consultation to implementation and ongoing support, we ensure you get the most out of our services."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Get in Touch</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Ready to take your business to the next level with advanced technology solutions? Contact us today to discuss your requirements and learn more about how we can help.
        </p>
        <Button asChild className="mt-4 bg-gradient-to-r from-red-500 to-amber-500 text-white hover:from-red-600 hover:to-amber-600">
          <a href="/Contacts">
            Contact Us
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.section>
    </div>
  )
}

export default TechnologyAndIT


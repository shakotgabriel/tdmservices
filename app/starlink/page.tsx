'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Satellite, WifiIcon, Wrench, Zap, Globe, Signal } from 'lucide-react'
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
    <CardHeader className="bg-black text-white dark:from-slate-800 dark:to-zinc-800">
      <CardTitle className="flex items-center space-x-2">
        <Icon className="w-6 h-6 text-white dark:text-blue-400" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
)

const Starlink = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const servicesData = [
    { title: 'Starlink Kits', description: 'Sales of complete Starlink kits.', icon: Satellite },
    { title: 'Installation Services', description: 'Professional installation services.', icon: Wrench },
    { title: 'Activation Support', description: 'Assistance with account setup.', icon: WifiIcon },
  ];

  const whyChooseUsData = [
    { title: 'High-Speed Connectivity', description: 'Experience lightning-fast internet speeds, even in remote locations.', icon: Zap },
    { title: 'Global Coverage', description: 'Connect from almost anywhere with Starlink\'s expanding satellite network.', icon: Globe },
    { title: 'Expert Support', description: 'Our team of specialists ensures smooth installation and ongoing assistance.', icon: Signal },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Starlink Services</h1>
        <p className="text-lg text-gray-800 dark:text-gray-200">
          As an authorized Starlink retailer, we provide seamless satellite internet solutions. 
          Our services include kit sales, installation, and activation, ensuring connectivity in even the most remote areas.
        </p>
      </motion.div>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-black dark:text-white">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {servicesData.map((item, index) => (
            <ServiceCard key={index} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-black dark:text-white">Why Choose Our Starlink Services?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {whyChooseUsData.map((item, index) => (
            <Card key={index} className="bg-black text-white dark:from-slate-800 dark:to-zinc-800">
              <CardContent className="p-6 text-white">
                <Badge variant="outline" className="mb-2 text-white">
                  0{index + 1}
                </Badge>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <item.icon className="w-5 h-5 mr-2 text-white dark:text-blue-400" />
                  {item.title}
                </h3>
                <p className="text-sm text-white dark:text-gray-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-black dark:text-white">Get Connected</h2>
        <p className="text-gray-800 dark:text-gray-200">
          Ready to experience high-speed internet anywhere? Contact us today to learn more about Starlink 
          and how we can help you get connected.
        </p>
        <Button asChild className="mt-4 bg-black text-white hover:from-blue-600 hover:to-indigo-600">
          <a href="/Contacts">
            Explore Starlink Options
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.section>

      <motion.section {...fadeInUp} className="mt-12">
        <Card className="bg-black dark:from-slate-800 dark:to-zinc-800">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-white dark:text-white">Connect Anywhere, Anytime</h3>
              <p className="text-white dark:text-gray-200">Experience the future of internet connectivity with Starlink.</p>
            </div>
            <Satellite className="w-16 h-16 text-white dark:text-blue-400" />
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}

export default Starlink

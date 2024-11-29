'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Printer, Video, Camera, Shirt, Lightbulb, Zap, Users, Palette } from 'lucide-react'
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
    <CardHeader className="bg-gradient-to-r from-cyan-100 to-indigo-100 dark:from-cyan-900 dark:to-indigo-900">
      <CardTitle className="flex items-center space-x-2">
        <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
)

const GeneralPrinting = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">General Printing & Media Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Our printing and media services provide businesses and individuals with high-quality, customized materials. 
          We ensure that every product reflects your brand identity and delivers a professional impact across various mediums.
        </p>
      </motion.div>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Printing Services"
            description="High-quality printing for a wide range of materials including brochures, flyers, business cards, and large format prints."
            icon={Printer}
          />
          <ServiceCard
            title="Documentary Production"
            description="Professional video documentation services for events, projects, and organizations, capturing your story in stunning detail."
            icon={Video}
          />
          <ServiceCard
            title="Photography Services"
            description="Capturing moments with high-quality photography for personal or commercial use, ensuring your visuals stand out."
            icon={Camera}
          />
          <ServiceCard
            title="Promotional Products"
            description="Custom-branded T-shirts, caps, mugs, banners, and more for marketing and events, helping you leave a lasting impression."
            icon={Shirt}
          />
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Why Choose Our Printing & Media Services?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Quality Assurance', description: 'We use state-of-the-art equipment and techniques to ensure the highest quality in all our products.', icon: Zap },
            { title: 'Creative Expertise', description: 'Our team of skilled professionals brings creativity and innovation to every project.', icon: Lightbulb },
            { title: 'Customized Solutions', description: 'We tailor our services to meet your specific needs and brand requirements.', icon: Users },
          ].map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-cyan-900 dark:to-indigo-900">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">
                  0{index + 1}
                </Badge>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <item.icon className="w-5 h-5 mr-2 text-cyan-600 dark:text-cyan-400" />
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
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Consultancy Services</h2>
        <p className="text-gray-700 dark:text-gray-300">
          In addition to our production services, we offer expert consultancy on media production and promotional strategies. 
          Our team can help you develop effective campaigns and make the most of your marketing materials.
        </p>
        <Button asChild className="mt-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-600 hover:to-indigo-600">
          <a href="/Contacts">
            Book a Consultation
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.section>

      <motion.section {...fadeInUp} className="mt-12">
        <Card className="bg-gradient-to-r from-cyan-100 to-indigo-100 dark:from-cyan-900 dark:to-indigo-900">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Bring Your Vision to Life</h3>
              <p className="text-gray-600 dark:text-gray-300">From print to digital, we have the expertise to make your ideas a reality.</p>
            </div>
            <Palette className="w-16 h-16 text-cyan-600 dark:text-cyan-400" />
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}

export default GeneralPrinting


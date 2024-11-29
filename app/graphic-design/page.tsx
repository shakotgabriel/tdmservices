'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Palette, FileImage, Share2, Brush, Zap, Target, Layers } from 'lucide-react'
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
    <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
      <CardTitle className="flex items-center space-x-2">
        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
)

const GraphicDesign = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Graphic Design Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Elevate your brand with our professional graphic design services. From concept to creation, we ensure that every design aligns with your brand identity and resonates with your audience&apos;s needs.
        </p>
      </motion.div>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Logo Design"
            description="Crafting memorable logos that represent your business values and vision, ensuring your brand stands out in a crowded marketplace."
            icon={Palette}
          />
          <ServiceCard
            title="Promotional Materials"
            description="Creating eye-catching brochures, flyers, and banners for impactful marketing campaigns that capture attention and drive engagement."
            icon={FileImage}
          />
          <ServiceCard
            title="Social Media Graphics"
            description="Designing engaging visuals tailored for various social media platforms to boost your online presence and increase audience interaction."
            icon={Share2}
          />
          <ServiceCard
            title="Custom Branding"
            description="Developing complete branding packages, including color schemes, typography, and design templates for a cohesive brand identity."
            icon={Brush}
          />
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Why Choose Our Graphic Design Services?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Creative Excellence', description: 'Our team of skilled designers brings fresh, innovative ideas to every project.', icon: Zap },
            { title: 'Brand-Focused Approach', description: 'We ensure all designs align perfectly with your brand identity and values.', icon: Target },
            { title: 'Versatile Expertise', description: 'From digital to print, we create stunning visuals across all mediums.', icon: Layers },
          ].map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">
                  0{index + 1}
                </Badge>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <item.icon className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
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
          Ready to transform your brand&apos;s visual identity? Contact us today to discuss your graphic design needs and how we can bring your vision to life.
        </p>
        <Button asChild className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
          <a href="/Contacts">
            Start Your Design Journey
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.section>

      <motion.section {...fadeInUp} className="mt-12">
        <Card className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Unleash Your Brand&apos;s Potential</h3>
              <p className="text-gray-600 dark:text-gray-300">Let our designs tell your story and captivate your audience.</p>
            </div>
            <Palette className="w-16 h-16 text-purple-600 dark:text-purple-400" />
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}

export default GraphicDesign


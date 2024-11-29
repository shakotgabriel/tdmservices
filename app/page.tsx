"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home/page'; 
import ServicesSection from '../components/servicesection';
import Process from '../components/process';
import ContactForm from './Contacts/page';
import Testimonial from '@/components/testimonial';
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -50,
  },
};

const Page = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.3, ease: [0.68, -0.55, 0.27, 1.55] }}
      >
        <div className=''>
          {/* Render Home */}
          
          <Home/>
          <ServicesSection />
          <Process/>
          <Testimonial/>
          <ContactForm />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Page;

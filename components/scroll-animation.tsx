"use client";
import { motion } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5}} // Starting position and opacity
      whileInView={{ opacity: 1, scale : 1 }} // Position and opacity when in view
      transition={{ duration: 1.0}} // Transition duration
      viewport={{ once: false }} // Keep animating when scrolling
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;

"use client";
import { motion } from "framer-motion";

interface FadeInBottomProps {
  children: React.ReactNode;
}

const FadeInBottom: React.FC<FadeInBottomProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start fully transparent and 100px below
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move to its original position
      transition={{ duration: 1.0 }} // Transition duration
      viewport={{ once: false }} // Keep animating when scrolling
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeInBottom;

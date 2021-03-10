import React from "react";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import Faqsection from "../components/faqsection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animate";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServiceSection />
      <Faqsection />
    </motion.div>
  );
};

export default AboutUs;

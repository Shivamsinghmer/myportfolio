'use client';
import React from 'react'
import { motion } from "framer-motion"

import Experience from '../../components/features/experience/Experience';
import Education from '../../components/features/education/Education';
import AboutHero from '../../components/features/about/AboutHero';
import BeyondCode from '../../components/features/about/BeyondCode';


const page = () => {

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-24 max-w-4xl mx-auto"
    >
      <motion.div variants={itemVariants}>
        <AboutHero />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Experience />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Education />
      </motion.div>

      <motion.div variants={itemVariants}>
        <BeyondCode />
      </motion.div>
    </motion.main>
  )
}

export default page
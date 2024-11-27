import React from 'react'
import Header from '../sections/Header'
import Jumbotron from '../sections/Jumbotron'
import Featured from '../sections/Featured'
import TechStack from '../sections/TechStack'
import Footer from '../sections/Footer'
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop'

const Main = () => {

  const pageTransition = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <motion.div
    className="manrope"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
    transition={{ duration: 0.5 }}
  >
    <ScrollToTop />
    <Header />
    <Jumbotron />
    <Featured />
    <TechStack />
    <Footer />
  </motion.div>
  )
}

export default Main
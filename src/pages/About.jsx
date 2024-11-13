import React from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { experience, links } from '../data'
import { motion } from 'framer-motion';

const About = () => {
  const pageTransition = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };
  
  return (
    <motion.div
    className=" manrope"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
    transition={{ duration: 0.5 }}>
      <Header />

      <div className='px-8 sm:px-20 pt-10 pb-32 sm:pb-64'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-4xl sm:text-7xl font-bold'>About Me</h1>
          <div className='flex gap-1'>
            <a href={links.cv} target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out text-[12px] sm:text-base'>
              <p className='font-bold'>CV</p>
              <img className='w-5 sm:w-10' src={`${process.env.PUBLIC_URL}/assets/iconBlack/download.png`} alt="" />
            </a>

            <a href={links.linkedin} target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out text-[12px] sm:text-base'>
              <p className='font-bold'>LinkedIn</p>
              <img className='w-5 sm:w-10' src={`${process.env.PUBLIC_URL}/assets/iconBlack/linkedin.png`} alt="" />
            </a>

            <a href={links.github} target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out text-[12px] sm:text-base'>
              <p className='font-bold'>Github</p>
              <img className='w-5 sm:w-10' src={`${process.env.PUBLIC_URL}/assets/iconBlack/github.png`} alt="" />
            </a>
          </div>
        </div>
        
        <div className='flex flex-col lg:flex-row py-10 gap-5'>
          <div className='w-full'>
            <h1 className='font-semibold text-2xl mb-5'>Hi! I'm Derren Malaka</h1>
            <ul className='list-disc list-outside pl-4 flex flex-col gap-4 sm:text-lg'>
              <li>
                I’m a machine learning engineer and a developer currently focusing on Mobile Programming with Java.
              </li>
              <li>
                I have experience developing full-stack web application, UI/UX design, and machine learning model development.
              </li>
              <li>
                My goal is to continually learn and grow within this field, making a meaningful impact in every organization and community I am part of.
              </li>
            </ul>
          </div>

          <hr className='w-[1px] h-full bg-black' />

          <div className='w-full flex flex-col gap-5'>
            <h1 className='underline font-semibold text-2xl'>Relevant Experience</h1>

            <div className='flex flex-col gap-3 text-mygray'>
              {experience.map((job) => (
                <div>
                  <h2 className='sm:text-lg font-semibold'>{job.title} | {job.company}</h2>
                  <p>{job.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </ motion.div>
  )
}

export default About
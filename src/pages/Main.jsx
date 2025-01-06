import React, { useState } from 'react'
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop'
import { links, projects } from '../data'
import { useNavigate } from 'react-router-dom';

const Main = ({setChoice}) => {

  const navigate = useNavigate();

  const pageTransition = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
    transition={{ duration: 0.5 }}
  >
    <ScrollToTop />
    <div className="manrope bg-white min-h-screen text-black">

      <div className='flex flex-col xl:flex-row justify-end'>
        {/* Left Side */}
        <section className='min-h-screen flex flex-col gap-6 pt-12 px-10 sm:px-20 xl:w-1/3 xl:fixed left-0 xl:border-r-2 border-gray-400 border-opacity-40 top-0 bottom-0'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-4xl'>Derren Malaka</h1>

            <h2 className='font-bold text-xl text-gray-600'>Developer / Data Scientist</h2>

            <div className='flex gap-3'>
              <a href={links.linkedin} target='_blank' rel='noopener noreferrer'> <img src={`${process.env.PUBLIC_URL}/assets/iconColor/linkedin.png`} alt="" className='w-8'/></a>

              <a href={links.github} target='_blank' rel='noopener noreferrer'><img src={`${process.env.PUBLIC_URL}/assets/iconColor/github.png`} alt="" className='w-8'/></a>

              <a href={links.kaggle} target='_blank' rel='noopener noreferrer'><img src={`${process.env.PUBLIC_URL}/assets/iconColor/kaggle.png`} alt="" className='w-8'/></a>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
              <p>
              Derren is a <b className='text-[#3a98d3]'>final-year Computer Science student</b> and a <b className='text-[#3a98d3]'>part-time teacher at Timedoor Academy</b>, passionate about developing applications and analyzing data.

              <br /><br />

              With experience in
              <ol className='list-disc list-inside'>
                <li>full-stack web application development,</li>
                <li>UI/UX design,</li>
                <li>machine learning model development,</li>
                <li>data analysis,</li>
                <li>and data visualization,</li>
              </ol>

              <br />

              Derren excels at creating data-driven solutions to solve real-world problems.

              <br /><br />

              His goal is to continually learn and grow within this field, leveraging data and technology to make a meaningful impact in every organization and community he is part of.
              </p>

              <a href={links.cv} target='_blank' rel='noopener noreferrer' className='underline text-[#5A9FD4] font-semibold text-lg'>Take a look at my Resume</a>

              <div className='text-center bg-gray-700 py-2 rounded-full font-semibold text-lg xl:hidden'>
                Take a look at my Projects
              </div>
            </div>
        </section>

        {/* Right Side */}
        <section className='min-h-screen flex flex-col gap-4 py-12 px-10 sm:px-20 w-full xl:w-2/3 items-start relative overflow-hidden'>
          
          <h1 className='font-bold text-2xl'>My Projects</h1>

          <div className='w-full flex flex-wrap justify-end gap-x-8 gap-y-20 sm:gap-y-10 custom-scrollbar'>
            {
              projects.map((project, idx) => (
                <div className='w-[100%] lg:w-[48%] text-black flex flex-col gap-4'>
                  <div className='w-full rounded-md'>
                    <img src={`${process.env.PUBLIC_URL}/images/${project.thumbnail}`} alt="" className='rounded-md object-cover w-full h-[100%]'/>
                  </div>

                  <div className='flex flex-col gap-8'>
                    <div className='flex flex-col h-[250px] sm:h-[200px] gap-3'>
                      <div className='flex flex-col justify-between'>
                        <h3 className='text-2xl font-bold'>{project.name}</h3>

                        <h4 className='text-[#5A9FD4] font-bold'>{project.label}</h4>
                      </div>

                      <div>
                        {project.desc.length > 200 
                          ? `${project.desc.slice(0, 200)}...` 
                          : project.desc
                        }
                      </div>
                    </div>
                    
                    <div className='px-2 hover:px-0 transition-all ease-in-out'>
                      <button className='w-full bg-[#5A9FD4] bg-opacity-80 hover:bg-opacity-100 py-3 rounded-full font-bold text-lg text-center text-white' onClick={() => {
                        setChoice(idx)
                        navigate('project-detail')
                      }}>View More</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </div>
    
  </motion.div>
  )
}

export default Main
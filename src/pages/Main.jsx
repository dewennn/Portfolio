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
    <div className="manrope bg-[#010101] min-h-screen text-white">
      <div className='flex flex-col xl:flex-row justify-end'>
        {/* Left Side */}
        <section className='min-h-screen flex flex-col gap-6 pt-14 px-20 xl:w-1/3 xl:fixed left-0'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-5xl bg-gradient-to-r from-[#3F54AB] to-[#89D2FF] bg-clip-text text-transparent'>Derren Malaka</h1>

            <h2 className='font-bold text-2xl bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent'>Developer / Data Scientist</h2>

            <div className='flex gap-3'>
              <a href={links.linkedin} target='_blank' rel='noopener noreferrer'> <img src={`${process.env.PUBLIC_URL}/assets/iconColor/linkedin.png`} alt="" className='w-10'/></a>

              <a href={links.github} target='_blank' rel='noopener noreferrer'><img src={`${process.env.PUBLIC_URL}/assets/iconColor/github.png`} alt="" className='w-10'/></a>

              <a href={links.kaggle} target='_blank' rel='noopener noreferrer'><img src={`${process.env.PUBLIC_URL}/assets/iconColor/kaggle.png`} alt="" className='w-10'/></a>
            </div>
          </div>

          <div className='flex flex-col gap-8'>
              <p>
              Derren is a final-year Computer Science student and a part-time teacher at Timedoor Academy, passionate about developing applications and analyzing data.

              <br /><br />

              With experience in full-stack web application development, UI/UX design, machine learning model development, data analysis, and data visualization,

              <br /><br />

              Derren excels at creating data-driven solutions to solve real-world problems.

              <br /><br />

              His goal is to continually learn and grow within this field, leveraging data and technology to make a meaningful impact in every organization and community he is part of.
              </p>

              <a href={links.cv} target='_blank' rel='noopener noreferrer' className='underline text-[#5A9FD4] font-semibold text-2xl'>Take a look at my Resume</a>

              <div className='text-center bg-gray-700 py-2 rounded-full font-semibold text-lg xl:hidden'>
                Take a look at my Projects
              </div>
            </div>
        </section>

        {/* Right Side */}
        <section className='min-h-screen flex flex-col gap-20 pt-14 px-20 w-full xl:w-2/3 items-end'>
          <h1 className='font-bold text-5xl bg-gradient-to-r from-[#89D2FF] to-[#3F54AB] bg-clip-text text-transparent'>My Projects</h1>

          <div className='w-full flex flex-wrap gap-x-8 gap-y-10 custom-scrollbar'>
            {
              projects.map((project, idx) => (
                <div className='h-[500px] w-[410px] text-white flex flex-col gap-4'>
                  <div className='w-full h-[250px] rounded-md'>
                    <img src={`${process.env.PUBLIC_URL}/images/${project.thumbnail}`} alt="" className='rounded-md object-fill w-full h-full'/>
                  </div>

                  <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-3'>
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
                    
                    <button className='w-full bg-[#5A9FD4] bg-opacity-80 py-3 rounded-full font-bold text-lg text-center' onClick={() => {
                      setChoice(idx)
                      navigate('project-detail')
                    }}>View More</button>
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
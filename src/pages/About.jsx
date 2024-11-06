import React from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { experience } from '../data'

const About = () => {
  return (
    <div className='manrope'>
      <Header />

      <div className='px-20 pt-10 pb-64'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-7xl font-bold'>About Me</h1>
          <div className='flex gap-1'>
            <a href='https://drive.google.com/file/d/160GYDsl6MQKkscIRTpaiFcwTlSRYN71D/view?usp=sharing' target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
              <p className='font-bold'>CV</p>
              <img className='w-10' src={`${process.env.PUBLIC_URL}/assets/iconBlack/download.png`} alt="" />
            </a>

            <a href='https://www.linkedin.com/in/derren-malaka/' target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
              <p className='font-bold'>LinkedIn</p>
              <img className='w-10' src={`${process.env.PUBLIC_URL}/assets/iconBlack/linkedin.png`} alt="" />
            </a>

            <a href='https://github.com/dewennn' target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
              <p className='font-bold'>Github</p>
              <img className='w-10' src={`${process.env.PUBLIC_URL}/assets/iconBlack/github.png`} alt="" />
            </a>
          </div>
        </div>
        
        <div className='flex flex-col lg:flex-row py-10 gap-5'>
          <div className='w-full'>
            <h1 className='font-semibold text-2xl'>Hi! I'm Derren Malaka</h1>
            <ul className='list-disc list-outside pl-4 flex flex-col gap-4 text-lg'>
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
                  <h2 className='text-lg font-semibold'>{job.title} | {job.company}</h2>
                  <p>{job.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
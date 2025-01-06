import React from 'react'
import { links, projects } from '../data'
import ScrollToTop from '../components/ScrollToTop'

const ProjectDetail = ({index = 0}) => {
  return (
    <div className='manrope'>
    <ScrollToTop />
    
    <div className='px-10 py-20 lg:p-10'>
      <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center mb-20'>
        <div className='w-full flex flex-col gap-5'>
          <h1 className='text-5xl font-bold'>{projects[index].name}</h1>
          <p className='text-mygray'>{projects[index].desc}</p>

          <div className='flex items-center gap-3'>
            <a href={projects[index].link} target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
              <p className='font-bold'>Github</p>
              <img className='w-5 md:w-10' src={`${process.env.PUBLIC_URL}/assets/iconColor/github.png`} alt="" />
            </a>
            {projects[index].stack.map((item) => (
              <div className='w-5 md:w-10'>
                <img src={`${process.env.PUBLIC_URL}/assets/iconColor/${item}.png`} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className='w-full flex items-center md:items-end md:justify-end md:flex-col gap-1 md:gap-7'>
          <div className='flex flex-col items-end'>
            <h1 className='text-2xl font-bold hidden md:block'>Year</h1>
            <p className='text-xs md:text-xl font-bold text-mygray'>{projects[index].year}</p>
          </div>

          <div className='md:hidden'>|</div>

          <div className='flex flex-col items-end'>
            <h1 className='text-2xl font-bold hidden md:block'>Category</h1>
            <p className='text-xs md:text-xl font-bold text-mygray'>{projects[index].label}</p>
          </div>

          <div className='md:hidden'>|</div>

          <div className='flex flex-col items-end'>
            <h1 className='text-2xl font-bold hidden md:block'>Role</h1>
            <p className='text-xs md:text-xl font-bold text-mygray'>{projects[index].role}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse md:flex-row gap-10 mb-20'>
        <div className='w-full'>
          <h1 className='text-2xl font-bold mb-3 underline'>Development Process</h1>
          <div className='flex flex-col gap-7'>
            {projects[index].developmentProcess.map((text) => (
              <p>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className='w-full'>
          <h1 className='text-2xl font-bold mb-3 underline'>Key Components</h1>
          <ul className='list-disc list-outside px-5'>
            {projects[index].keyComponents.map((feature) => (
              <li>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h1 className='text-2xl font-bold mb-3 underline'>Gallery</h1>
        <div className='flex flex-wrap items-center gap-3'>
          {projects[index].images.map((img) => (
            <div className='w-full md:w-[49%]'>
              <img src={`${process.env.PUBLIC_URL}/images/${img}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  )
}

export default ProjectDetail
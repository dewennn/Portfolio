import React, { useState } from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { projects } from '../data'

const Projects = ({setChoice}) => {

  return (
    <div className='manrope'>
      <Header />

      <div className='flex flex-col gap-5 m-10 p-2 rounded-lg'>
      {
        projects.map((project, idx) => (
          <div className='flex flex-col lg:flex-row w-full gap-2 items-center lg:items-stretch lg:min-h-[250px]'>
            <div className='w-full lg:w-1/3 flex items-center justify-center p-2 bg-[#f3f3f3] rounded-lg'>
              <img className='sm:w-full md:w-2/3 lg:w-full rounded-lg' src={`${process.env.PUBLIC_URL}/images/${project.thumbnail}`} alt="" />
            </div>

            <div className='w-full md:w-2/3 bg-[#f3f3f3] rounded-lg py-2 px-4 flex flex-col'>
              <div className='flex items-center justify-between gap-5 mb-5'>
                <h1 className='sm:text-xl md:text-2xl font-semibold'>{project.name}</h1>

                <div className='flex'>
                  {project.stack.map((stack) => (
                    <div className='w-5 sm:w-10'>
                      <img src={`${process.env.PUBLIC_URL}/assets/iconColor/${stack}.png`} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className='flex h-[70%]'>
                <div className='w-1/2 hidden lg:block'>
                  <h1 className='font-semibold'>Key Components</h1>
                  <ul className='list-disc list-outside px-5'>
                    {project.keyComponents.map((feature) => (
                      <li>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='flex w-full lg:w-1/2 sm:gap-3 flex-col justify-between'>
                    <div className='flex gap-2 items-center text-[10px] sm:text-base'>
                      <h1>{project.year}</h1>
                      <p>|</p>
                      <h1>{project.label}</h1>
                      <p>|</p>
                      <h1>{project.role}</h1>
                    </div>

                    <div className='flex'>
                      <a
                        href='/Portfolio/#/project-detail'

                        onClick={
                          () => {setChoice(idx)}
                        }
                        
                        className={`transition-all ease-in-out flex items-center rounded-lg font-semibold text-xs sm:text-base underline`}>
                          Details
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      </div>

      <Footer />
    </div>
  )
}

export default Projects
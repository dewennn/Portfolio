import React, { useState } from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { projects } from '../data'

const Projects = () => {
  const[highlight, setHighlight] = useState(0)

  return (
    <div className='manrope'>
      <Header />

      <div>
        <h1 className='text-6xl font-bold p-10'>Projects</h1>

        <div className='flex px-10 py-5 gap-2'>
          <div className='w-1/3 flex flex-col gap-3'>
            <div className='h-[250px]'>
              <img className='h-full object-cover' src={`${process.env.PUBLIC_URL}/images/${projects[highlight].thumbnail}`} alt="" />
            </div>
            
            <p>{projects[highlight].desc}</p>
          </div>

          <div className='w-2/3 flex flex-col gap-3 bg-[#EAEAEA] p-2 h-[400px]'>
            {
              projects.map((project, idx) => (
                <div onMouseEnter={() => {setHighlight(idx)}} className={`transition-all ease-in-out flex items-center font-semibold text-xl rounded-lg px-4 py-2 ${idx === highlight ? "bg-myblack text-white" : "bg-white text-myblack"}`}>
                  <div className='w-60 flex scroll-px-3.5'>{project.name}</div>
                  <div>|</div>

                  <div className='flex w-full items-center'>
                    <div className='w-full flex px-3'>{project.label}</div>
                    <div>|</div>

                    <div className='flex gap-3 w-full px-3'>
                      {
                        project.stack.map((i) => (
                          <div className='w-10'>
                            <img src={`${process.env.PUBLIC_URL}/assets/iconColor/${i}.png`} alt="" />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
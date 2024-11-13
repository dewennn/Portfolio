import React from 'react'
import { featuredProject } from '../data'
import FeaturedProject from '../components/FeaturedProject'
import { projects } from '../data'

const Featured = () => {
  return (
    <>
    <div className='flex px-10 py-5 gap-5 flex-col md:flex-row'>
      {
        featuredProject.map((item) => (
          <FeaturedProject name={item.name} stack={item.stack} img={item.img}/>
        ))
      }
    </div>
    
    <a href='/Portfolio/#/projects' className='flex justify-end px-10 pt-10 sm:text-2xl items-center gap-4 text-mygray'>

      <div>
        <img className='w-3 sm:w-5 animate-bounce' src={`${process.env.PUBLIC_URL}/assets/iconGray/diagonal.png`} alt="" />
      </div>
      
      <p className='font-semibold'>See all project {"["}{projects.length}{"]"}</p>
    </a>

    <hr className='mx-5 sm:mx-10' />
    </>
  )
}

export default Featured
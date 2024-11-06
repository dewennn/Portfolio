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
    
    <a href='/#/projects' className='flex justify-end px-10 pb-10 font-bold text-2xl items-center gap-4 text-mygray'>
      <div>
        <img className='w-7 opacity-70' src={`${process.env.PUBLIC_URL}/assets/iconBlack/eyes.png`} alt="" />
      </div>

      <div>
        <img className='w-5' src={`${process.env.PUBLIC_URL}/assets/iconGray/diagonal.png`} alt="" />
      </div>
      
      <p>See all projects {"["}{projects.length}{"]"}</p>
    </a>
    </>
  )
}

export default Featured
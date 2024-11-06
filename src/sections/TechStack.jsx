import React from 'react'
import { techStack } from '../data'

const TechStack = () => {
  return (
    <div className='px-10 py-10 flex flex-col gap-5'>
      <h1 className='font-bold text-2xl'><span className='text-[#2BB850]'>Focusing in</span> & Experienced using</h1>
      
      <div className='flex flex-wrap gap-8 justify-center'>
        {techStack.map((item) => (
          <div className={`${item.focus ? 'border-4 border-[#2BB850]' : 'border-2'} flex flex-col justify-center items-center p-10 gap-5 w-40 sm:w-60 sm:h-60`}>
            <div className='flex justify-center'>
              <img className='w-1/2' src={`${process.env.PUBLIC_URL}assets/iconColor/${item.img}.png`} alt="" />
            </div>

            <h1 className='font-bold text-center'>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
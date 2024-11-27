import React from 'react'
import { links } from '../data'

const Footer = () => {
  return (
    <>
    <div className='px-5 lg:px-10'>
      <hr className='h-[2px] w-full bg-black'/> 
    </div>
    
    <footer className='flex text-mygray px-5 lg:px-10 pt-8 pb-5'>
      <div className='w-full flex flex-col justify-between'>
        <h1 className='text-xl lg:text-2xl font-bold'>Let's Connect!</h1>
        <p className='text-[10px] lg:text-lg font-semibold'>@2024 portfolio by Derren Malaka</p>
      </div>

      <div className='w-full flex flex-col items-end gap-5'>
        <a href={links.instagram} target='_blank' className='flex gap-2 items-center justify-end'>
          <div className='lg:text-lg font-bold'>Instagram</div>
          <div className='w-5 lg:w-8'>
            <img src={`${process.env.PUBLIC_URL}/assets/iconGray/instagram.png`} alt="" />
          </div>
        </a>

        <a href={links.linkedin} target='_blank' className='flex gap-2 items-center justify-end'>
          <div className='lg:text-lg font-bold'>Linkedin</div>
          <div className='w-5 lg:w-8'>
            <img src={`${process.env.PUBLIC_URL}/assets/iconGray/linkedin.png`} alt="" />
          </div>
        </a>

        <a href={links.github} target='_blank' className='flex gap-2 items-center justify-end'>
          <div className='lg:text-lg font-bold'>Github</div>
          <div className='w-5 lg:w-8'>
            <img src={`${process.env.PUBLIC_URL}/assets/iconGray/github.png`} alt="" />
          </div>
        </a>
      </div>
    </footer>
    </>
  )
}

export default Footer
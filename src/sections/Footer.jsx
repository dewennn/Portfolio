import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='px-10'>
      <hr className='h-[2px] w-full bg-black'/> 
    </div>
    
    <footer className='flex text-mygray px-10 lg:px-20 pt-20 pb-5'>
      <div className='w-full flex flex-col justify-between'>
        <h1 className='text-2xl lg:text-4xl font-bold'>Let's Connect!</h1>
        <p className='text-[12px] lg:text-xl font-semibold'>@2024 portfolio by Derren Malaka</p>
      </div>

      <div className='w-full flex flex-col items-end gap-5'>
        <h2 className='lg:text-2xl font-bold'>CONTACTS</h2>
        <a href="https://www.instagram.com/drrn.m/" className='flex gap-5 items-center justify-end'>
          <div className='lg:text-xl font-bold'>Instagram</div>
          <div className='w-5 lg:w-10'>
            <img src={`${process.env.PUBLIC_URL}/assets/iconGray/instagram.png`} alt="" />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/derren-malaka/" className='flex gap-5 items-center justify-end'>
          <div className='lg:text-xl font-bold'>Linkedin</div>
          <div className='w-5 lg:w-10'>
            <img src={`${process.env.PUBLIC_URL}/assets/iconGray/linkedin.png`} alt="" />
          </div>
        </a>

        <a href="https://github.com/dewennn" className='flex gap-5 items-center justify-end'>
          <div className='lg:text-xl font-bold'>Github</div>
          <div className='w-5 lg:w-10'>
            <img src={`${process.env.PUBLIC_URL}/assets/iconGray/github.png`} alt="" />
          </div>
        </a>
      </div>
    </footer>
    </>
  )
}

export default Footer
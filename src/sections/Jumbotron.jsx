import React from 'react'

const Jumbotron = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 px-10 py-40'>
      <div className='flex flex-col items-center gap-2'>
        <div className='font-bold flex gap-3 sm:gap-5 items-center'>
          <h1 className='text-4xl sm:text-7xl'>Hi, I'm Derren</h1>
          <img className='w-8 h-8 sm:w-20 sm:h-20' src={`${process.env.PUBLIC_URL}/assets/iconBlack/hand_wave.png`} alt="" />
        </div>

        <h2 className='cormorant font-semibold text-base sm:text-lg md:text-3xl'>
          Full-stack <i>developer</i> | Machine Learning <i>engineer</i> | Part-time <i>teacher</i>
        </h2>
        
        <a className='flex gap-2 items-center' href="/about-me">
          <div>
            <img className='w-4 h-auto' src={`${process.env.PUBLIC_URL}/assets/iconGray/diagonal.png`} alt="" />
          </div>
          
          <p className='underline text-myGray text-[20px]'>About Me</p>
        </a>
      </div>

      {/* buttons */}
      <div className='flex gap-3 justify-center'>
        <button className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
          <p className='font-bold'>CV</p>
          <img className='w-10' src={`${process.env.PUBLIC_URL}/assets/iconBlack/download.png`} alt="" />
        </button>

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
  )
}

export default Jumbotron
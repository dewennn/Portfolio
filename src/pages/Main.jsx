import React, { useState } from 'react'
import Header from '../sections/Header'
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop'
import { techStack, featuredProject, experience, links, projects } from '../data'
import { button, div } from 'framer-motion/client';

const Main = () => {

  const[featured_idx, set_featured_idx] = useState(0)
  const changeIdx = (num) => {
    if(featured_idx + num >= 0 && featured_idx + num < featuredProject.length){
      set_featured_idx(featured_idx + num)
    }
  }

  const pageTransition = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <motion.div
    className="manrope"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
    transition={{ duration: 0.5 }}
  >
    <ScrollToTop />
    <Header />
    
    <div className='sm:h-screen'>
      <div className='h-full gap-2 flex-col lg:flex-row hidden lg:flex'>
        {/* Left Part */}
        <div className='w-1/4 flex flex-col gap-2 h-full'>

          {/* featured */}
          <div className='px-5 py-10 flex flex-col gap-2 relative bg-mygray rounded-sm h-full'>

            {/* Label */}
            <div className='absolute top-[-20px] left-0 w-full flex justify-center'>
                <div className='font-semibold bg-[#C4D9EF] rounded-full px-4 py-2 flex gap-2 items-center justify-center'>
                  <h1>Featured</h1>
                  <div className='w-6'><img src={process.env.PUBLIC_URL + '/assets/iconColor/star.png'} alt="" /></div>
                </div>
              </div>

            {/* image */}
              <div className='w-full rounded-sm flex items-center'>
                <img src={process.env.PUBLIC_URL + '/images/' + featuredProject[featured_idx].img} alt="" className='rounded-sm w-full h-full object-scale-down'/>
              </div>

            {/* details */}
              <div className='flex justify-between mb-2'>
                <h1 className='font-semibold'>{featuredProject[featured_idx].name}</h1>

                <div className='flex gap-2'>
                  {
                    featuredProject[featured_idx].stack.map((s) => (
                      <div className='w-6'>
                        <img src={process.env.PUBLIC_URL + '/assets/iconColor/' + s + '.png'} alt="dsad" />
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className='h-20 text-sm'>
                {featuredProject[featured_idx].desc}
              </div>
            
            {/* Buttons */}
              <div className='flex justify-between'>
                <button className='w-11'><img src={process.env.PUBLIC_URL + '/assets/iconColor/arrowColor.png'} alt="" onClick={() => {changeIdx(-1)}}/></button>

                <div className='flex gap-3 items-center'>
                  {featuredProject.map((s, idx) => (
                    <button className={`w-2 h-2 rounded-full ${idx == featured_idx ? 'bg-yellow-300 border border-black':'bg-gray-500'}`} onClick={()=>{set_featured_idx(idx)}}></button>
                  ))}
                </div>

                <button className='w-11 rotate-180'><img src={process.env.PUBLIC_URL + '/assets/iconColor/arrowColor.png'} alt="" onClick={() => {changeIdx(1)}}/></button>
              </div>
            
          </div>

          {/* Experience */}
          <div className='px-5 py-12 flex flex-col gap-2 relative bg-mygray rounded-sm'>

            {/* Label */}
              <div className='absolute top-[-20px] left-0 w-full z-50 flex justify-center'>
                <div className='font-semibold bg-[#C4D9EF] rounded-full px-4 py-2 flex gap-2 items-center justify-center'>
                  <h1>Experience</h1>
                </div>
              </div>

            {/* Content */}
              <div className='flex flex-col gap-8'>
                {
                  experience.map((e) => (
                    <div className='flex flex-col'>
                      <h1 className='font-semibold'>{e.title}</h1>

                      <div className='text-sm text-gray-500'>
                        <p>{e.company}</p>
                        <p>{e.duration}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

          </div>

        </div>
        
        {/* Middle Part */}
        <div className='w-1/2 bg-mygray rounded-sm p-10 flex flex-col gap-10'>
          
          {/* Name & Title */}
            <div className='flex flex-col items-center gap-5 py-20'>
              <div className='font-bold flex gap-3 sm:gap-5 items-center'>
                <h1 className='text-4xl sm:text-4xl'>Hi, I'm Derren</h1>
                <img className='w-8 h-8 sm:w-10 sm:h-10 animate-wave' src={`${process.env.PUBLIC_URL}/assets/iconBlack/hand_wave.png`} alt="" />
              </div>

              <h2 className='cormorant font-semibold text-base sm:text-lg md:text-2xl'>
                Full-stack <i>developer</i> | Machine Learning <i>engineer</i> | Part-time <i>teacher</i>
              </h2>
              
              <a className='flex gap-2 items-center  px-4 py-2 border-4 rounded-full border-[#C4D9EF]' href="/Portfolio/#/about-me">
                <div>
                  <img className='w-4 h-auto' src={`${process.env.PUBLIC_URL}/assets/iconGray/diagonal.png`} alt="" />
                </div>
                
                <p className='font-semibold text-myGray'>About Me</p>
              </a>
            </div>
          
          {/* Divider */}
            <div className='w-full h-8 bg-white'></div>
          
          {/* Links */}
            <div className='flex gap-3 justify-center text-[12px] sm:text-base py-10 items-center h-full'>
              <a href={links.cv} target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
                <p className='font-bold'>CV</p>
                <img className='w-5 sm:w-7' src={`${process.env.PUBLIC_URL}/assets/iconBlack/download.png`} alt="" />
              </a>

              <a href={links.linkedin} target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
                <p className='font-bold'>LinkedIn</p>
                <img className='w-5 sm:w-7' src={`${process.env.PUBLIC_URL}/assets/iconBlack/linkedin.png`} alt="" />
              </a>

              <a href={links.github} target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
                <p className='font-bold'>Github</p>
                <img className='w-5 sm:w-7' src={`${process.env.PUBLIC_URL}/assets/iconBlack/github.png`} alt="" />
              </a>
            </div>
        </div>
        
        {/* Right Part */}
        <div className='w-1/4 rounded-sm flex flex-col gap-3'>

            {/* Tech Stack */}
            <div className='px-5 py-20 flex flex-col gap-2 relative bg-mygray rounded-sm'>

              {/* Label */}
                <div className='absolute top-[-20px] left-0 w-full z-0 flex justify-center'>
                  <div className='font-semibold bg-[#C4D9EF] rounded-full px-4 py-2 flex gap-2 items-center justify-center'>
                    <div className='w-6'><img src={process.env.PUBLIC_URL + '/assets/iconColor/tech.png'} alt="" /></div>
                    <h1>Tech Stack</h1>
                  </div>
                </div>

              {/* Content */}
                <div className='grid grid-cols-4 gap-y-10'>
                  {techStack.map((item) => (
                    <div className={`flex flex-col justify-center items-center gap-5 w-full`}>
                      <div className='flex justify-center'>
                        <img className='w-1/2' src={`${process.env.PUBLIC_URL}/assets/iconColor/${item.img}.png`} alt="" />
                      </div>
                    </div>
                  ))}
                </div>

            </div>

            <a href='/Portfolio/#/projects' className='flex flex-col items-center justify-center w-full h-full text-2xl font-semibold bg-mygray rounded-sm border-4 border-[#C4D9EF] hover:bg-[#C4D9EF] transition-all ease-linear'>
              <div>Take a look at my</div>
              <div className='flex gap-3 items-center'>
                <div>Projects {`[${projects.length}]`}</div>
                <div>
                  <img className='w-4 h-auto' src={`${process.env.PUBLIC_URL}/assets/iconGray/diagonal.png`} alt="" />
                </div>
              </div>
            </a>
        </div>
      </div>

      <div className='h-full gap-2 flex-col lg:flex-row flex lg:hidden'>
        
        {/* Middle Part */}
        <div className='w-full bg-mygray rounded-sm px-10 py-20 flex flex-col gap-10'>
          
          {/* Name & Title */}
            <div className='flex flex-col items-center gap-2 py-5'>
              <div className='font-bold flex gap-3 sm:gap-5 items-center'>
                <h1 className='text-4xl sm:text-4xl'>Hi, I'm Derren</h1>
                <img className='w-8 h-8 sm:w-10 sm:h-10 animate-wave' src={`${process.env.PUBLIC_URL}/assets/iconBlack/hand_wave.png`} alt="" />
              </div>

              <h2 className='cormorant font-semibold text-sm sm:text-lg md:text-2xl'>
                Full-stack <i>developer</i> | Machine Learning <i>engineer</i> | Part-time <i>teacher</i>
              </h2>
              
              <a className='flex gap-2 items-center  px-4 py-2 border-4 rounded-full border-[#C4D9EF]' href="/Portfolio/#/about-me">
                <div>
                  <img className='w-4 h-auto' src={`${process.env.PUBLIC_URL}/assets/iconGray/diagonal.png`} alt="" />
                </div>
                
                <p className='font-semibold text-myGray'>About Me</p>
              </a>
            </div>
          
          {/* Divider */}
            <div className='w-full h-2 bg-white'></div>
          
          {/* Links */}
            <div className='flex gap-3 justify-center text-[12px] sm:text-base py-10'>
              <a href={links.cv} target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
                <p className='font-bold'>CV</p>
                <img className='w-5 sm:w-7' src={`${process.env.PUBLIC_URL}/assets/iconBlack/download.png`} alt="" />
              </a>

              <a href={links.linkedin} target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
                <p className='font-bold'>LinkedIn</p>
                <img className='w-5 sm:w-7' src={`${process.env.PUBLIC_URL}/assets/iconBlack/linkedin.png`} alt="" />
              </a>

              <a href={links.github} target='_blank' className='flex items-center justify-center border-2 border-black px-5 py-2 gap-3 hover:filter hover:invert bg-white transition-all ease-in-out'>
                <p className='font-bold'>Github</p>
                <img className='w-5 sm:w-7' src={`${process.env.PUBLIC_URL}/assets/iconBlack/github.png`} alt="" />
              </a>
            </div>
        </div>

        <div className='flex gap-2 flex-col sm:flex-row h-full'>
          {/* Left Part */}
            <div className='w-full sm:w-1/2 flex flex-col gap-2 h-full'>
              {/* featured */}
              <div className='px-5 py-10 flex flex-col gap-2 relative bg-mygray rounded-sm'>

                {/* Label */}
                <div className='absolute top-[-20px] left-0 w-full flex justify-center'>
                    <div className='font-semibold bg-[#C4D9EF] rounded-full px-4 py-2 flex gap-2 items-center justify-center'>
                      <h1>Featured</h1>
                      <div className='w-6'><img src={process.env.PUBLIC_URL + '/assets/iconColor/star.png'} alt="" /></div>
                    </div>
                  </div>

                {/* image */}
                  <div className='w-full rounded-sm flex items-center'>
                    <img src={process.env.PUBLIC_URL + '/images/' + featuredProject[featured_idx].img} alt="" className='rounded-sm w-full h-full object-scale-down'/>
                  </div>

                {/* details */}
                  <div className='flex justify-between mb-2'>
                    <h1 className='font-semibold'>{featuredProject[featured_idx].name}</h1>

                    <div className='flex gap-2'>
                      {
                        featuredProject[featured_idx].stack.map((s) => (
                          <div className='w-6'>
                            <img src={process.env.PUBLIC_URL + '/assets/iconColor/' + s + '.png'} alt="dsad" />
                          </div>
                        ))
                      }
                    </div>
                  </div>

                  <div className='h-20 text-sm'>
                    {featuredProject[featured_idx].desc}
                  </div>
                
                {/* Buttons */}
                  <div className='flex justify-between'>
                    <button className='w-11'><img src={process.env.PUBLIC_URL + '/assets/iconColor/arrowColor.png'} alt="" onClick={() => {changeIdx(-1)}}/></button>

                    <div className='flex gap-3 items-center'>
                      {featuredProject.map((s, idx) => (
                        <button className={`w-2 h-2 rounded-full ${idx == featured_idx ? 'bg-yellow-300 border border-black':'bg-gray-500'}`} onClick={()=>{set_featured_idx(idx)}}></button>
                      ))}
                    </div>

                    <button className='w-11 rotate-180'><img src={process.env.PUBLIC_URL + '/assets/iconColor/arrowColor.png'} alt="" onClick={() => {changeIdx(1)}}/></button>
                  </div>
                
              </div>

              {/* Experience */}
              <div className='px-5 py-10 flex flex-col gap-2 relative bg-mygray rounded-sm'>

                {/* Label */}
                  <div className='absolute top-[-20px] left-0 w-full z-0 flex justify-center'>
                    <div className='font-semibold bg-[#C4D9EF] rounded-full px-4 py-2 flex gap-2 items-center justify-center'>
                      <h1>Experience</h1>
                    </div>
                  </div>

                {/* Content */}
                  <div className='flex flex-col gap-8'>
                    {
                      experience.map((e) => (
                        <div className='flex flex-col'>
                          <h1 className='font-semibold'>{e.title}</h1>

                          <div className='text-sm text-gray-500'>
                            <p>{e.company}</p>
                            <p>{e.duration}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>

              </div>

            </div>

           {/* Right Part */}
            <div className='w-full sm:w-1/2 rounded-sm flex flex-col gap-3 h-full'>

              {/* Tech Stack */}
              <div className='px-5 py-20 flex flex-col gap-2 relative bg-mygray rounded-sm'>

                {/* Label */}
                  <div className='absolute top-[-20px] left-0 w-full z-0 flex justify-center'>
                    <div className='font-semibold bg-[#C4D9EF] rounded-full px-4 py-2 flex gap-2 items-center justify-center'>
                      <div className='w-6'><img src={process.env.PUBLIC_URL + '/assets/iconColor/tech.png'} alt="" /></div>
                      <h1>Tech Stack</h1>
                    </div>
                  </div>

                {/* Content */}
                  <div className='grid grid-cols-4 gap-y-10'>
                    {techStack.map((item) => (
                      <div className={`flex flex-col justify-center items-center gap-5 w-full`}>
                        <div className='flex justify-center'>
                          <img className='w-1/3 sm:w-1/2' src={`${process.env.PUBLIC_URL}/assets/iconColor/${item.img}.png`} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>

              </div>

              <a href='/Portfolio/#/projects' className='flex flex-col items-center justify-center w-full h-64 sm:h-full text-2xl font-semibold bg-mygray rounded-sm border-4 border-[#C4D9EF] hover:bg-[#C4D9EF] transition-all ease-linear'>
                <div>Take a look at my</div>
                <div className='flex gap-3 items-center'>
                  <div>Projects {`[${projects.length}]`}</div>
                  <div>
                    <img className='w-4 h-auto' src={`${process.env.PUBLIC_URL}/assets/iconGray/diagonal.png`} alt="" />
                  </div>
                </div>
              </a>
            </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Main
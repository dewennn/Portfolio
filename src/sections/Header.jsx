import React, { useState } from 'react'

const Header = () => {

  const[sidebar, setSidebar] = useState("sm:right-[-25%] right-[-100%]")
  const[closer, setCloser] = useState("opacity-0 z-[-1]")

  function hideSidebar(){
    setSidebar("sm:right-[-25%] right-[-100%]")
    setCloser("opacity-0 z-[-1]")
  }
  function showSidebar(){
    setSidebar("right-0")
    setCloser("opacity-50 z-[100]")
  }

  return (
    <>
    {/* Header */}
    <header className='fixed top-0 left-0 right-0 flex justify-between px-10 py-4 z-10 bg-white'>
      <a className='w-7' href='/Portfolio/'>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
      </a>

      <div className='font-semibold hidden gap-20 items-center md:flex'>
        <a href="/Portfolio">Home</a>
        <a href="/Portfolio/#/projects">Projects</a>
        <a href="/Portfolio/#/about-me">About Me</a>
      </div>

      <button className='w-7' onClick={() => {showSidebar()}}>
        <img src={`${process.env.PUBLIC_URL}/assets/iconBlack/burgerMenu.png`} alt="" />
      </button>
    </header>

    {/* <div className='w-full h-20'></div> */}

    {/* Sidebar */}
    <div className={'fixed top-0 bottom-0 sm:w-[25%] w-[100%] bg-[#141414] px-10 py-5 transition-all ease-in-out z-[999]' + " " + sidebar}>
      <div className='flex justify-end'>
        <button onClick={() => {hideSidebar()}} className='w-7 h-7 flex justify-center items-center'>
          <img src={`${process.env.PUBLIC_URL}/assets/iconWhite/x.png`} alt="" className='w-6'/>
        </button>
      </div>

      <div className='text-white flex flex-col font-semibold text-3xl gap-5 mt-10'>
        <a href="/Portfolio">Home</a>
        <a href="/Portfolio/#/projects">Projects</a>
        <a href="/Portfolio/#/about-me">About Me</a>
      </div>

      <div>
        
      </div>
    </div>

    {/* closer */}
    <div className={'fixed top-0 left-0 right-0 bottom-0 bg-gray-400 transition-all ease-in-out' + ' ' + closer}></div>

    <div className='w-full h-4 lg:h-20'></div>
    </>
  )
}

export default Header
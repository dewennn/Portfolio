import React from 'react'
import Header from '../sections/Header'
import Jumbotron from '../sections/Jumbotron'
import Featured from '../sections/Featured'
import TechStack from '../sections/TechStack'
import Footer from '../sections/Footer'

const Main = () => {
  return (
    <div className='manrope'>
      <Header />
      <Jumbotron />
      <Featured />
      <TechStack />
      <Footer />
    </div>
  )
}

export default Main
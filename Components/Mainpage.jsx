import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Works from './Works'
import Contact from './Contact'
import Navbar from './Navbar'

const Mainpage = () => {
  return (
    <div>
        <Home/><hr className='hr'/>
        <About/><hr className='hr'/>
        <Skills/><hr className='hr'/>
        <Works/><hr className='hr'/>
        <Contact/><hr className='hr'/>
    </div>
  )
}

export default Mainpage
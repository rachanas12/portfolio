import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Works from './Components/Works'
import Contact from './Components/Contact'
import Mainpage from './Components/Mainpage'
import Navbar from './Components/Navbar'
import Networkengineer from './Components/Networkengineer'
import Systemadministrator from './Components/Systemadministrator'
import Teamleader from './Components/Teamleader'
import Hardwareexpert from './Components/Hardwareexpert'
import Motherboardengineer from './Components/Motherboardengineer'


const Routerfile = () => {
  return (
    <div>
        <Router>
        <Navbar/>
    <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/network' element={<Networkengineer/>}/>
        <Route path='/systemadmin' element={<Systemadministrator/>}/>
        <Route path='/teamleader' element={<Teamleader/>}/>
        <Route path='/hardware' element={<Hardwareexpert/>}/>
        <Route path='/motherboard' element={<Motherboardengineer/>}/>
    </Routes>
  </Router>
  
  </div>
  )
}

export default Routerfile
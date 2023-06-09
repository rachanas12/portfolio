import React from 'react'
import logo from "../Assets/logo.jpg"
import {  useNavigate } from 'react-router-dom'


const Navbar = () => {
  let navigate=useNavigate()
  
  return (
    <nav className="navbar" >
      <div className='logo'>
        <img src={logo} alt="" style={{height:60,width:150}}/>
      </div>
      <div className='Menu'>
        <div className='menubar' onClick={(e)=>{e.preventDefault()
                                            navigate('/')}}>Home</div>
        <div className='menubar' onClick={(e)=>{e.preventDefault()
                                            navigate('/about')}}>About</div>
        <div className='menubar' onClick={(e)=>{e.preventDefault()
                                            navigate('/skills')}}>Skills</div>
        <div className='menubar' onClick={(e)=>{e.preventDefault()
                                            navigate('/works')}}>Works</div>
        <div className='menubar' onClick={(e)=>{e.preventDefault()
                                            navigate('/contact')}}>Contact</div>
      </div>
    </nav>
  )
}

export default Navbar
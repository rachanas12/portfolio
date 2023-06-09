import React, { useState } from 'react'
import {AiOutlineMail} from "react-icons/ai"
import {BsTelephone} from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"
import {BsInstagram} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"
import axiosInstance from '../helpers/axiosInstance'

const Contact = () => {
let [name,setName]=useState()
let [email,setEmail]=useState()
let [message,setMessage]=useState()


let handleSubmit=async(e)=>{
e.preventDefault()
let payload={name,email,message}
let data=await axiosInstance.post("/posts",payload)
window.location.assign('/')
}

  return (
    <div className='page'>
      <nav ><h1 id='c-h1'>contact</h1>
      <div id='contactdiv'>
        
        <div className='c-formdiv'>
        <p> Send me a message</p><br />
          <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
          <input type="email" name="Email" id="" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
          <textarea name="" id="" cols="10" rows="5" placeholder='Message...' onChange={(e)=>{setMessage(e.target.value)}}></textarea>
          <br /><button onClick={handleSubmit}>Let's Collaborate</button>
        </div>
        <div id='ctdiv'>
        
        <p>If you have any questions or need help, feel free to contact me at</p><br />
        <a href="mailto:dyvikn@gmail.com" target="_blank" rel="noreferrer" ><AiOutlineMail/> dyvikn@gmail.com</a>
        <br /><a href="callto:+91-8884534784" target="_blank" ><BsTelephone/> +91-8884534784 </a><br /><br />
        <div>
        <a href="https://www.facebook.com/dyvik.bangalore?mibextid=ZbWKwL" target='_blank'><FiFacebook/></a> 
      <a href="https://instagram.com/nemarajaiah?igshid=NGExMmI2YTkyZg" target='_blank'><BsInstagram/></a> 
      <a href="https://www.linkedin.com/in/dyvik-n-966555256/" target='_blank'><FaLinkedinIn/></a> 
      </div>
        </div>
      </div></nav>
    </div>
  )
}

export default Contact
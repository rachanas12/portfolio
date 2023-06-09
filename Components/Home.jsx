import React from 'react'
import profile from "../Assets/4.JPG"
import mail from "../Assets/mail.svg"
import facebook from "../Assets/facebook.svg"
import instagram from "../Assets/instagram.svg"
import linkedin from "../Assets/linkedin.svg"
import contact from "../Assets/contact.svg"
import { useNavigate } from 'react-router-dom'



const Home = () => {
  let navigate=useNavigate()
  let handleMail=()=>{
    navigate('/contact')
  }
  return (
    <nav id='home'>
      <div style={{height:400,width:100}} id='icon'>
       <a href="mailto:dyvikn@gmail.com" target="_blank" rel="noreferrer"><img src={mail} alt=""style={{height:50,width:60}}  /></a> 
      <a href="https://www.facebook.com/dyvik.bangalore?mibextid=ZbWKwL" target='_blank'><img src={facebook} alt="" style={{height:60,width:60}} /></a> 
      <a href="https://instagram.com/nemarajaiah?igshid=NGExMmI2YTkyZg" target='_blank'><img src={instagram} alt="" style={{height:60,width:60}} /></a> 
      <a href="https://www.linkedin.com/in/dyvik-n-966555256/" target='_blank'><img src={linkedin} alt="" style={{height:60,width:60}} /></a> 
      <a href=""><img src={contact} alt="" style={{height:60,width:60}} onClick={handleMail}/></a> 
        </div>

      <div id='homecontent'>
          <div id='hcontent'>
            <h1 style={{color:'rgb(59, 241, 22)'}}> I'm a Hardware Expert (forensics)</h1><br />
            <h3 style={{color:"rgb(8, 175, 297)"}}>@Karnataka State police (ISD)</h3><br />
            <p>An Engineer looking forward to achieve excellence, to be resourceful, optimistic and
                to pursue a challenging career. I would also like to assure you
                of my sincere service and contribution to the further growth.</p>
          </div><br />
          <div id='profile'><img src={profile} alt=""  /></div>
      </div>
  
  </nav>
  )
}

export default Home
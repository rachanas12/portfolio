import React from 'react'
import { useNavigate } from 'react-router-dom'

const Works = () => {
let navigate=useNavigate()
  return (
    <div className='page'>
      <div className='workpage' >
    <h1> Works</h1>
    <h3>Check out some of my most recent work</h3>

    <div className='workdivs'>

      <div className="wdiv">
      <div  className='w11'>
        <h2>@ Karnataka State police(ISD) </h2><br />
        <button onClick={(e)=>{
          e.preventDefault()
          navigate("/hardware")
        }}>More</button>
      </div>
      <div className='w1'  >
        <h2>Hardware Expert (forensics)</h2>
      </div>
      </div>

      <div className="wdiv">
      <div  className='w11'>
        <h2>@ Likitha Infrastructure Pvt. Ltd. (ISP) </h2><br />
        <button onClick={(e)=>{
          e.preventDefault()
          navigate("/systemadmin")
        }}>More</button>
      </div>
      <div className='w1'  >
        <h2>System Administrator</h2>
      </div>
      </div>

      <div className="wdiv">
      <div  className='w11'>
        <h2>@ LANCE FIBERNET Pvt. Ltd. (ISP)</h2><br />
        <button onClick={(e)=>{
          e.preventDefault()
          navigate("/teamleader")
        }}>More</button>
      </div>
      <div className='w1'  >
        <h2>Team Leader</h2>
      </div>
      </div>

      <div className="wdiv">
      <div  className='w11'>
        <h2>@ Leading Digi Systems Pvt.Ltd </h2><br />
        <button onClick={(e)=>{
          e.preventDefault()
          navigate("/motherboard")
        }}>More</button>
      </div>
      <div className='w1'  >
        <h2>Mother Board Engineer and Laptop Engineer</h2>
      </div>
      </div>

      <div className="wdiv">
      <div  className='w11'>
        <h2>@ ACT Pvt. Ltd. (ISP) </h2><br />
        <button onClick={(e)=>{
          e.preventDefault()
          navigate("/network")
        }}>More</button>
      </div>
      <div className='w1'  >
        <h2>Network Engineer</h2>
      </div>
      </div>

    </div>
      </div>
    </div>
  )
}

export default Works

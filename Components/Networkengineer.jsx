import React from 'react'
import { useNavigate } from 'react-router-dom'

const Networkengineer = () => {
    let navigate=useNavigate()
  return (
    <div className='page'>
        <nav className="workdetailbox">
            <div className="workdetailbox__title">
                <h1>Network Engineer</h1>
                <button onClick={(e)=>{
                    e.preventDefault()
                    navigate("/works")
                }}>X</button>
            </div>
            <div className='workdetailbox_content'>
                <h2>@ ACT Pvt. Ltd. (ISP) (July-2012 to July-2013)</h2>
                <h3>Roles & Responsibilities</h3>
                <ul>
                    <li>Work based on FTTH technology.</li>
                    <li>Installation & maintenance of Optical fibers to the network devices. </li>
                    <li>Splicing the Optical fibers. Detection of Fiber drop using the OTDR.</li>
                    <li>Maintenance & troubleshooting of network and network devices.</li>
                    <li>Installing & configuration of modem, routers, 3com and other network devices. </li>
                    <li>Providing technical support at the customer end. </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Networkengineer
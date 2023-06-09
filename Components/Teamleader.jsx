import React from 'react'
import { useNavigate } from 'react-router-dom'

const Teamleader = () => {
    let navigate=useNavigate()
  return (
    <div className='page'>
        <nav className="workdetailbox">
            <div className="workdetailbox__title">
                <h1>Team Leader</h1>
                <button onClick={(e)=>{
                    e.preventDefault()
                    navigate("/works")
                }}>X</button>
            </div>
            <div className='workdetailbox_content'>
                <h2>@ LANCE FIBERNET Pvt. Ltd. (ISP) (July-2015 to Nov-2016)</h2>
                <h3>Roles & Responsibilities</h3>
                <ul>
                    <li>Sales of ISP Connections & Verifying feasibility of connection with Documents.</li>
                    <li>Installing the connection with pulling optic fiber With Splicing & Fixing Rack.</li>
                    <li>Making Electrical supply from the customer end to the device Rack.</li>
                    <li>Installing GEPON ONU Optical devices and Switches with OLT technology.</li>
                    <li>Activating the Connection to the router.</li>
                    <li>Providing technical support with Fault Repair after the connection.</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Teamleader
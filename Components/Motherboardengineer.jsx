import React from 'react'
import { useNavigate } from 'react-router-dom'

const Motherboardengineer = () => {
    let navigate=useNavigate()
  return (
    <div className='page'>
        <nav className="workdetailbox">
            <div className="workdetailbox__title">
                <h1>Mother Board Engineer and Laptop Engineer</h1>
                <button onClick={(e)=>{
                    e.preventDefault()
                    navigate("/works")
                }}>X</button>
            </div>
            <div className='workdetailbox_content'>
                <h2>@ Leading Digi Systems Pvt.Ltd ( Nov-2013 To July-2015) </h2>
                <h3>Roles & Responsibilities</h3>
                <ul>
                    <li>Work based on Desktop & Laptop Chip level Service. </li>
                    <li>Installation of Various Operating Systems like Mac, Windows, ubanto, Fedora. Centos.</li>
                    <li>Trouble Shooting of any OS Problems with MS Office, antivirus, utilities. </li>
                    <li>A good handle of Soldering Iron, Rework Station Blower used to replace IC’s.</li>
                    <li>Networking with Printer Installation, Maintenance & Troubleshooting. </li>
                    <li>Providing any technical support at the customer end with satisfaction. </li>
                    <li>Firmware and BIOS update of any computerized device.</li>
                    <li>Networking with interior wiring of Cables with Electrical Sockets.</li>
                    <li>CCTV Camera installation with both Digital or Network IP Camera with Troubleshooting and Maintenance.</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Motherboardengineer
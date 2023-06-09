import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hardwareexpert = () => {
    let navigate=useNavigate()
  return (
    <div className='page'>
        <nav className="workdetailbox">
            <div className="workdetailbox__title">
                <h1>Hardware Expert (forensics)</h1>
                <button onClick={(e)=>{
                    e.preventDefault()
                    navigate("/works")
                }}>X</button>
            </div>
            <div className='workdetailbox_content'>
                <h2>@ Karnataka State police (ISD) (Jan-2019 to Till Date) </h2>
                <h3>Roles & Responsibilities</h3>
                <ul>
                    <li>Recovery of data from Hard Drives, etc., even on partially working systems without 
                        changing the hash value.</li>
                    <li>Data recovery from Mobile handsets, cameras, Pen Drives, tablets, Flash memory etc.</li>
                    <li>Mobile Forensics to identify cellular phone parts, capabilities.</li>
                    <li>Restoring of deleted data in Software.</li>
                    <li>Decryption of encrypted software.</li>
                    <li>Proficient in working with electrical hardware test equipments (Multimeter, PCB 
                        testing card, Analog meter etc.,)</li>
                    <li>Familiarity with data recovery tools like Stellar, Wonder share etc.</li>
                    <li>Computer assembling and maintenance.</li>
                    <li>Trouble shooting hardware and software problems.</li>
                    <li>Installing and configuring the peripherals, components and drivers.</li>
                    <li>Wide Knowledge of motherboard and circuit designs of monitors.</li>
                    <li>Solid understanding of all phases of SMPS and UPS.</li>
                    <li>Advanced knowledge of computers, laptops, operating system and computer 
                        hardware. Ability to deal with issues like No boot situations, Spyware removal, 
                        Malware removal and Trojan removal.</li>
                    <li>Advanced working knowledge of the networking and internet. Ability to deal with 
                        issue pertaining to Firewall, Routers, Troubleshooting internet related problems.</li>
                    <li>Responsibilities of System Administrator in his/ her absence.</li>
                    <li>Any other duty as entrusted by the Dept.</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Hardwareexpert
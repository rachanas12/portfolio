import React from 'react'
import { useNavigate } from 'react-router-dom'

const Systemadministrator = () => {
    let navigate=useNavigate()
  return (
    <div className='page'>
        <nav className="workdetailbox">
            <div className="workdetailbox__title">
                <h1>System Administrator</h1>
                <button onClick={(e)=>{
                    e.preventDefault()
                    navigate("/works")
                }}>X</button>
            </div>
            <div className='workdetailbox_content'>
                <h2>@ Likitha Infrastructure Pvt. Ltd. (ISP) (Dec-2016 to Dec-2018) </h2>
                <h3>Roles & Responsibilities</h3>
                <ul>
                    <li>Maintain Systems efficiency.</li>
                    <li>Install secure, maintain, troubleshoot, administer upgrade Microsoft Windows Server/ 
                        Linux operating systems with all required server roles on assigned servers including 
                        patch management systems and print server management.</li>
                    <li>Install, secure, maintain, troubleshoot, administer, manage users and upgrade 
                        enterprise systems such as Active Directory, MS SQL, SQL, Anti-virus, Log Servers 
                        and IIS 6.0/7.0 including SSL certificate management.</li>
                    <li>Develop implement and maintain backup and recovery procedures and processes.</li>
                    <li>Maintain Software Licenses.</li>
                    <li>Installing software and application to user requirements and troubleshoot problems 
                        reported by users.</li>
                    <li>Setup & implement security policies for users.</li>
                    <li>Configure and support security tools such as anti-virus software, etc., run antivirus 
                        Scan and Adware scan manually if needed.</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Systemadministrator
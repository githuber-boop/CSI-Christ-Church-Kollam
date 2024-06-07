import React, { useState } from 'react'
import logo from '../assets/csi-christ-logo.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import '../styles/MemberDashboard.css';


const MemberDashboard = () => {

    const [details, setDetails] = useState([])

    useEffect(() => {
        
        const fetchJobs = async () => {
            const res = await fetch("http://localhost:5000/details")
            const data = await res.json()
            setDetails(data)
        }   

        fetchJobs()
    }, [])

  return (
    <div className="grid dashboard">
        <aside className='sidebar'>
            <img src={logo} alt="" />
            <div className="links">
                <a href="#" className='sidebar-link'>MEMBER DETAILS</a>
            </div>
            <div className="logOut">
                <a href="#" className='sidebar-link'>Log Out</a>
            </div>
        </aside>
        <main className='content'>
        {details.map((memberDetail, index) => (
          <div key={index} className="member-details">
            <h3>NAME: {memberDetail.name}</h3>
            <h3>ADDRESS: {memberDetail.address}</h3>
            <h3>NUMBER: {memberDetail.number}</h3>
            <h3>DOB{memberDetail.dob}</h3>
            <h3>BAPTISM DATE: {memberDetail.baptism_date}</h3>
            <h3>CONFIRMATION: {memberDetail.confirmation}</h3>
          </div>
        ))}
        </main>
    </div>
  )
}

export default MemberDashboard
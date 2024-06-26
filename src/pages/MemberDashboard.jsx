import React, { useState } from 'react'
import logo from '../assets/csi-christ-logo.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import '../styles/MemberDashboard.css';
import { FaSearch } from 'react-icons/fa';


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
            <div className="flex-center">
              <img src={logo} alt="" />
              <div className="links">
                  <a href="#" className='sidebar-link'>MEMBER DETAILS</a>
              </div>
            </div>
            <div className="bottom-links">
                <Link to="/" className='log-out'>Home</Link>
                <Link to="" className='log-out'>Log Out</Link>
            </div>
        </aside>
        <main className='content'>

        <div className="sort-filter">
          <div className="input">
            <FaSearch/>
            <input type="text" placeholder='SEARCH'/>
          </div>
          <button type='search'>Search</button>
        </div>

        <div className="grid-col-2">
          {details.map((memberDetail, index) => (
            
            <div key={index} className="member-details">
              <h3><span>NAME:</span> {memberDetail.name}</h3>
              <h3><span>ADDRESS: </span>{memberDetail.address}</h3>
              <h3><span>NUMBER: </span>{memberDetail.number}</h3>
              <h3><span>DOB:</span>{memberDetail.dob}</h3>
              <h3><span>BAPTISM DATE:</span> {memberDetail.baptism}</h3>
              <h3><span>CONFIRMATION: </span>{memberDetail.confirmation}</h3>
            </div>
          ))}
        </div>
          
        </main>
    </div>
  )
}

export default React.memo(MemberDashboard)
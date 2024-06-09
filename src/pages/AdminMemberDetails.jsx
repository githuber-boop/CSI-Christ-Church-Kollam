import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../assets/csi-christ-logo.png'
import { Link } from 'react-router-dom'

import '../styles/AdminMemberDetails.css';


const AdminMemberDetails = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        
        const fetchJobs = async () => {
            const res = await fetch("http://localhost:5000/details")
            const data = await res.json()
            setDetails(data)
        }   

        fetchJobs()
    }, [])

    const deleteUser = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/details/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setDetails(details.filter(memberDetail => memberDetail.id !== id));
        } else {
          alert('Failed to delete user');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };

  return (
    <div className="admin-member-dashboard">
        <aside className='admin-member-sidebar'>
            <div>
                <img src={logo} alt="CSI Christ Church Logo" />
                <div className="links">
                    <Link to="/admin-dashboard/members" className='admin-sidebar-link link-active'>MEMBER DETAILS</Link>
                    <Link to="/admin-dashboard" className='admin-sidebar-link '>CREATE NEW USER</Link>
                    <Link to="/admin-dashboard/vicar-message" className='admin-sidebar-link'>VICAR'S MESSAGE</Link>
                    <Link to="/member-dashboard" className='admin-sidebar-link'>MONTHLY NEWSLETTER</Link>
                </div>
            </div>
            <div className="logOut">
                <a href="#" className='log-out'>Log Out</a>
            </div>
        </aside>
        <main className='admin-member-content'>
        <div className="grid-col-2">
          {details.map((memberDetail) => (
            <div key={memberDetail.id} className="member-details">
              <h3>NAME: {memberDetail.name}</h3>
              <h3>ADDRESS: {memberDetail.address}</h3>
              <h3>NUMBER: {memberDetail.number}</h3>
              <h3>DOB: {memberDetail.dob}</h3>
              <h3>BAPTISM DATE: {memberDetail.baptism}</h3>
              <h3>CONFIRMATION: {memberDetail.confirmation}</h3>
              <div className="delete-user">
                <button onClick={() => deleteUser(memberDetail.id)} className='deleteButton'>DELETE</button>
              </div>
            </div>
          
          ))}
        </div>
        </main>
    </div>
    
  )
}

export default AdminMemberDetails
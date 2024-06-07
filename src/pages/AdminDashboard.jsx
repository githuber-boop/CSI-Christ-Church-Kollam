import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/csi-christ-logo.png'
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="grid dashboard">
        <aside className='sidebar'>
            <img src={logo} alt="CSI Christ Church Logo" />
            <div className="links">
                <Link to="/member-dashboard" className='sidebar-link'>MEMBER DETAILS</Link>
                <Link to="/member-dashboard" className='sidebar-link'>VICAR'S MESSAGE</Link>
                <Link to="/member-dashboard" className='sidebar-link'>MONTHLY NEWSLETTER</Link>
            </div>
            <div className="logOut">
                <a href="#" className='log-out'>Log Out</a>
            </div>
        </aside>
        <main className=''>
        
        </main>
    </div>
  )
}

export default AdminDashboard
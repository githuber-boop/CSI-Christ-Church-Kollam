import React from 'react'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import logo from '../assets/csi-christ-logo.png'
import '../styles/Sidebar.css';




const Sidebar = ({member, newUser, message, newEvent}) => {
  return (
    <aside className='admin-member-sidebar sidebar'>
            <div>

            <LazyLoad offset={1000}>
                <img src={logo} alt="CSI Christ Church Logo" />
              </LazyLoad>
                <div className="links">
                    <Link to="/admin-dashboard/members" className={`admin-sidebar-link ${member}`}>MEMBER DETAILS</Link>
                    <Link to="/admin-dashboard" className={`admin-sidebar-link ${newUser}`}>CREATE NEW USER</Link>
                    <Link to="/admin-dashboard/vicar-message" className={`admin-sidebar-link ${message}`}>VICAR'S MESSAGE</Link>
                    <Link to="/admin-dashboard/events" className={`admin-sidebar-link ${newEvent}`}>CREATE A NEW EVENT</Link>
                    <Link to="/admin-dashboard/edit-events" className={`admin-sidebar-link`}>EDIT A EVENT</Link>
                    <Link to="/member-dashboard" className='admin-sidebar-link '>MONTHLY NEWSLETTER</Link>
                </div>
            </div>
            <div className="logOut">
              <Link to='/login' className='log-out'>Log Out</Link>
            </div>
        </aside>
  );
}

export default Sidebar
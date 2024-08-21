import React from 'react'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import logo from '../assets/csi-christ-logo.webp'
import '../styles/Sidebar.css';




const Sidebar = ({member, newUser, message, newEvent, herald, almanac}) => {
  return (
    <aside className='admin-member-sidebar sidebar'>
            <div>

            <LazyLoad offset={1000}>
                <Link to='/'>
                  <img src={logo} alt="CSI Christ Church Logo" />
                </Link>
              </LazyLoad>
                <div className="links">
                    <Link to="/admin-dashboard/members" className={`admin-sidebar-link ${member}`}>MEMBER DETAILS</Link>
                    <Link to="/admin-dashboard" className={`admin-sidebar-link ${newUser}`}>CREATE NEW USER</Link>
                    <Link to="/admin-dashboard/vicar-message" className={`admin-sidebar-link ${message}`}>VICAR'S MESSAGE</Link>
                    <Link to="/admin-dashboard/events" className={`admin-sidebar-link ${newEvent}`}>CREATE A NEW EVENT</Link>
                    {/* <Link to="/admin-dashboard/edit-events" className={`admin-sidebar-link`}>EDIT A EVENT</Link> */}
                    <Link to="/admin-dashboard/herald" className={`admin-sidebar-link ${herald} `}>CHURCH HERALD</Link>
                    <Link to="/admin-dashboard/almanac" className={`admin-sidebar-link ${almanac} `}>CHURCH ALMANAC</Link>
                </div>
            </div>
            <div className="logOut">
              <Link to='/login' className='log-out'>Log Out</Link>
            </div>
        </aside>
  );
}

export default Sidebar
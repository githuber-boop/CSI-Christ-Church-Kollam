import React, { useState , useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/csi-christ-logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [isFixed, setIsFixed] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        home: false,
        services: false,
        about: false,
        events: false,
        missions: false,
    });

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const headerHeight = document.querySelector('.App-header').offsetHeight;
    //     if (window.scrollY > headerHeight) {
    //       setIsFixed(true);
    //     } else {
    //       setIsFixed(false);
    //     }
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (menu) => {
        setDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <nav className='navbar'>
            <div className="logo">
                <Link to='/'>
                <img src={logo} alt="CSI Christ Church Logo" />
                </Link>
            </div>
            <button className={`hamburger`} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
                <li className="nav-link"><Link className="link" to="/">Home</Link></li>

                <li className="nav-link">
                    <Link className="link" to="#" onClick={() => toggleDropdown('about')}>About Us <span><FaChevronDown /></span></Link>
                    {dropdowns.about && (
                        <ul className="dropdown-menu">
                            <li className="dropdown-item"><Link className="link" to="/church-history">Church History</Link></li>
                            <li className="dropdown-item"><Link className="link" to="/milestones">Milestones</Link></li>
                            <li className="dropdown-item"><Link className="link" to="/our-bishops">Our Bishops</Link></li>
                            <li className="dropdown-item"><Link className="link" to="/vicars-message">Vicar's Message</Link></li>
                            <li className="dropdown-item"><Link className="link" to="/office-bearers">Office Bearers</Link></li>
                            <li className="dropdown-item"><Link className="link" to="/past-vicars">Past Vicars</Link></li>
                        </ul>
                    )}
                </li>

                <li className="nav-link">
                    <Link className="link" to="#" onClick={() => toggleDropdown('services')}>Organisations <span><FaChevronDown /></span></Link>
                    {dropdowns.services && (
                        <ul className="dropdown-menu">
                            <li className="dropdown-item"><Link className="link" to="#services1">Services 1</Link></li>
                            <li className="dropdown-item"><Link className="link" to="#services2">Services 2</Link></li>
                            <li className="dropdown-item"><Link className="link" to="#services3">Services 3</Link></li>
                        </ul>
                    )}
                </li>

                <li className="nav-link">
                    <Link className="link" to="#" onClick={() => toggleDropdown('missions')}>Missions & Projects <span><FaChevronDown /></span></Link>
                    {dropdowns.missions && (
                        <ul className="dropdown-menu">
                            <li className="dropdown-item"><Link className="link" to="/missions-projects">Missions and Projects</Link></li>
                            <li className="dropdown-item"><Link className="link" to="/chhattisgarh-mission">Chhattisgarh Mission</Link></li>
                            <li className="dropdown-item"><Link className="link" to="/csi-convention-center">CSI Convention Center</Link></li>
                            <li className="dropdown-item"><Link className="link" to="/balikamandhiram-balabhavan">Balikamandiram and Balabhavan</Link></li>
                        </ul>
                    )}
                </li>

                <li className="nav-link">
                    <Link className="link" to="/events">Events </Link>
                </li>

                <li className="nav-link"><Link className="link" to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

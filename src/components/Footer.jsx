import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import '../styles/Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <footer className="footer">
            <div className="footer-social-icons">
              <span className='footer-social-icon'>
                <Link to={'https://www.facebook.com/groups/CSI.Christ.Church.Kollam/'}target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-facebook facebook"></i></Link>
              </span>
              <span className='footer-social-icon'>
                <Link to={'https://www.youtube.com/channel/UCBvvHn1GTMEL5I4txG320vg'} target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-square-youtube youtube"></i></Link>
              </span>
            </div>

            <ul className="footer-links">
              <li>
                <a>
                  <Link onClick={() => {
          window.scrollTo(0, 0);
        }} className='footer-link' to={'/'}>Home</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link onClick={() => {
          window.scrollTo(0, 0);
        }} className='footer-link' to={'/church-history'}>About Us</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link onClick={() => {
          window.scrollTo(0, 0);
        }} className='footer-link' to={'/missions-projects'}>Missions & Projects</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link onClick={() => {
          window.scrollTo(0, 0);
        }} className='footer-link' to={'/events'}>Events</Link>
                </a>
              </li>
            </ul>

            <div className="copyright">
              <p>© 2024 CSI Christ Church Kollam. All rights reserved.</p>
            </div>
    </footer>
    </>
  )
}

export default Footer
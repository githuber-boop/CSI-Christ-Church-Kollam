import React from 'react'
import '../styles/Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import axios from 'axios';


// const removeFileExtension = (filename) => {
//   return filename.replace(/\.[^/.]+$/, "");
// };

const Hero = () => {
//   const [heralds, setHeralds] = useState([]);
//   const [almanacs, setAlmanacs] = useState([]);

// useEffect(() => {
//   const fetchFiles = async () => {
//     try {
//       const response = await axios.get('https://church-kollam-backend.onrender.com/api/heralds');
//       setHeralds(response.data); 
//     } catch (error) {
//       console.error('Error fetching files:', error);
//     }
//   };

//   fetchFiles();
// }, []);

// useEffect(() => {
//   const fetchFiles = async () => {
//     try {
//       const response = await axios.get('https://church-kollam-backend.onrender.com/api/almanacs');
//       setAlmanacs(response.data); 
//     } catch (error) {
//       console.error('Error fetching files:', error);
//     }
//   };

//   fetchFiles();
// }, []);

  return (
    <>
      <header className="hero App-header">
        <div className="container">
          <Navbar />
          <main className="hero-text">
            <h1>WELCOME TO<br /><span className="slideIn"> CSI CHRIST CHURCH CATHEDRAL <br /> KOLLAM</span></h1>
            <div className="call-out">
              <button><Link to={'/church-history'}>LEARN MORE</Link></button>
              <button><Link to='/service-timings'>Service Timings</Link></button>
            </div>
            <div className="social-icons">
              <span className='social-icon'>
                <Link to={'https://www.facebook.com/groups/CSI.Christ.Church.Kollam/'}target="_blank" rel="noopener noreferrer" ><FaFacebookSquare className='icon facebook' /></Link>
              </span>
              <span className='social-icon'>
                <Link to={'https://www.youtube.com/channel/UCBvvHn1GTMEL5I4txG320vg'} target="_blank" rel="noopener noreferrer" ><FaSquareYoutube className='icon youtube' /></Link>
              </span>
            </div>
          </main>
        </div>
      </header>

      
    </>
  );
}

export default Hero
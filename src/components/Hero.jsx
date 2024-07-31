import React from 'react'
import '../styles/Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import pdfImage from '../assets/pdf-image.png'


const removeFileExtension = (filename) => {
  return filename.replace(/\.[^/.]+$/, "");
};

const Hero = () => {

  const [heralds, setHerald] = useState([]);
  const [almanacs, setAlmanac] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/herald');
        const data = await response.json();
        setHerald(data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/almanac');
        const data = await response.json();
        setAlmanac(data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  // const fileClickHandler = (file) => {
  //   if (file.type === 'application/pdf') {
  //     const pdfWindow = window.open('');
  //     pdfWindow.document.write(`<iframe width='100%' height='100%' src='${file.previewUrl}'></iframe>`);
  //   } else {
  //     alert('File type is not supported for viewing.');
  //   }
  // };

  const fileClickHandler = (file) => {
    if (file.type === 'application/pdf') {
      window.open(file.previewUrl, '_blank');
    } else {
      alert('File type is not supported for viewing.');
    }
  };

  return (
    

            <>
              <header className="hero App-header">
                <div className="container">
              
                <Navbar/>
                  <main className="hero-text">
                    <h1>WELCOME TO<br></br> CSI CHRIST CHURCH CATHEDRAL <br></br>KOLLAM</h1>
                    <div className="call-out">
                      <button><a href="#">Learn More</a></button>
                      <button><a href=""><Link to='/service-timings'>Service Timings</Link></a></button>
                    </div>
                    <div className="social-icons">
                        <span className='social-icon'><Link>
                          <FaFacebookSquare className='icon facebook' />
                        </Link></span>
                        <span className='social-icon'><FaSquareInstagram  className='icon instagram'/></span>
                        <span className='social-icon'><FaSquareYoutube  className='icon youtube'/></span>
                    </div>
                  </main>
                </div>
              </header>

      <div className='container'>
      <div className="file-uploads">
        {heralds.length > 0 ? (
          heralds.map((herald) => (
            <div className='upload' key={herald.name}>
              <h1>CHURCH HERALD</h1>
              <img
                src={pdfImage}
                alt={herald.name}
                style={{ maxWidth: '50%', height: 'auto', cursor: 'pointer' }}
                onClick={() => fileClickHandler(herald)}
              />
              <p>{removeFileExtension(herald.name)}</p>
            </div>
          ))
        ) : (
          <p>No files uploaded yet.</p>
        )}
        
        {almanacs.length > 0 ? (
          almanacs.map((almanac) => (
            <div  className='upload'  key={almanac.name}>
              <h1>CHURCH ALMANAC</h1>
              <img
                src={pdfImage}
                alt={almanac.name}
                style={{ maxWidth: '50%', height: 'auto', cursor: 'pointer' }}
                onClick={() => fileClickHandler(almanac)}
              />
              <p>{removeFileExtension(almanac.name)}</p>
        
            </div>
          ))
        ) : (
          <p>No files uploaded yet.</p>
        )}
      </div>
    </div>
            </>

            

    
  )
}

export default Hero
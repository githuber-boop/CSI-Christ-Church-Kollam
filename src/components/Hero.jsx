import React from 'react'
import '../styles/Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import pdfImage from '../assets/pdf-image.png'
const Hero = () => {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/files');
        const data = await response.json();
        setFiles(data);
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

              <div>
      <h1>Home Page</h1>
      <h2>Uploaded Files:</h2>
      {files.length > 0 ? (
        files.map((file) => (
          <div key={file.name}>
            {file.type === 'application/pdf' && (
              <button onClick={() => fileClickHandler(file)}>Open PDF</button>
            )}
            <img
              src={pdfImage}
              alt={file.name}
              style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
              onClick={() => fileClickHandler(file)}
            />
          </div>
        ))
      ) : (
        <p>No files uploaded yet.</p>
      )}
    </div>
            </>

            

    
  )
}

export default Hero
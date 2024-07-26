import React from 'react'
import '../styles/Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
const Hero = () => {

  

  return (
    

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

    
  )
}

export default Hero
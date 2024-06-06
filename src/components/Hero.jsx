import React from 'react'
import '../styles/Home.css';
import Navbar from './Navbar';

const Hero = () => {

  

  return (
    

            <header className="hero">
              <div className="container">
            
              <Navbar/>
                <main className="hero-text">
                  <h1>WELCOME TO<br></br> CSI CHRIST CHURCH <br></br>KOLLAM</h1>
                  <div className="call-out">
                    <button><a href="#">Learn More</a></button>
                    <button><a href="#">Service Timings</a></button>
                  </div>
                </main>
              </div>
            </header>

    
  )
}

export default Hero
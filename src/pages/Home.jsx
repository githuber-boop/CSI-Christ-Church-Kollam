import React, { useState } from 'react'
import Hero from '../components/Hero'
import deanImage from '../assets/dean.webp'
import { useEffect } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import churchHistory from "../assets/church.png"
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import roundedDean from '../assets/rounded-dean.png'
import roundedSecretary from '../assets/rounded-secretary.png'
import roundedAccountant from '../assets/rounded-accountant.png'

const App = () => {
    const [message, setMessage] = useState([]) 
    useEffect(() => {
        
        const fetchMessage = async () => {
            const res = await fetch("https://church-kollam-backend.onrender.com/api/message")
            const data = await res.json()
            setMessage(data)
        }   

        fetchMessage()
    }, [])

    const images = [
      'https://via.placeholder.com/600x300?text=Slide+1',
      'https://via.placeholder.com/600x300?text=Slide+2',
      'https://via.placeholder.com/600x300?text=Slide+3',
    ];

  return (


      <>
        <Hero/>
        <div className="container">
        <section className="church-history">
                  <div className="marginCenter">
                    <div className="heading">
                      <h1>Our Church History</h1>
                    </div>
                  </div>
                  <div className="col-2 grid-column">
                    <div className="col-2-text">
                        <p>The CSI Christ Church, Kollam was adopted as the Cathedral of the  Diocese and was hence renamed as CSI Christ Church Cathedral. It is  situated in the heart of the Kollam town, besides the Kollam-Shenkottah  highway. This church was planted on Sunday 3rd September 1837 by Rev. J.  C. Thompson, the 3rd missionary of the London Missionary Society in  Quilon. ......</p>
                        <button className="button"><Link to='/church-history'>Read More</Link></button>
                    </div>
                    <div className="col-2-img">
                        <img src={churchHistory} />
                    </div>
                  </div>
        </section>
    </div>


        <div className="container vicarsMessage">
            <div className="marginRight">
                <div className="heading messageHeading">
                    <h1>VICAR'S MESSAGE</h1>
                </div>
            </div>
            <div className="title">

            </div>
            <div className="vicars-message">
                <div className="dean-image">
                    <img src={deanImage} alt="" />
                </div>

                <div className="message">
                {message.map((partMessage, index) => (
                <div key={index} className="partMessage">
                  <h2>{partMessage.date}</h2>
                  <p>{partMessage.message.substring(0, 600) + '.................'}</p>
                  <button className="button"><Link to='/vicars-message'>Read More</Link></button>
                </div>
              ))}
                </div>
            </div>
        </div>

        <div className="container officeBearers">
          <div className="flexCenter">
            <div className="heading">
              <h1>OFFICE BEARERS</h1>
            </div>
          </div>

          <div className="office-bearers-cards">
            <div className="bearer-card">
              <img src={roundedDean} alt="deanImage" />
              <div className="bearer-text">
                <h1 className='bearer-name'>REV. JOSE GEORGE</h1>
                <h3 className='bearer-position'>DEAN</h3>
                <p className='bearer-number'>+91 98464 66513</p>
              </div>
            </div>
            <div className="bearer-card">
              <img src={roundedSecretary} alt="deanImage" />
              <div className="bearer-text" >
                <h1 className='bearer-name'>Lal Thomas</h1>
                <h3 className='bearer-position'>Secretary</h3>
                <p className='bearer-number'>+91 94969 91960</p>
              </div>
            </div>
            <div className="bearer-card">
              <img src={roundedAccountant} alt="deanImage" />
              <div className="bearer-text">
                <h1 className='bearer-name'>Oommen George</h1>
                <h3 className='bearer-position'>accountant</h3>
                <p className='bearer-number'>+91 94461 09231</p>
              </div>
            </div>
          </div>

        </div>


        {/* <Carousel images={images} /> */}
        <Footer/>
      </>
    


  )
}

export default App
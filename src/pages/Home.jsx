import React, { useState } from 'react'
import Hero from '../components/Hero'
import ChurchHistory from '../components/ChurchHistory'
import deanImage from '../assets/dean.webp'
import { useEffect } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
const App = () => {
    const [message, setMessage] = useState([]) 
    useEffect(() => {
        
        const fetchMessage = async () => {
            const res = await fetch("/api/message")
            const data = await res.json()
            setMessage(data)
        }   

        fetchMessage()
    }, [])


  return (


      <>
        <Hero/>
        <ChurchHistory/>

        <div className="container">
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
      </>
    


  )
}

export default App
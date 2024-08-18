import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'
import messageBg from '../assets/vicars-message-bg.webp'
import bishopImage from '../assets/vicar-image.webp'
import { useState } from 'react'
import { useEffect } from 'react'
import LazyLoad from 'react-lazyload'


const VicarsMessage = () => {
  
  const [messages, setMessages] = useState([])

  useEffect(() => {
        
    const fetchMessage = async () => {
        const res = await fetch("https://church-kollam-backend.onrender.com/api/message")
        const data = await res.json()
        setMessages(data)
    }   

    fetchMessage()
}, [])

    const styles = {
        content: {
        maxWidth: '1200px',
         margin: 'auto',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.6',
          marginTop: '50px',
          padding:"30px"
        },
        image: {
          float: 'right',
          // margin: "0 auto",
          margin: '0 0 20px 20px',
        },
        text: {
          fontFamily: "IBM Plex Sans Condensed",
          fontSize:"20px",
          marginBottom:"10px"
        },
      };

  return (
      <div>
        <PageBackgrounds backgroundImg={messageBg} heroText={"VICAR'S MESSAGE"}/>
  
        <div style={styles.content} className='vicarsMessage'>
          <LazyLoad offset={7000}>

            <img src={bishopImage} alt="Bishop" style={styles.image} className='deanImage' width="300" />
          </LazyLoad>

            {messages.map((message, index) => (
              <div key={index}>
              <h2 className='date'>{message.date}</h2>
              <p style={styles.text}>{message.message}</p>

              <div className="titles">
                <h3>{message.vicarName}</h3>
                <h4>DEAN</h4>
              </div>
          </div>
            ))}
            
                
        </div>

    </div>


    
  )
}

export default VicarsMessage
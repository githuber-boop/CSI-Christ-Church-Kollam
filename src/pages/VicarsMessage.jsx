import React from 'react'
import PageBackgrounds from '../components/PageBackgrounds'
import messageBg from '../assets/vicars-message-bg.webp'
import bishopImage from '../assets/vicar-image.webp'
import { useState } from 'react'
import { useEffect } from 'react'
import LazyLoad from 'react-lazyload'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'
import Loading from '../components/Loading'

const VicarsMessage = () => {
  
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
        
    const fetchMessage = async () => {
      setLoading(true)
      try {
        const res = await fetch("https://church-kollam-backend.onrender.com/api/message")
        const data = await res.json()
        setMessages(data)
      } catch (error) {
        
      }finally {
        setLoading(false)
      }
        
    }   

    fetchMessage()
}, [])

    const styles = {
        content: {
        maxWidth: '1200px',
         margin: 'auto',
          fontFamily: 'Khand, sans-serif',
          lineHeight: '1.6',
          marginTop: '50px',
          padding:"30px",
          fontSize:"22px"
        },
        image: {
          float: 'right',
          // margin: "0 auto",
          margin: '0 0 20px 20px',
          display: 'block',
          position:'relative'
        },
        text: {
          fontFamily: "IBM Plex Sans Condensed",
          fontSize:"20px",
          marginBottom:"10px"
        },
      };

  return (
      <>
        <PageBackgrounds backgroundImg={messageBg} heroText={"VICAR'S MESSAGE"}/>
        <div className="container">
          <Breadcrumbs/>
        </div>
        <div style={styles.content} className='vicarsMessage'>
          <LazyLoad offset={7000}>

            <div style={styles.image} ><img src={bishopImage} alt="Bishop"  className='deanImage' width="300" /></div>
          </LazyLoad>

          {loading ? (
          <Loading /> // Show loading only in this section
        ) : (
          messages && messages.map((message , index) => (
            <div className='vicarsSpeech' key={index}>
              <h2 className='date'>{new Date(message.date).toLocaleDateString()}</h2>
              <p style={styles.text}>{message.message}</p>

              <div className="titles">
                <h3>{message.vicarName}</h3>
                <h4>DEAN</h4>
              </div>
          </div>
          ))
        )}
            
                
        </div>
      <Footer/>
    </>


    
  )
}

export default VicarsMessage
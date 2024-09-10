import React from 'react'
import cathedral from '../assets/cathedral.webp'
import PageBackgrounds from '../components/PageBackgrounds'
import eventBg from '../assets/eventBg.webp'
import '../styles/Events.css'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Breadcrumb from '../components/BreadCrumbs'
import Loading from '../components/Loading'
const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
        
    const fetchMessage = async () => {
      setLoading(true);

      try {
        const res = await fetch("https://church-kollam-backend.onrender.com/api/events")
        const data = await res.json()
        setEvents(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }finally {
        setLoading(false);

      }
        
    }   

    fetchMessage()
}, [])


  return (
    <>
        <PageBackgrounds backgroundImg={eventBg} heroText={"UPCOMING EVENTS"}/>
        <div className="container">
        <Breadcrumb/>

            <div className="grid-column-2">
              <div className="event-container">
                <div className="event-cards">
                {loading ? (
          <Loading /> // Show loading only in this section
        ) : (
          events && events.map((event , index) => (
            <div key={index} className="event-card">
                    <h2>{event.eventName}</h2>
                    <p><strong>Date and Time:</strong> {event.date} {event.time}</p>
                    <p>{event.eventDetails}</p>
              </div>
          ))
        )}

                </div>
              </div>
              <div className="event-image">
                <img src={cathedral} alt="cathderal-image" />
              </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Events
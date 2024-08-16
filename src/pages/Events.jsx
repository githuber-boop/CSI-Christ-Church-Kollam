import React from 'react'
import cathedral from '../assets/cathedral.webp'
import PageBackgrounds from '../components/PageBackgrounds'
import eventBg from '../assets/eventBg.webp'
import event2 from '../assets/event-2.webp'
import '../styles/Events.css'
import { useState, useEffect } from 'react'
const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
        
    const fetchMessage = async () => {
        const res = await fetch("https://church-kollam-backend.onrender.com/api/events")
        const data = await res.json()
        setEvents(data)
    }   

    fetchMessage()
}, [])


  return (
    <>
        <PageBackgrounds backgroundImg={eventBg} heroText={"UPCOMING EVENTS"}/>
        <div className="container">
            <div className="grid-column-2">
              <div className="event-cards">

              {events.map((event, index) => (
                <div key={index} className="event-card">
                  <h2>{event.eventName}</h2>
                  <p><strong>Date and Time:</strong> {event.date} {event.time}</p>
                  <p>{event.eventDetails}</p>
                </div>
              ))}
              </div>
              <div className="event-image">
                <img src={cathedral} alt="cathderal-image" />
                <img src={event2} alt="cathderal-image" />
              </div>
            </div>
        </div>
    </>
  )
}

export default Events
import React from 'react'
import '../styles/AdminVicarsMessage.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const success = () => toast.info("Event added");


const NewEvent = ({addEventSubmit}) => {
    const [eventName , setEventName] = useState("");
    const [date , setDate] = useState("");
    const [time , setTime] = useState("");
    const [eventDetails , setEventDetails] = useState("");


  const submitForm = (e) => {
      e.preventDefault();
      
      const newEvent = {
          eventName,
          date,
          time,
          eventDetails,
      }

      addEventSubmit(newEvent);
      console.log(newEvent)
  }

  return (
<div className="admin-dashboard dashboard">
        <Sidebar newEvent={'link-active'}/>

        <main className='user-form admin-content content'>
            <ToastContainer/>
            <h1>CREATE A NEW EVENT</h1>
            <form onSubmit={submitForm}  className='new_user-form'>
                <input type="text" value={eventName} onChange={(e)=> setEventName(e.target.value)} placeholder='Name of Event'/>
                <textarea name="" id="eventDetails" rows={10} value={eventDetails}onChange={(e)=> setEventDetails(e.target.value)}></textarea>
                <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} placeholder='Date'/>
                <input type="time" value={time} onChange={(e)=> setTime(e.target.value)} placeholder='Date'/>
                <button onClick={success} type='submit'>Add Event</button>
                
            </form>
        </main>
    </div>
  )
}

export default NewEvent
import React from 'react'
import '../styles/AdminVicarsMessage.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const success = () => toast.info("Event added");


const NewEvent = () => {


    const [formData,setFormData] = useState({
        eventName:'',
        date:'',
        time:'',
        eventDetails:'',
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("https://church-kollam-backend.onrender.com/api/events/newEvent",formData);

            success()
            console.log(response.data)
        }catch(error){
            console.error(error)
        }

    }



  return (
<div className="admin-dashboard dashboard">
        <Sidebar event={'link-active'}/>

        <main className='user-form admin-content content'>
            <ToastContainer/>
            <h1>CREATE A NEW EVENT</h1>
            <form onSubmit={submitForm}  className='new_user-form'>
                <input type="text" name='eventName' value={formData.eventName} onChange={handleChange} placeholder='Name of Event'/>
                <textarea name="eventDetails" id="eventDetails" placeholder='Event Details' rows={10} value={formData.eventDetails}onChange={handleChange}></textarea>
                <input type="date" name='date' value={formData.date} onChange={handleChange} placeholder='Date'/>
                <input type="time" name='time' value={formData.time} onChange={handleChange} placeholder='Date'/>
                <button type='submit'>Add Event</button>
                
            </form>

            <h1>Delete Event</h1>
            <Link to="/admin-dasboard/edit-event">Edit Events</Link>
        </main>
    </div>
  )
}

export default NewEvent
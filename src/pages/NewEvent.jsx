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


    const [formData, setFormData] = useState({
        eventName: '',
        date: '',
        time: '',
        eventDetails: '',
        image: null,
      });


    const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('file', formData.image);
    data.append('upload_preset', 'eventImage'); // Cloudinary upload preset

    try {
      // Upload image to Cloudinary
      const res = await axios.post('https://api.cloudinary.com/v1_1/ddtktshwj/image/upload', data);
      const imageUrl = res.data.secure_url;

      // Prepare event data
      const eventData = {
        eventName: formData.eventName,
        date: formData.date,
        time: formData.time,
        eventDetails: formData.eventDetails,
        imageUrl, // Cloudinary URL
      };

      // Submit event data to your backend
      await axios.post('https://church-kollam-backend.onrender.com/api/events/newEvent', eventData);
      console.log('Event created successfully');
    } catch (error) {
      console.error('Error uploading image or creating event', error);
    }
  };



  return (
<div className="admin-dashboard dashboard">
        <Sidebar event={'link-active'}/>

        <main className='user-form admin-member-content content'>
            <ToastContainer/>
            <h1>CREATE A NEW EVENT</h1>
            <form onSubmit={handleSubmit} className='new_user-form'>
      <input
        type="text"
        name="eventName"
        value={formData.eventName}
        onChange={handleChange}
        placeholder="Event Name"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <textarea
        name="eventDetails"
        value={formData.eventDetails}
        onChange={handleChange}
        placeholder="Event Details"
        required
      />
      <input
        type="file"
        name="image"
        onChange={handleChange}
        required
      />
      <button type="submit">Create Event</button>
    </form>

            <h1>Delete Event</h1>
            <div className="editButton button">
                <Link to="/admin-dasboard/edit-event">Edit Events</Link>
            </div>
        </main>
    </div>
  )
}

export default NewEvent
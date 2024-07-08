import React from 'react'
import '../styles/AdminVicarsMessage.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar';



const NewEvent = () => {
  return (
<div className="admin-dashboard dashboard">
        <Sidebar newEvent={'link-active'}/>

        <main className='user-form admin-content content'>
            <ToastContainer/>
            <h1>CREATE A NEW EVENT</h1>
            <form  className='new_user-form'>
                <input type="date" placeholder='Date'/>
                <textarea name="" id="" placeholder='Event Details' rows={13}></textarea>
                <button type='submit'>Add Event</button>
                
            </form>
        </main>
    </div>
  )
}

export default NewEvent
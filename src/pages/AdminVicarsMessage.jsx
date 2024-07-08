import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/csi-christ-logo.png'
import '../styles/AdminVicarsMessage.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from 'react-lazyload';
import Sidebar from '../components/Sidebar';

import { useState } from 'react';

const success = () => toast.info("Message updated");

const AdminDashboard = ({addMessageSubmit}) => {
    const [date , setDate] = useState("");
    const [message , setMessage] = useState("");
    const [vicarName , setVicarName] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        
        const newMessage = {
            date,
            message,
            vicarName
        }

        addMessageSubmit(newMessage);
    }

  return (
    <div className="admin-dashboard dashboard">
        <Sidebar message={'link-active'}/>

        <main className='user-form admin-content content'>
            <ToastContainer/>
            <h1>VICAR'S MESSAGE</h1>
            <form onSubmit={submitForm} className='new_user-form'>
                <input type="date" placeholder='Date' value={date} onChange={(e)=> setDate(e.target.value)}/>
                <textarea name="" id="" placeholder='Message' rows={13} value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                <input type="text" placeholder="Vicar's Name" defaultValue={"Rev. Jose George"} value={vicarName} onChange={(e)=> setVicarName(e.target.value)}/>
                <button type='submit' onClick={success}>Add Message</button>
                
            </form>
        </main>
    </div>
  )
}

export default React.memo(AdminDashboard)
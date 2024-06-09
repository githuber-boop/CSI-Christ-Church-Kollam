import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/csi-christ-logo.png'
import '../styles/AdminVicarsMessage.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="admin-dashboard">
        <aside className='admin-sidebar'>
            <div>
                <img src={logo} alt="CSI Christ Church Logo" />
                <div className="links">
                    <Link to="/admin-dashboard/members" className='admin-sidebar-link'>MEMBER DETAILS</Link>
                    <Link to="/admin-dashboard" className='admin-sidebar-link '>CREATE NEW USER</Link>
                    <Link to="/admin-dashboard/vicar-message" className='admin-sidebar-link link-active'>VICAR'S MESSAGE</Link>
                    <Link to="/member-dashboard" className='admin-sidebar-link'>MONTHLY NEWSLETTER</Link>
                </div>
            </div>
            <div className="logOut">
                <a href="#" className='log-out'>Log Out</a>
            </div>
        </aside>
        <main className='user-form admin-content'>
            <ToastContainer/>
            <h1>CREATE A NEW USER</h1>
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

export default AdminDashboard
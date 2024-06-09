import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/csi-christ-logo.png'
import '../styles/NewUser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const AdminDashboard = ({addUserSubmit}) => {
    const success = () => toast.error("User Created");

    const [name , setName] = useState("");
    const [address , setAddress] = useState("");
    const [number , setNumber] = useState("");
    const [dob , setDob] = useState("");
    const [baptism , setBaptism] = useState("");
    const [confirmation , setConfirmation] = useState("");
 

    const submitForm = (e) => {
        e.preventDefault();
        
        const newUser = {
            name,
            address,
            number,
            dob,
            baptism,
            confirmation
        }

        addUserSubmit(newUser);
        // return navigate('/admin-dashboard')
    }
  return (
    <div className="admin-dashboard">
        <aside className='admin-sidebar'>
            <div>
                <img src={logo} alt="CSI Christ Church Logo" />
                <div className="links">
                    <Link to="/admin-dashboard/members" className='admin-sidebar-link'>MEMBER DETAILS</Link>
                    <Link to="/admin-dashboard" className='admin-sidebar-link link-active'>CREATE NEW USER</Link>
                    <Link to="/admin-dashboard/vicar-message" className='admin-sidebar-link'>VICAR'S MESSAGE</Link>
                    <Link to="/member-dashboard" className='admin-sidebar-link'>MONTHLY NEWSLETTER</Link>
                </div>
            </div>
            <div className="logOut">
                <a href="#" className='log-out'>Log Out</a>
            </div>
        </aside>
        <main className='user-form admin-content'>
                <ToastContainer />
            <h1>CREATE A NEW USER</h1>
            <form onSubmit={submitForm} className='new_user-form'>
                <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="text" placeholder='Address' value={address} onChange={(e)=> setAddress(e.target.value)}/>
                <input type="text" placeholder='Phone Number' value={number} onChange={(e)=> setNumber(e.target.value)}/>
                <input type="text" placeholder='Date of Birth' value={dob} onChange={(e)=> setDob(e.target.value)}/>
                <input type="date" placeholder='Baptism Date' value={baptism} onChange={(e)=> setBaptism(e.target.value)}/>
                <input type="date" placeholder='Confirmation Date' value={confirmation} onChange={(e)=> setConfirmation(e.target.value)}/>
                <button type='submit' onClick={success}>Add User</button>
            </form>
        </main>
    </div>
  )
}

export default AdminDashboard
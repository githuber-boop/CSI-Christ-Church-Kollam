import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/csi-christ-logo.png'
import '../styles/NewUser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const AdminDashboard = ({addUserSubmit}) => {
    const navigate = useNavigate()
    const success = () => toast.info("User Created");

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
            confirmation,
            role:'member',
            password:'kollamchurch'
        }

       

        addUserSubmit(newUser);
        return setTimeout(() => {
            // Navigate to the desired section
            navigate('/admin-dashboard/members');
          }, 1500)
    }
  return (
    <div className="admin-dashboard">
        <aside className='admin-sidebar'>
                <img src={logo} alt="CSI Christ Church Logo" />
                <div className="links">
                    <Link to="/admin-dashboard/members" className='admin-sidebar-link'>MEMBER DETAILS</Link>
                    <Link to="/admin-dashboard" className='admin-sidebar-link link-active'>CREATE NEW USER</Link>
                    <Link to="/admin-dashboard/vicar-message" className='admin-sidebar-link'>VICAR'S MESSAGE</Link>
                    <Link to="/member-dashboard" className='admin-sidebar-link'>MONTHLY NEWSLETTER</Link>
                </div>

            <div className="logOut bottom-links">
                <Link to='/login' className='log-out'>Log Out</Link>

            </div>
        </aside>
        <main className='user-form admin-content'>
                <ToastContainer />
            <h1>CREATE A NEW USER</h1>
            <form onSubmit={submitForm} className='new_user-form'>
                <label htmlFor="name">Name: <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/></label>
                <label htmlFor="address">Address:<input type="text"  value={address} onChange={(e)=> setAddress(e.target.value)}/></label>
                <label htmlFor="number">Phone Number:<input type="text"  value={number} onChange={(e)=> setNumber(e.target.value)}/></label>
                <label htmlFor="date">Date of Birth<input type="date" value={dob} onChange={(e)=> setDob(e.target.value)}/></label>
                <label htmlFor="baptism">Baptism Date:<input type="date"  value={baptism} onChange={(e)=> setBaptism(e.target.value)}/></label>
                <label htmlFor="confirmation">Confirmation Date<input type="date" value={confirmation} onChange={(e)=> setConfirmation(e.target.value)}/></label>
                <button type='submit' onClick={success}>Add User</button>
            </form>
        </main>
    </div>
  )
}

export default AdminDashboard
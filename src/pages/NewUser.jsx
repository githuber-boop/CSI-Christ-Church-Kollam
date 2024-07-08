import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NewUser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar';



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
        <Sidebar newUser={'link-active'}/>
        
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
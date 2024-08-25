import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NewUser.css';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar';
import axios from 'axios'


const AdminDashboard = () => {
    const success = () => toast.info("User Created");

    // const [name , setName] = useState("");
    // const [address , setAddress] = useState("");
    // const [number , setNumber] = useState("");
    // const [dob , setDob] = useState("");
    // const [email , setEmail] = useState("");
    // const [baptism , setBaptism] = useState("");
    // const [confirmation , setConfirmation] = useState("");
    const [formData,setFormData] = useState({
        name:'',
        address:'',
        number:'',
        dob:'',
        email:'',
        weddingDte:'',
        confirmation:'',
        baptism:'',
        role:'member',
        password:'kollamchurch',
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("https://church-kollam-backend.onrender.com/api/users/newUser",formData);
            console.log(response.data)
        }catch(error){
            console.error(error)
        }

    }
  return (
    <div className="admin-dashboard">
        <Sidebar newUser={'link-active'}/>
        
        <main className='user-form admin-content'>
                <ToastContainer />
            <h1>CREATE A NEW USER</h1>
            <form onSubmit={submitForm} className='new_user-form'>
                <label htmlFor="name">Name: <input type="text" name='name' value={formData.name} onChange={handleChange}/></label>
                <label htmlFor="address">Address:<input type="text" name='address'  value={formData.address} onChange={handleChange}/></label>
                <label htmlFor="number">Phone Number:<input type="text"  name='number' value={formData.number} onChange={handleChange}/></label>
                <label htmlFor="date">Date of Birth<input type="date" name='dob' value={formData.dob} onChange={handleChange}/></label>
                <label htmlFor="date">Wedding Date<input type="date" name='weddingDte' value={formData.weddingDte} onChange={handleChange}/></label>
                <label htmlFor="date">Email<input type="email" name='email' value={formData.email} onChange={handleChange}/></label>
                <label htmlFor="baptism">Baptism Date:<input type="date" name='baptism' value={formData.baptism} onChange={handleChange}/></label>
                <label htmlFor="confirmation">Confirmation Date<input type="date" name='confirmation' value={formData.confirmation} onChange={handleChange}/></label>
                <button type='submit' onClick={success}>Add User</button>
            </form>
        </main>
    </div>
  )
}

export default AdminDashboard
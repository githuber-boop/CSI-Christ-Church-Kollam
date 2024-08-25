import React from 'react'
import '../styles/AdminVicarsMessage.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useState } from 'react';

const success = () => toast.info("Message updated");

const AdminDashboard = () => {
    const [formData,setFormData] = useState({
        date:'',
        message:'',
        vicarName:'',
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }


    const submitForm = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.patch("https://church-kollam-backend.onrender.com/api/message/updateMessage",formData);
            console.log(response.data)
            success()
        } catch(error){
            console.error(error)
        }
    }

  return (
    <div className="admin-dashboard dashboard">
        <Sidebar message={'link-active'}/>

        <main className='user-form admin-content content'>
            <ToastContainer/>
            <h1>VICAR'S MESSAGE</h1>
            <form onSubmit={submitForm} className='new_user-form'>
                <input type="date" placeholder='Date' name='date' value={formData.date} onChange={handleChange}/>
                <textarea placeholder='Message' name='message' rows={13} value={formData.message} onChange={handleChange}></textarea>
                <input type="text" placeholder="Vicar's Name" name='vicarName' defaultValue={"Rev. Jose George"} value={formData.vicarName} onChange={handleChange}/>
                <button type='submit'>Add Message</button>
                
            </form>
        </main>
    </div>
  )
}

export default React.memo(AdminDashboard)
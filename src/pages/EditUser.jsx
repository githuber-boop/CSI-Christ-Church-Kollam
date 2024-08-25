import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/EditUser.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function EditUser() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const success = () => toast.info("User Edited");

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://church-kollam-backend.onrender.com/api/users/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://church-kollam-backend.onrender.com/api/users/${id}`, formData);
      setTimeout(() => {
        navigate('/admin-dashboard/members');
      }, 2000);
      success()
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };


  return (
    <div className="admin-member-dashboard">
        <Sidebar/>
        
        <main className='admin-member-content'>
        <div className="edit-form">
        <ToastContainer />

      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address || ''} onChange={handleChange} />
        </label>
        <label>
          Number:
          <input type="text" name="number" value={formData.number || ''} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email || ''} onChange={handleChange} />
        </label>
        <label>
          DOB:
          <input type="date" name="dob" value={formData.dob || ''} onChange={handleChange} />
        </label>
        <label>
          Wedding Date:
          <input type="date" name="weddingDte" value={formData.weddingDte || ''} onChange={handleChange} />
        </label>
        <label>
          Baptism Date:
          <input type="date" name="baptism" value={formData.baptism || ''} onChange={handleChange} />
        </label>
        <label>
          Confirmation:
          <input type="date" name="confirmation" value={formData.confirmation || ''} onChange={handleChange} />
        </label>
        <div className="functions-user">
          <button type="submit" className='functionButton'>Save</button>
          <button type="button"  className='functionButton' onClick={() => navigate('/admin-dashboard/members')}>Cancel</button>
        </div>
      </form>
    </div>
        </main>
    </div>

    
  );
}

export default React.memo(EditUser);
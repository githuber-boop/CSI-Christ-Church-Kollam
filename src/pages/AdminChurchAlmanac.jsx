// src/FileUpload.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/AdminChurchHerald.css';
import axios from 'axios';

const AdminChurchHerald = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
  
    const formData = new FormData();
    formData.append('file', selectedFile);
    // Append the file name as a header
    const headers = {
      'Content-Type': 'multipart/form-data',
      'file-name': selectedFile.name, // Ensure this is being set correctly
    };
  
    try {
      const response = await axios.post('https://church-kollam-backend.onrender.com/upload', formData, { headers });
      console.log('File uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  
  
  return (

    <div className="admin-member-dashboard">
        <Sidebar almanac={'link-active'}/>
        <main className='admin-member-content'>

        <div className='almanac-upload'>
        <h1>ALMANAC UPLOAD</h1>
        <p>Click on Browse to select the file and then click Upload</p>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
    </div>
        </main>
    </div>

    
  );
};

export default AdminChurchHerald;

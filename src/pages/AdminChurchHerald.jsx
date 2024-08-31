// src/FileUpload.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/AdminChurchHerald.css';
import axios from 'axios';

const AdminChurchHerald = ( ) => {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const fetchUploadedFile = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/files/herald`);
      setUploadedFile(response.data.fileName);
    } catch (error) {
      console.error('Error fetching uploaded file:', error);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`https://church-kollam-backend.onrender.com/upload/herald`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data.message);
      fetchUploadedFile();
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  

  // Fetch the uploaded file on component mount
  useEffect(() => {
    fetchUploadedFile();
  }, []);
  
  
  return (

    <div className="admin-member-dashboard">
        <Sidebar herald={'link-active'}/>
        <main className='admin-member-content'>

        <div>
      <h3>Upload Herald File</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploadedFile && (
        <div>
          <p>Current Herald file: {uploadedFile}</p>
        </div>
      )}
    </div>
        </main>
    </div>

    
  );
};

export default AdminChurchHerald;

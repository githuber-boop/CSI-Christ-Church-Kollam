// src/FileUpload.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/AdminChurchHerald.css';
import axios from 'axios';

const AdminChurchHerald = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;  // Full base64 string for preview
      setPreviewUrl(base64String);  // Set full base64 for preview
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const fileUploadHandler = () => {
    if (!selectedFile) return;

    const fileData = {
      name: selectedFile.name,
      type: selectedFile.type,
      size: selectedFile.size,
      preview: previewUrl, // Store full base64 for preview
    };

    // Save file metadata to JSON Server
    axios.patch('/api/herald/1', fileData)
      .then((response) => {
        console.log('File uploaded:', response.data);
        // Optionally, reset the input and preview
        setSelectedFile(null);
        setPreviewUrl('');
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };
  return (

    <div className="admin-member-dashboard">
        <Sidebar herald={'link-active'}/>
        <main className='admin-member-content'>

        <div className='almanac-upload'>
        <h1>ALMANAC UPLOAD</h1>
        <p>Click on Browse to select the file and then click Upload</p>
        <input type="file" onChange={handleFileChange} />
          {selectedFile && (
            <div>
              <h2>File Details:</h2>
              <p>Name: {selectedFile.name}</p>
              <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
              {previewUrl && selectedFile.type !== 'application/pdf' && (
                <div>
                  <h2>Preview:</h2>
                  <img src={previewUrl} alt="Preview" style={{ maxWidth: '50%', height: 'auto' }} />
                </div>
              )}
              {selectedFile.type === 'application/pdf' && (
                <iframe
                  src={previewUrl} // Use the full base64 for PDF display
                  style={{ width: '300px', height: '400px' }}
                  title={selectedFile.name}
                />
              )}
              <button onClick={fileUploadHandler}>Upload</button>
            </div>
          )}
    </div>
        </main>
    </div>
  );
};

export default AdminChurchHerald;

// src/FileUpload.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/AdminChurchHerald.css';


const AdminChurchHerald = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileSelectedHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Generate a base64 preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const fileUploadHandler = async () => {
    if (!selectedFile) return;

    // Mock upload to server
    const fileMetadata = {
      name: selectedFile.name,
      type: selectedFile.type,
      size: selectedFile.size,
      previewUrl
    };

    try {
      const response = await fetch('/api/almanac/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fileMetadata)
      });

      if (response.ok) {
        alert('File uploaded successfully');
      } else {
        alert('Failed to upload file');
      }
    } catch (error) {
      alert('Error uploading file');
      console.error(error);
    }
  };


  return (

    <div className="admin-member-dashboard">
        <Sidebar almanac={'link-active'}/>
        <main className='admin-member-content'>

        <div className='almanac-upload'>
        <h1>ALMANAC UPLOAD</h1>
        <p>Click on Browse to select the file and then click Upload</p>
          <input type="file" onChange={fileSelectedHandler} />
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
          <button onClick={fileUploadHandler}>Upload</button>
        </div>
      )}
    </div>
        </main>
    </div>

    
  );
};

export default AdminChurchHerald;

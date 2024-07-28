// src/FileUpload.js
import React, { useState, useEffect } from 'react';

const AdminAlmanacUpload = () => {
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
      const response = await fetch('/api/files/1', {
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
    <div>
      <input type="file" onChange={fileSelectedHandler} />
      {selectedFile && (
        <div>
          <h2>File Details:</h2>
          <p>Name: {selectedFile.name}</p>
          <p>Type: {selectedFile.type}</p>
          <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
          {previewUrl && selectedFile.type !== 'application/pdf' && (
            <div>
              <h2>Preview:</h2>
              <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          )}
          <button onClick={fileUploadHandler}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default AdminAlmanacUpload;

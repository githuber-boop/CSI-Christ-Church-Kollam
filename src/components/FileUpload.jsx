import React, { useState } from 'react';

const FileUpload = ({ type }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`https://church-kollam-backend.onrender.com/api/upload/${type}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        alert(`File uploaded successfully: ${result.path}`);
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
      <button onClick={fileUploadHandler}>Upload {type}</button>
    </div>
  );
};

export default FileUpload;

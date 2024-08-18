// src/FileUpload.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/AdminChurchHerald.css';
import axios from 'axios';
import FileUpload from '../components/FileUpload';
const AdminChurchHerald = () => {
  
  return (

    <div className="admin-member-dashboard">
        <Sidebar herald={'link-active'}/>
        <main className='admin-member-content'>

          <div className='almanac-upload'>
            <h1>HERALD UPLOAD</h1>
            <FileUpload type={'herald'}/>
          </div>
        </main>
    </div>
  );
};

export default AdminChurchHerald;

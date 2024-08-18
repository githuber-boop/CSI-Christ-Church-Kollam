// src/FileUpload.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/AdminChurchHerald.css';
import axios from 'axios';
import FileUpload from '../components/FileUpload';

const AdminChurchHerald = () => {
  
  return (

    <div className="admin-member-dashboard">
        <Sidebar almanac={'link-active'}/>
        <main className='admin-member-content'>

          <div className='almanac-upload'>
          <FileUpload type={almanac}/>
          </div>
        </main>
    </div>

    
  );
};

export default AdminChurchHerald;

import React, { useState } from "react";
import logo from "../assets/csi-christ-logo.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/MemberDashboard.css";
import { FaSearch } from "react-icons/fa";

const MemberDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("https://church-kollam-backend.onrender.com/api/users");
      const data = await res.json();
      setDetails(data);
    };

    fetchJobs();
  }, []);


  const matchesSearchCriteria = (item) => {
    const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    const numberMatch = item.number.toLowerCase().includes(searchTerm.toLowerCase()) 


    return nameMatch;
};

  return (
    <div className="grid dashboard">
      <aside className="sidebar">
        <img src={logo} alt="" />
        <div className="links">
          <a href="#" className="sidebar-link">
            MEMBER DETAILS
          </a>
        </div>

        <div className="bottom-links">
          <Link to="/" className="log-out">
            Home
          </Link>
          <Link to="/login" className="log-out">
            Log Out
          </Link>
        </div>
      </aside>
      <main className="content">
        <div className="sort-filter">
          <div className="input">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              
              placeholder={"Search by name of member"}
            />
          </div>
  
        </div>

        <div className="usersGrid">
          {details.filter(matchesSearchCriteria).map((memberDetail) => (
            <div key={memberDetail.id} className="member-details">
              <h3>
                <span>NAME:</span> {memberDetail.name}
              </h3>
              <h3>
                <span>ADDRESS:</span> {memberDetail.address}
              </h3>
              <h3>
                <span>NUMBER:</span> {memberDetail.number}
              </h3>
              <h3>
                <span>DOB:</span> {memberDetail.dob}
              </h3>
              <h3><span>EMAIL:</span>  {memberDetail.email}</h3>
              <h3>
                <span>BAPTISM DATE:</span> {memberDetail.baptism}
              </h3>
              <h3>
                <span>CONFIRMATION:</span> {memberDetail.confirmation}
              </h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default React.memo(MemberDashboard);

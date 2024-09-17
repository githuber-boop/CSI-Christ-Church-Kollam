import React, { useState } from "react";
import logo from "../assets/csi-christ-logo.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/MemberDashboard.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MemberDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
          const response = await axios.get(`https://church-kollam-backend.onrender.com/api/users/`);
          setUsers(response.data);
      } catch (error) {
          setError('Failed to load user data');
          console.error(error);
      }
  };

  fetchUserData();
  }, []);

  const logOut = () => {
    try {
      localStorage.removeItem('token');
      navigate('/login')
    } catch (error) {
      console.error(error);
    }
  }

  const matchesSearchCriteria = (item) => {
    const term = searchTerm.toLowerCase();
      return (
          (item.name && item.name.toLowerCase().includes(term)) ||
          (item.house && item.house.toLowerCase().includes(term))
      );
};



  return (
    <div className="grid dashboard">
      <aside className="sidebar">
        <img src={logo} alt="" />
        <div className="links">
          <a href="#" className="sidebar-link">
            MEMBER DETAILS
          </a>
            <Link  className="sidebar-link" to={'/member-dashboard/family-members'}>FAMILY DETAILS</Link>
        </div>

        <div className="bottom-links">
          <Link to="/" className="log-out">
            Home
          </Link>
          <Link to="/login" onClick={logOut} className="log-out">
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
          {users.filter(matchesSearchCriteria).map((memberDetail) => (
            <div key={memberDetail._id} className="member-details">
              <h3>
                <span>NAME:</span>{memberDetail.name}
              </h3>
              <h3>
                <span>ADDRESS:</span>{memberDetail.address}
              </h3>
              <h3>
                <span>NUMBER:</span>{memberDetail.number}
              </h3>
              <h3>
                <span>DOB:</span>{memberDetail.dob}
              </h3>
              <h3><span>EMAIL:</span>{memberDetail.email}</h3>
              <h3>
                <span>BAPTISM DATE:</span>{memberDetail.baptism}
              </h3>
              <h3>
                <span>CONFIRMATION:</span>{memberDetail.confirmation}
              </h3>
              <h3>
                <span>HOUSE NAME:</span>{memberDetail.house}
              </h3>
            </div>
          ))}
        </div>


      </main>
    </div>
  );
};

export default React.memo(MemberDashboard);

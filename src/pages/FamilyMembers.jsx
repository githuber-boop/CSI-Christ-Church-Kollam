import React, { useState } from "react";
import logo from "../assets/csi-christ-logo.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/MemberDashboard.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const FamilyMembers = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();


  useEffect(() => {
    const fetchUserData = async () => {
      try {
          const userId = localStorage.getItem('userId'); // Get user ID from local storage
          const response = await axios.get(`https://church-kollam-backend.onrender.com/api/users/${userId}`);
          setUser(response.data);
      } catch (error) {
          setError('Failed to load user data');
          console.error(error);
      }
  };

  fetchUserData();
  }, []);

  const logOut = (req,res) => {
    try {
      localStorage.removeItem('userId');
    } catch (error) {
      console.error(error);
    }
  }



if (error) {
  localStorage.removeItem('userId');
  navigate('/login')
}

if (!user) {
  return <><Loading/></>;
}

  return (
    <div className="grid dashboard">
      <aside className="sidebar">
        <img src={logo} alt="" />
        <div className="links">
            <Link className="sidebar-link" to={'/member-dashboard'}>MEMBER DETAILS</Link>
        
            <Link className="sidebar-link" to={'/member-dashboard/family-members'}>FAMILY DETAILS</Link>
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


        

        <h2>Family Members</h2>
            {user.familyMembers && user.familyMembers.length > 0 ? (
                <ol className="member-details">
                  {user.familyMembers.map((member, index) => (
                            <li key={index}>
                              <h3><span>Name:</span> {member.name}</h3>
                              <h3><span>Date of Birth:</span> {new Date(member.dob).toLocaleDateString()}</h3>
                              <h3><span>Baptism Date:</span>{ 
    member.baptism && new Date(member.baptism) !== "Invalid Date" && !isNaN(new Date(member.baptism))
      ? new Date(member.baptism).toLocaleDateString()
      : member.baptism 
  }</h3>
                              <h3><span>Confirmation Date:</span> { 
            member.confirmation && new Date(member.confirmation) !== "Invalid Date" && !isNaN(new Date(member.confirmation))
              ? new Date(member.confirmation).toLocaleDateString()
              : member.confirmation 
          }</h3>
                            </li>
                    ))}
                </ol>
                
            ) : (
                <p>No family members found.</p>
            )}

      </main>
    </div>
  );
};

export default React.memo(FamilyMembers);

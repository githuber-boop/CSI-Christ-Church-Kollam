import React, { useEffect } from "react";
// import Navbar from "../components/Navbar";
import '../styles/Login.css';
import christLogo from '../assets/christChurch.webp'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useBreadcrumb } from '../components/BreadCrumsContext';
import axios from "axios";

const Login = () => {

  const handleLogoClick = () => {
    resetBreadcrumbs(); // Clear breadcrumb memory
  };

  const [number, setNumber] = useState();
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([])
  // const [users, setUsers]
  const navigate = useNavigate();

   const fetchUser = async () => {
    try {
      const response = await axios.get(`https://church-kollam-backend.onrender.com/api/users/`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  
  const handleLogin = (e) =>  {
    e.preventDefault();
    const memberUser = users.find(u => u.number === Number(number) && u.password === password && u.role === "member");

    const adminUser = users.find(u => u.number === 12345 && u.password === 'kollamchurch' && u.role === "admin");
    
    console.log(adminUser)

    if (memberUser) {
      navigate('/member-dashboard');
    } else if (adminUser){
      navigate('/admin-dashboard');
    }else {
      navigate('/login')
    }
    
    

  } 

  return (

      <div className="container">
        {/* <Navbar/> */}
        <div className="form-container">
          <form onSubmit={handleLogin} action="/login" method="post">
          <img src={christLogo} alt="Logo" />
            <h2>LOGIN</h2>

            <label htmlFor="username">
              <b>Phone Number</b>
            </label>
            <input
              type="text"
              placeholder="Number"
              name="name"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <button type="submit">Login</button>

            <Link className="homeLink" to='/' onClick={handleLogoClick}>Home</Link>
          </form>
        </div>
      </div>

  );
};

export default Login;

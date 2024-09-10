import React, { useEffect } from "react";
// import Navbar from "../components/Navbar";
import '../styles/Login.css';
import christLogo from '../assets/christChurch.webp'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useBreadcrumb } from '../components/BreadCrumsContext';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const loginError = () => toast.error("Login Failed");


  const handleLogoClick = () => {
    resetBreadcrumbs(); // Clear breadcrumb memory
  };

  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  // const [password, setPassword] = useState('');
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
  
  const handleLogin = async(e) =>  {
    e.preventDefault();
        try {
            const response = await axios.post('https://church-kollam-backend.onrender.com/api/users/login', { number });
            const user = response.data.user;
            localStorage.setItem('userId', user._id);
            if (number == 367) {
              navigate('/admin-dashboard');
            }else {
              
              navigate('/member-dashboard'); // Redirect to member dashboard
            } // Save user ID in local storage
        } catch (error) {
            toast.error('Login failed. Please check your phone number.');
            console.error(error);
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

            {/* <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            /> */}
            <button type="submit">Login</button>

            <Link className="homeLink" to='/' onClick={handleLogoClick}>Home</Link>
          </form>
          <ToastContainer />
        </div>
      </div>

  );
};

export default Login;

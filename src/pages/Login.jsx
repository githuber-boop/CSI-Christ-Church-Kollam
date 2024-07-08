import React from "react";
// import Navbar from "../components/Navbar";
import '../styles/Login.css';
import christLogo from '../assets/christChurch.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) =>  {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();
    
    const memberUser = users.find(u => u.number === number && u.password === password && u.role === "member");
    const adminUser = users.find(u => u.number === '12345' && u.password === 'hey' && u.role === "admin");
    
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
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

            <Link className="homeLink" to='/'>Home</Link>
          </form>
        </div>
      </div>

  );
};

export default Login;

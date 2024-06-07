import React from 'react'
import Navbar from '../components/Navbar'
import loginBg from '../assets/login-bg.png'

const Login = () => {
  return (
    <div className="image-container"   
    style={{
        backgroundImage: `url(${loginBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'100vh'
      }}
    >

        <div className='container'>
            <Navbar/>
            <form action="/login" method="post">
  <h2>LOGIN</h2>
  <div className="container">
    <label htmlFor="uname">
      <b>Username</b>
    </label>
    <input type="text" placeholder="Enter Username" name="uname" required="" />
  </div>
  <div className="container">
    <label htmlFor="psw">
      <b>Password</b>
    </label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      required=""
    />
  </div>
  <button type="submit">Login</button>
</form>



        </div>
    </div>
  )
}

export default Login
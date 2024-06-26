import React from 'react'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
<div className="image-container"  >

<div className='container'>
  <Navbar/>
  <form action="/login" method="post">
  <h2>LOGIN</h2>

    <label htmlFor="username">
      <b>Username</b>
    </label>
    <input type="text" placeholder="Enter Username" name="username" required />


    <label htmlFor="psw">
      <b>Password</b>
    </label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      required
    />
  <button type="submit">Login</button>
</form>



  </div>
</div>
  )
}

export default Login
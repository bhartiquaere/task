import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
    const [email, setEmail] = useState('subhra@gmail.com');
    const [password, setPassword] = useState('123456');
    const navigate = useNavigate()
  
    const onFormSubmit = () => {
      const data = {
        email: email,
        password: password
      }
      if (email === "subhra@gmail.com" && password === "123456") {
        navigate("/deals-dashboard")
        localStorage.setItem("token","subhraverma");
      } else {
        console.log("not match email and password")
      }
      console.log(data, "login")
    }
  return (
    <>
     <div class="account-page">
     <div class="main-wrapper">
<div class="account-content">
<div class="container">

<div class="account-logo">
<a href="#"><img src="assets/img/logo2.png" alt="Dreamguy's Technologies"/></a>
</div>

<div class="account-box">
<div class="account-wrapper">
<h3 class="account-title">Login</h3>
<p class="account-subtitle">Access to our dashboard</p>

<form onSubmit={onFormSubmit}>
<div class="input-block mb-4">
<label class="col-form-label">Email Address</label>
<input class="form-control" type="email"
 value={email}
 onChange={(e)=>setEmail(e.target.value)}
/>
</div>
<div class="input-block mb-4">
<div class="row align-items-center">
<div class="col">
<label class="col-form-label">Password</label>
</div>
<div class="col-auto">
<a class="text-muted" href="forgot-password.html">
Forgot password?
</a>
</div>
</div>
<div class="position-relative">
<input class="form-control" type="password"
 value={password}
 onChange={(e)=>setPassword(e.target.value)}
  id="password"/>
<span class="fa-solid fa-eye-slash" id="toggle-password"></span>
</div>
</div>
<div class="input-block mb-4 text-center">
<button class="btn btn-primary account-btn" type="submit">Login</button>
</div>
<div class="account-footer">
<p>Don't have an account yet? <a href="register.html">Register</a></p>
</div>
</form>

</div>
</div>
</div>
</div>
</div> 
     </div>

   </>
  )
}

export default SingIn;
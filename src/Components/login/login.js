import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export function Login() {
  function handlelogin(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "") {
      alert("Email must be filled");
    } else if (password === "") {
      alert("Password must be filled");
    } else {
      alert("Login Successful!"); // Displaying success message
      window.location.href = '/'; // Redirecting to the home page
    }
  }

  return (
    <>
      <div className='background-container d-flex justify-content-center align-items-center min-vh-100'>
        <div className="containers p-3 border rounded-5 shadow-lg" style={{ maxWidth: '500px', color: '#fff' }}>
          <form onSubmit={handlelogin} className="p-4">
            <div className="text-center mb-4">
              <i className="ri-pantone-line"></i> <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2560px-Trivago.svg.png' width='200px' height='50px' alt='TRIVAGO BOOKING' />
              <p className="pa">Find Your Perfect Stay</p>
            </div>
            <div className="mb-3">
              <input type="text" id="email" className="form-control form-control-lg fs-6" placeholder="Email address" />
            </div>
            <div className="mb-3">
              <input type="password" id="password" className="form-control form-control-lg fs-6" placeholder="Password" />
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="formCheck" />
                <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
              </div>
              <div className="forgot">
                <small><a href="#">Forgot Password?</a></small>
              </div>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-lg w-100 fs-6" style={{ backgroundColor: '#003580' }}>Login</button>
            </div>
            <div className="text-center">
              <small>Don't have an account? <Link to="/signup">Sign Up</Link></small>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

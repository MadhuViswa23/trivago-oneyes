import React from "react";
import './register.css';
import { Link } from "react-router-dom";

export function Register() {
  function inserted(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var category = document.getElementById("category").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validation logic
    if (username === "") {
      alert("Please enter username");
    } else if (category === "") {
      alert("Please enter category");
    } else if (email === "") {
      alert("Please enter email");
    } else if (password === "") {
      alert("Please enter password");
    } else {
      // Simulate successful registration by showing an alert
      alert("Registration Successful!");
    }
  }

  return (
    <>
      <div className='background-container d-flex justify-content-center align-items-center min-vh-100'>
        <div className="containers p-3 border rounded-5 shadow-lg" style={{ maxWidth: '500px', color: '#fff' }}>
          <form onSubmit={inserted} className="p-4">
            <div className="text-center mb-4">
              <i className="ri-pantone-line"></i> <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2560px-Trivago.svg.png' width='200px' height='50px' alt='TRIVAGO BOOKING' />
              <p className="pa">Find Your Perfect Stay</p>
            </div>
            <div className="mb-3">
              <input type="text" id="username" className="form-control form-control-lg fs-6" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <input type="text" id="category" className="form-control form-control-lg fs-6" placeholder="Enter category" />
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
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-lg w-100 fs-6" style={{ backgroundColor: '#003580' }}>Register</button>
            </div>
            <Link to="/login" className="btn btn-link  mt-3">Back</Link>
          </form>
        </div>
      </div>
    </>
  );
}

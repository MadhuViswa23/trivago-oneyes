import React from 'react';
import './navbar.css';
import coa from './Assets/COA-agent-pic.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <>
      
      
       
        <nav className="navbar navbar-expand-lg navbar-light nav sticky-top nav-color ">
          <a className="navbar-brand" href="#"><span className='logo-span'><a href="/"><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2560px-Trivago.svg.png' width='100px' height='50px' alt='TRIVAGO BOOKING' /></a></span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
        

          <ul className="navbar-nav m-auto">
  <li className="nav-item ">
   
  </li>
  <li className="nav-item ">
    
  </li>
 
  
</ul>
<ul className="navbar-nav ml-auto">
	          <li className="nav-item"><a href="/" class="nav-link" style={{  color: 'black' }}>Home</a></li>
	         
	          
	        </ul>

            <ul className="navbar-nav mr-auto">

            <li className="nav-item dropdown active p-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Login/Register
                </a>
                <div className="dropdown-menu  drop">
                <Link className="nav-link " to='/login' style={{  color: 'darkBlue' }}>
                  <a className="dropdown-item">Login</a>
                  </Link>
                  <Link className="nav-link " to='/registerd' style={{  color: 'darkBlue' }}>
                  <a className="dropdown-item">Register</a>
                 </Link>




                </div>
              </li>
              <li className="nav-item dropdown active p-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                 Gallery
                </a>
                <div className="dropdown-menu  drop">
                  <a className="dropdown-item" href="/rooms">Rooms</a>
                  <a className="dropdown-item" href="/rooms">Hotels</a>
                  <a className="dropdown-item" href="/rooms">Cars</a>
                  <a className="dropdown-item" href="/rooms">Cruises</a>
                  <a className="dropdown-item" href="/rooms">Tours</a>
                  <a className="dropdown-item" href="/rooms">Vacation Rentals</a>
                  <a className="dropdown-item" href="/rooms">Travel Guides</a>





                </div>
              </li>
              <li className="nav-item dropdown active p-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Explore
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul>
                  <li><a className="dropdown-item" href="#">Exclusive Offers</a></li>
    <li><a className="dropdown-item" href="#">Travel Vouchers</a></li>
    <li><a className="dropdown-item" href="#">Hotel Packages</a></li>
    <li><a className="dropdown-item" href="#">Domestic Getaways</a></li>
    <li><a className="dropdown-item" href="#">Adventure Escapes</a></li>
    <li><a className="dropdown-item" href="#">Solo Journeys</a></li>
    <li><a className="dropdown-item" href="#">Family Vacations</a></li>
                  </ul>
                 
                  
                </div>
             
              </li>
              <div className="collapse navbar-collapse" id="ftco-nav">
	        
          <ul className="navbar-nav ml-auto">
	         
	          <li className="nav-item"><a href="/abouts" class="nav-link" style={{  color: 'black' }}>About us</a></li>
           
            <li className="nav-item"><a href="/rooms" class="nav-link" style={{  color: 'black' }}>Rooms</a></li>
            <li className="nav-item"><a href="/contact" class="nav-link" style={{  color: 'black' }}>Contact</a></li>
          
	        </ul>
	      </div>
            </ul>
           
          </div>
        </nav>
      
    </>
  );
}

export default Navbar;

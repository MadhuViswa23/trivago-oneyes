import React,{useEffect} from 'react'

import './footer.css';

//AOS imported
import AOS from 'aos';
import 'aos/dist/aos.css';

//FontAwesomeIcon imported
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons"; 
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"; 
import {faCaretRight} from "@fortawesome/free-solid-svg-icons"; 

//image upload
import pay from './Assets/footer-logo-desktop.webp';

function Footer() {

   // Initialize AOS  
  useEffect(() => {
    AOS.init(); 
  }, []);

  //every year automatically change
  const year=new Date();


  return (

    <>
     <section id="contact">
         <footer id="footer" className="footer">
      <div className="parent_footer">
        

       

        
          
      <div className="container mb-5">
  <div className="row gy-4">
    <div className="col-lg-5 col-md-12 footer-info pt-5">
      <a href="#" className="logo d-flex align-items-center">
        <span><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2560px-Trivago.svg.png' width='100px' height='250px' alt='TRIVAGO BOOKING' /></span>
      </a>
      <p>Traveling opens up new horizons, allowing individuals to explore diverse cultures, cuisines, and landscapes.</p>
      <div className="social-links d-flex mt-4">
        <h3 className='pr-2'>Connect with Us</h3>
        <a href="#" className="twitter "><i><FontAwesomeIcon icon={faTwitter} /></i></a>
        <a href="#" className="facebook"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
        <a href="#" className="instagram"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
        <a href="#" className="linkedin"><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
      </div>
    </div>

    <div className="col-lg-2 col-6 footer-links pt-5 ">
      <h4 >Quick Links </h4>
      <ul className='list_1'>
        
        <li><a href="#">Top U.S. Destinations</a></li>
        
        <li><a href="#">Site Directories</a></li>
        <li><a href="#">Stay Connected</a></li>
        <li><a href="#">International Sites</a></li>
      </ul>
    </div>

    <div className="col-lg-2 col-6 footer-links pt-5">
      <h4>Queries</h4>
      <ul>
        <li><a href="#">Site Directories</a></li>
        <li><a href="#">Stay Connected</a></li>
        <li><a href="#">International Sites</a></li>
        
      </ul>
    </div>

    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start pt-5">
      <h4>Contact Us</h4>
      <p>
        From Indian<br/>
        usa<br/>
        
        <strong>Phone :</strong> +91 675 787 76<br/>
        <strong>Email :</strong> trivago.in<br/>
      </p>

    </div>

  </div>
</div>
        <div className="below_logos">
          <div className="list_1">
          <a href="">Press</a>
            <a href="">Investor relations</a>
            <a href="">Cyber Security</a>
            <a href="">Coronavirus (COVID-19) travel advice</a>
            <a href="">Company</a>
            <a href="">Jobs</a>
            <a href="">Press</a>
            <a href="">Investor relations</a>
          </div>
          <div className="list_2">
            <a href="">Mobile apps - searching on the go</a>
            <a href="">trivago Business Studio</a>
            <a href="">Press</a>
            <a href="">Investor relations</a>
            <a href="">Cyber Security</a>
            <a href="">Coronavirus (COVID-19) travel advice</a>
          </div>
          <div className="list_3">
            <a href="">Help</a>
            <a href="">Learn how trivago works</a>
            <a href="">Terms and conditions</a>
            <a href="">Legal information</a>
            <a href="">Do Not Sell My Personal Information</a>
            <a href="">Privacy notice</a>
           
          </div>
        </div>

        <div className="footer_last_div">
          <svg width="102" height="32" viewBox="0 0 102 32" className="mx-auto" style={{ filter: 'brightness(0) invert(1)' }}>
            {/* SVG paths */}
          </svg>
          <p className="copyRightText">
            Copyright 2024 trivago | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </section>
    </>
  )
}

export default Footer
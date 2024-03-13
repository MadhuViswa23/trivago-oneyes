import React from "react";
import { Container, Row, Col } from "reactstrap";
import './contact.css'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Contact = () => {
  useEffect(()=>{
    Aos.init();
   },[])
  return (
    <>

<div className="row d-flex justify-content-center" data-aos="zoom-out-up">
      <div className="menu-content pt-4 col-lg-12">
        <div className="color-destinations text-center">
		<h1 className="text-dark-blue">Contact Us</h1>
        
        </div>
      </div>
    </div>  
    <div className="contact"data-aos="zoom-out-up" >
      <Container>
        <Row>
          <Col md="6">
            <form id="request" className="main_form">
              <Row>
                <Col md="12">
                  <input className="contactus" placeholder="Name" type="text" name="Name" />
                </Col>
                <Col md="12">
                  <input className="contactus" placeholder="Email" type="text" name="Email" />
                </Col>
                <Col md="12">
                  <input className="contactus" placeholder="Phone Number" type="text" name="Phone Number" />
                </Col>
                <Col md="12">
                  <textarea className="textarea" placeholder="Message" name="Message" />
                </Col>
                <Col md="12">
                   
			  <li className="d-flex justify-content-between align-items-center">
          <a href="#" className="price-btn" style={{ textAlign: "center", backgroundColor: "darkblue", color: "white", padding: "5px 10px", borderRadius: "5px"}}>Send</a>
        </li>
                </Col>
              </Row>
            </form>
          </Col>
          <Col md="6" >
            <div className="map_main">
              <div className="map-responsive">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="500" height="400" frameborder="0" style={{border:"0", width:"100%"}} allowfullscreen=""></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
    
    </>
  );
};

export default Contact;

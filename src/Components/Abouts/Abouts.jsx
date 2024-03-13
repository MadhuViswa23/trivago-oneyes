import React,{useEffect} from 'react';
import "./abouts.css";
import aboutImg from "./assets/bg_2.jpg";
import { Container, Row, Col } from "reactstrap";

import CountUp from "react-countup";
import Aos from "aos"
import 'aos/dist/aos.css'


const AboutUs = () => {
	useEffect(()=>{
        Aos.init();
       },[])
  return (
   <>

   
   <section id="a">
      <Container>
        <Row>
          <Col lg="6" md="6" data-aos="zoom-out-right">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6" data-aos="zoom-out-left">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Trivago is a popular online travel platform that helps users search and compare prices for hotels, flights, and rental cars. It aggregates information from various travel websites and provides users with a comprehensive list of options, allowing them to find the best deals for their travel needs. Trivago's user-friendly interface and extensive search capabilities make it a go-to destination for travelers looking to save time and money when planning their trips.
              </p>

              <div className="about__counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Happy Guests</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">      &nbsp; &nbsp; Rooms</p>
                  </div>
                </div>

                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Staffs</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Destination</p>
                  </div>
				  
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
	 
    </section>
	</>
  );
};

export default AboutUs;

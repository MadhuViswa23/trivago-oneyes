import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import Aos from "aos"
import 'aos/dist/aos.css'

import "./choose.css";

const Choose = () => {
  useEffect(()=>{
    Aos.init();
   },[])
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6"data-aos="zoom-out-right">
            <div className="content-container" id="choose">
            <h2 className="text-dark-blue">Why Choose Trivago Hotels</h2>
<p>
  Trivago Hotels has been providing exceptional accommodation experiences and catering to guests' needs for over 15 years. Here’s why we stand out:
  <ul>
    <li>Personalized Service: At Trivago Hotels, we pride ourselves on offering personalized attention with a focus on your comfort and satisfaction.</li>
    <li>Flexible Booking: Our booking system is designed to adapt to your schedule, providing convenience for your travel plans.</li>
    <li>Affordable Luxury: Experience exceptional service and amenities without compromising affordability at Trivago Hotels.</li>
    <li>Glowing Reviews: Consistently rated 5 stars by our guests, our commitment to excellence reflects in their positive feedback.</li>
  </ul>
</p>

            </div>
          </Col>

          <Col lg="6" md="6" data-aos="zoom-out-left">
            <div className="choose__video">
              <ReactPlayer
                url="https://youtu.be/LQikZZIia2k?si=tGODA4Ca1VWW8837"
                controls
                width="100%"
                height="350px"
                playing={showVideo}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Choose;

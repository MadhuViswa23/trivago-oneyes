import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css';



function Banner() {
  return (
    <Carousel >
      
      {/* <Carousel.Item>
      <Carousel.Caption className="text-left">
      <div >
  <h3>Second slide label</h3>
  <p>Description for second slide</p>
</div>
            </Carousel.Caption>
        <img
          className="d-block  w-100 smaller-height "
          src={img2}
          alt="Second slide"
        />
     
      </Carousel.Item> */}
     
      <Carousel.Item>
        <img
          className="d-block w-100   smaller-height "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a7/1a/90/goa-quick-guide-largejpg.jpg?w=700&h=-1&s=1"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Description for second slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 smaller-height "
          src="https://www.shutterstock.com/image-photo/wooden-cottage-sea-view-tropical-260nw-394081615.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Description for second slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Item components for additional images */}
    </Carousel>
  );
}

export default Banner;

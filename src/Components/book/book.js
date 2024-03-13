
import React,{useEffect} from 'react';

import './book.css'




import Aos from "aos"
import 'aos/dist/aos.css'
import card1 from './Assets/card1.jpg'
import card2 from './Assets/card2.jpg'
import card3 from './Assets/card3.jpg'
import card4 from './Assets/card4.jpg'
import card5 from './Assets/card5.jpg'
import card6 from './Assets/card6.jpg'

export default function Book(){

    useEffect(()=>{
        Aos.init();
       },[])

  return (
   <>

<section className="destinations-area section-gap">
  <div className="container">	
    <div className="row d-flex justify-content-center">
      <div className="menu-content pt-4 col-lg-12">
        <div className="color-destinations text-center">
		<h1 className="text-dark-blue" >Our Hotels</h1>
          <p className='small-size'>Embark on a journey to the world's top hotels, where luxury, comfort, and exceptional service await.</p>
        </div>
      </div>
    </div>      

    <div className="row pt-4" data-aos="zoom-out-right">
      <div className="col-lg-4 ">
        <div className="single-destinations">
          <div className="thumb">
            <img src={card1} alt=""/>
          </div>
          <div className="details">
            <h5>Radisson Blu</h5>
            <p> Dublin, Ireland</p>
            <ul className="package-list pl-1 pr-2">
              <li className="d-flex justify-content-between align-items-center">
			  <span>Floorsize</span>
                <span>22m² 1 full bed</span>
              </li>
             
              <li className="d-flex justify-content-between align-items-center">
          <a href="#" className="price-btn" style={{ textAlign: "center", backgroundColor: "darkblue", color: "white", padding: "5px 10px", borderRadius: "5px", width: "100%" }}>$570</a>
        </li>												
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-4" data-aos="zoom-out-right">
        <div className="single-destinations">
          <div className="thumb">
            <img src={card2} alt="" height="175px"/>
          </div>
          <div className="details">
            <h5>travelodge</h5>
            <p>Dublin, IRELAND</p>
            <ul className="package-list pl-1 pr-2">
              <li className="d-flex justify-content-between align-items-center">
                <span>Floorsize</span>
                <span>22m² 1 full bed</span>
              </li>
             
			  <li className="d-flex justify-content-between align-items-center">
          <a href="#" className="price-btn" style={{ textAlign: "center", backgroundColor: "darkblue", color: "white", padding: "5px 10px", borderRadius: "5px", width: "100%" }}>$570</a>
        </li>												
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-4" data-aos="zoom-out-right">
        <div className="single-destinations">
          <div className="thumb">
            <img src={card3}  height="175px" alt=""/>
          </div>
          <div className="details">
            <h5>Hilton hotel</h5>
            <p>New york city,USA</p>
            <ul className="package-list pl-1 pr-2">
              <li className="d-flex justify-content-between align-items-center">
                <span>Floorsize</span>
                <span>22m² 1 full bed</span>
              </li>
             
			  <li className="d-flex justify-content-between align-items-center">
          <a href="#" className="price-btn" style={{ textAlign: "center", backgroundColor: "darkblue", color: "white", padding: "5px 10px", borderRadius: "5px", width: "100%" }}>$570</a>
        </li>												
            </ul>
          </div>

       
                        
        </div>
        
      </div>
      <div className="col-lg-4" data-aos="zoom-out-left">
                            <div className="single-destinations">
                                <div className="thumb">
                                    <img src={card4} alt="" height="175px" />
                                </div>
                                <div className="details">
                                    <h5>Ritz Carlton</h5>
                                    <p>Los Angeles, USA</p>
                                    <ul className="package-list pl-1 pr-2">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Floorsize</span>
                                            <span>22m² 1 full bed</span>
                                        </li>

                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" className="price-btn" style={{ textAlign: "center", backgroundColor: "darkblue", color: "white", padding: "5px 10px", borderRadius: "5px", width: "100%" }}>$570</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-out-left">
                            <div className="single-destinations">
                                <div className="thumb">
                                    <img src={card5} alt="" height="175px" />
                                </div>
                                <div className="details">
                                    <h5>Waldorf Astoria</h5>
                                    <p>Paris, France</p>
                                    <ul className="package-list pl-1 pr-2">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Floorsize</span>
                                            <span>22m² 1 full bed</span>
                                        </li>

                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" className="price-btn" style={{ textAlign: "center", backgroundColor: "darkblue", color: "white", padding: "5px 10px", borderRadius: "5px", width: "100%" }}>$570</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-out-left">
                            <div className="single-destinations">
                                <div className="thumb">
                                    <img src={card6} alt="" height="175px" />
                                </div>
                                <div className="details">
                                    <h5>Four Seasons Resort</h5>
                                    <p>Bora Bora, French Polynesia</p>
                                    <ul className="package-list pl-1 pr-2">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Floorsize</span>
                                            <span>22m² 1 full bed</span>
                                        </li>

                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" className="price-btn" style={{ textAlign: "center", backgroundColor: "darkblue", color: "white", padding: "5px 10px", borderRadius: "5px", width: "100%" }}>$570</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    </div>
  </div>	
</section>
	
   
   </>
  )
}


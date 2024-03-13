import React, { useEffect } from 'react';
import './maincard.css';
import Aos from "aos";
import 'aos/dist/aos.css';

import card1 from './Assets/image1.jpg';
import card2 from './Assets/image2.jpg';
import card3 from './Assets/image3.jpg';
import card4 from './Assets/image4.jpg';
import card5 from './Assets/image5.jpg';
import card6 from './Assets/image6.jpg';

const Maincard = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='container'>
            <div className=''>
                <div className="row d-flex justify-content-center">
                    <div className="menu-content pt-4 col-lg-12">
                        <div className="color-destinations text-center">
                            <h1 className="text-dark-blue">Top Tourist Destinations</h1>
                            <p className='small-size'>Explore these amazing destinations for an unforgettable travel experience.</p>
                        </div>
                    </div>
                </div>
                <div className='card-color m-4'>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        {/* Card 1 */}
                        <CardComponent
                            imgSrc={card1}
                            place="Santorini, Greece"
                            description="Experience breathtaking sunsets over the Aegean Sea."
                        />
                        {/* Card 2 */}
                        <CardComponent
                            imgSrc={card2}
                            place="Kyoto, Japan"
                            description="Immerse yourself in ancient temples and serene gardens."
                        />
                        {/* Card 3 */}
                        <CardComponent
                            imgSrc={card3}
                            place="Maui, Hawaii"
                            description="Discover pristine beaches and lush rainforests."
                        />
                        {/* Card 4 */}
                        <CardComponent
                            imgSrc={card4}
                            place="Machu Picchu, Peru"
                            description="Explore the awe-inspiring ruins of the Inca civilization."
                        />
                        {/* Card 5 */}
                        <CardComponent
                            imgSrc={card5}
                            place="Safari in Serengeti, Tanzania"
                            description="Witness the beauty of African wildlife in its natural habitat."
                        />
                        {/* Card 6 */}
                        <CardComponent
                            imgSrc={card6}
                            place="Paris, France"
                            description="Indulge in art, culture, and gourmet cuisine in the City of Light."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const CardComponent = ({ imgSrc, place, description }) => (
    <div className="col mt-3">
        <div className="card h-100 outline-style" data-aos="zoom-in-up">
            <div className="zoom-effect"> 
                <img src={imgSrc} className="card-img-top" alt={place} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{place}</h5>
                <p className="card-text">{description}</p>
                <div className='pl-5'>
                    <p className="card-text d-flex justify-content-center align-content-center align-items-center pr-5 ">explore deals</p>
                </div>
            </div>
        </div>
    </div>
);

export default Maincard;

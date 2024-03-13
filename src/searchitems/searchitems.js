
// import "./searchitems.css";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";


// const SearchItem = () => {
//   const [getdata, setGetdata] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3006/get')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data); 
//         setGetdata(data);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="searchItem">
//       {getdata.map((item, index) => (
//         <div key={index}>
//           <img
//             src={item.image} 
//             alt=""
//             className="siImg"
            
//           />
//           <div className="siDesc">
//             <h1 className="siTitle">{item.hotelname}</h1>
//             <span className="siDistance">500m from {item.place}</span>
//             <span className="siTaxiOp">Free airport taxi</span>
//             <span className="siSubtitle">
//               Studio Apartment with Air conditioning
//             </span>
//             <span className="siFeatures">
//               Entire studio • 1 bathroom • {item.floorsize}
//             </span>
//             <span className="siCancelOp">Free cancellation </span>
//             <span className="siCancelOpSubtitle">
//               You can cancel later, so lock in this great price today!
//             </span>
//           </div>
//           <div className="siDetails">
//             <div className="siRating">
//               <span>Excellent</span>
//               <button>8.9</button>
//             </div>
//             <div className="siDetailTexts">
//               <span className="siPrice"> {item.rent}</span>
//               <span className="siTaxOp">Includes taxes and fees</span>
//               <div className="buttonContainer">
//               <button className="enroll" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'15px' }}>
//               <Link to={`/viewmore/${item.id}`} className='siCheckButton noUnderline' style={{ textAlign: 'center', width: '120px' }}>
//   See Availability
// </Link>
// <Link to="/book/1" className='enroll gap-2' style={{ width: '120px' }}>
//   Reserve
// </Link>

// </button>

        
      
    
//   </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchItem;



import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./searchitems.css";
import { useEffect } from "react";

const SearchItem = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
  <>
    <div className="searchItem"  data-aos="zoom-out-right">
      <img
        src="https://imgfl.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_240,q_auto,w_320//partnerimages/16/14/1614719226.jpeg"
        alt=""
        className="siImg"
      />
      <div className="siDesc ">
        <h1 className="siTitle">About Hotel Adalya Elite Lara</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton darkBlue">See availability</button>

        </div>
      </div>
    </div>





    <div className="searchItem"  data-aos="zoom-out-right">
      <img
        src="https://imgfl.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_240,q_auto,w_320//partnerimages/16/69/1669580458.jpeg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle"> Hotel Adalya Elite Lara</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.2</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton darkBlue">See availability</button>
        </div>
      </div>
    </div>
    <div className="searchItem"  data-aos="zoom-out-right">
      <img
        src="https://imgfl.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_240,q_auto,w_320//uploadimages/53/41/53411102.jpeg"
        alt=""
        className="siImg"
      />
      <div className="siDesc" >
        <h1 className="siTitle">Hotel Bécquer</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton darkBlue">See availability</button>
        </div>
      </div>
    </div>
    <div className="searchItem" data-aos="zoom-out-right" >
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton darkBlue">See availability</button>
        </div>
      </div>
    </div>
  
  </>
    
  );
};

export default SearchItem;
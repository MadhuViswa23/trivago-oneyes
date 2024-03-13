import React,{useEffect, useState} from 'react';

import './headers.css';
import Aos from "aos"
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useNavigate } from 'react-router-dom';

import {Link} from 'react-router-dom';
import Company from '../Company-section/Company';
import Featured from '../featured/featured';
import AboutUs from '../Abouts/Abouts';
import Choose from '../chooseus/choose';
const Headers = () => {
  useEffect(()=>{
    Aos.init();
   },[])
   const [destination, setDestination] = useState("");
   const [openDate, setOpenDate] = useState(false);
   const [date, setDate] = useState([
       {
           startDate: new Date(),
           endDate: new Date(),
           key: 'selection'
       }
   ]);
   const [openOptions, setOpenOptions] = useState(false);
   const [options, setOptions] = useState({
       guest: 2,
       rooms: 1,
   });

   const handleOption = (name, operation) => {
       setOptions((prev) => {
           return {
               ...prev,
               [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
           };
       });
   };

   const navigate = useNavigate();
   const handleSearch = () => {
       navigate("/hotels", { state: { destination, date, options } });
   }
  return (
    <>
    
    <div className="header-container">
                <h2 className="header-title">We compare hotel prices from 100s of sites</h2>
                
            </div>
            <p className="header-subtitle">  We’ll do the searching. You do the saving.
 </p>
  

            <div className='container bg-white'>
                <div className='row bg-white shadow'>
                    <div className='col-sm-12 col-md-3'>
                        <div className='headerSearchItem p-3'>
                            <FontAwesomeIcon icon={faBed} className='headerIcon' />
                            
                            <label className="mr-2">Destination</label>
                            <input
                                type='text'
                                // placeholder='Where to?'
                                className='headerSearchInput form-control border-0'
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3'>
                        <div className='headerSearchItem p-3'>
                            <label className="mr-2">Check-in check-out</label>
                            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                            <span onClick={() => setOpenDate(!openDate)} className='headerSearchItem'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                                date[0].endDate,
                                "MM/dd/yyyy"
                            )}`}</span>
                            {openDate &&
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                    minDate={new Date()}
                                />}
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3'>
                        <div className='headerSearchItem p-3'>
                            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                            <span
                                onClick={() => setOpenOptions(!openOptions)}
                                className='headerSearchText'>{`${options.guest} guest · ${options.rooms} rooms`}  </span>
                            {openOptions && <div className='options'>
                                <div className='optionItem'>
                                    <span className='optionText'>Guests</span>
                                    <div className='optionCounter'>
                                        <button
                                            disabled={options.guest <= 1}
                                            className='optionCounterButton btn btn-secondary'
                                            onClick={() => handleOption("guest", "d")}
                                        >-</button>
                                        <span className='optionCounterNumber'>{options.guest}</span>
                                        <button
                                            className='optionCounterButton btn btn-secondary'
                                            onClick={() => handleOption("guest", "i")}
                                        >+</button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText'>Rooms</span>
                                    <div className='optionCounter'>
                                        <button
                                            disabled={options.rooms <= 1}
                                            className='optionCounterButton btn btn-secondary'
                                            onClick={() => handleOption("rooms", "d")}
                                        >-</button>
                                        <span className='optionCounterNumber'>{options.rooms}</span>
                                        <button
                                            className='optionCounterButton btn btn-secondary'
                                            onClick={() => handleOption("rooms", "i")}
                                        >+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3'>
                        <div className='headerSearchItem p-3'>
                            <button className='headerBtn btn btn-primary' onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
            <Company />
            <br/>
            <br/>
            <Featured/>
            
           
           
    </>
   
  );
};

export default Headers;

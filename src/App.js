import "./App.css";
import React from "react";

//Bootstrap imported
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

//react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


//All Components import him
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";



import Footer from "./Components/Footer/Footer";

import Maincard from "./Components/Maincard/Maincard";




import Abouts from "./Components/Abouts/Abouts";

import Featured from "./Components/featured/featured";
import Book from "./Components/book/book";
import Choose from "./Components/chooseus/choose";
import Contact from "./Components/contact/contact";
import MoreCities from "./Components/more/more";
import { Login } from "./Components/login/login";
import { Register } from "./Components/register/register";
import SearchItem from "./searchitems/searchitems";
import Headers from "./Components/Headers/headers";





function App() {
  return (
    <>
    <div className="hold">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={[
<Headers/>,
      <Book/>,
              
            <br/>,
            <br/>,
              <Abouts/>,
              <br/>,
              <br/>,
              <br/>,
              <Choose/>,
              
              <Maincard />,
              <Contact/>,
              <br/>,
              <br/>,
             
              <MoreCities/>,
              <br/>,
              <br/>,
              <Footer/>
              
          
        
            ]}
          />
           <Route
            path="/abouts"
            element={[
              <Abouts/>,
              <Choose/>,
              
              <Maincard />,
              <Contact/>,
              <br/>,
              <br/>,
             
              <MoreCities/>,
              <br/>,
              <br/>,
              <Footer/>
            
              
            ]}/>

            <Route
            path="/rooms"
            element={[
              <Maincard/>,
              <Contact/>,
              <br/>,
              <br/>,
             
              <MoreCities/>,
              <br/>,
              <br/>,
              <Footer/>
            
            ]}/>
            
<Route 
path="/hotels"
element={[
  <SearchItem/>,
  <Contact/>,
              <br/>,
              <br/>,
             
              <MoreCities/>,
              <br/>,
              <br/>,
              <Footer/>
]}
            />
            <Route
            path="/contact"
            element={[
              <Contact/>,
              <br/>,
              <br/>,
             
              <MoreCities/>,
              <br/>,
              <br/>,
             <Footer/>
              
            ]}
          />
          <Route
            path="/home"
            element={[
              <Home />
            ]}
          />
         
          <Route path="/login" element={[<Login />, <Footer />]} />
          <Route path="/registerd" element={[<Register />, <Footer />]} /> 
          
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;

import "./navbar.css";
import {Link} from "react-router-dom";
import Fetures from "../Fetures/fetures";
import Footer from "../Footer/footer";

import React from 'react';


// // <Anchor>
// <Link href="#components-anchor-demo-basic" title="Basic demo" />
// <Link href="#components-anchor-demo-static" title="Static demo" />
// <Link href="#API" title="API">
//   <Link href="#Anchor-Props" title="Anchor Props" />
//   <Link href="#Link-Props" title="Link Props" />
// </Link>
// </Anchor>
function NavBar() {
    return ( 

        <div id="navBar">
        <div id="nav">
        <div id="logo">
           <img style={{
            width:"15vw",
            height:"13vh",
             marginTop:"1.2%"
            
           }}
           src="./logo.jpeg"/>

        </div>
      <div id="search">
      <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
      </div>
        <div id="actions">
           <h2>

          <anchor>

          
          <Link  className="act"   href="fetures">
            HOME
          </Link>
            
          <Link to="/fetures" className="act">
          FEATURES
            </Link>

            <Link to="/mobileApp" className="act">
            MOBILE APP
            </Link>

            <Link to="/contact" className="act">
            CONTACT US
            </Link>

            <Link to="/start" className="act">
            GET STARTED
            </Link>

            <Link to="/start" className="act">
            LOGIN
            </Link>
            </anchor>
            </h2>

        </div>
        
        </div>
        <div id="ads">
            <img src="./background.jpg" style={{
                marginTop:"15.4vh",
                width:"100%",
                height:"65vh",
            }}/>
        </div>
        <div id="trial">
          <div id="centerTrial">
            
            <h1 style={
              {
                color:"white"
              }
            }>
              Start Your Free
            </h1>
           
            
            <button id="trialButton">
              <h1>Trial Now!</h1>
            </button>

          </div>
        </div>
        <div>
        <img src="./home.png" style={{
                marginTop:"20vh",
                width:"100%",
                height:"65vh",
              
            }}/>
        </div>
    <Fetures id="fetures"/>
    <Footer/>


        </div>
        
        
     );
}

export default NavBar

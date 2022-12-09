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
           <h1>

        

          
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
      
            </h1>

        </div>
        
        </div>
        {/* <div id="ads">
            <img src="./background.jpg" style={{
                marginTop:"15.4vh",
                width:"100%",
                height:"65vh",
            }}/>
        </div>  */}
 {/* Carousel */}


<div  >
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./background.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./home.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="attendance.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

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

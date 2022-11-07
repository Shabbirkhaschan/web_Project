import "./navbar.css";
import {Link} from "react-router-dom";
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

        <div id="actions">
 
          <Link to="/home" className="act">
            HOME
          </Link>
            
          <Link to="/fect" className="act">
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

            <Link to="/login" className="act">
            LOGIN
            </Link>

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
        <div class="card-group">
  <div class="card">
    <img src="./mud.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Multiuser</h5>
      <p class="card-text">Schools Management System provides the multi user system for each employee and Teacher of a School with their distinct logins. It really helps and minimize the workload</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="./Multilanguage.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Multilanguage1</h5>
      <p class="card-text">Schools Management System automatically detects your preferred language and translates the entire system in your native language. You can also change the language with..</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="./attendance.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Attendence</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
        </div>
     );
}

export default NavBar

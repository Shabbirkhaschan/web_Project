import { Link } from "react-router-dom";
import RightSide from "./rightSide";
import "./sidebar.css";



function SideBar() {


    
    
    return (
    

      <div>  

    
        <div  className="sidenav">
            <div id="logo">
               <img style={{
                width:"70px",
                height:"63px",
                marginLeft:"25px",
                
               }}
               src="./profile.png"/>
               
               <div class="dropdown">
  <button  style={{
    background:"none",
  }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    School-Admin
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Licenses</a></li>
    <li><a class="dropdown-item" href="#">Logout</a></li>
 
  </ul>
</div>
                </div>

                <div id="act">
                <Link  className="Links" to="/student"><div className="dashMenu">
           Student
                 </div></Link>
                 <Link className="Links" to="/fee"><div className="dashMenu">Fee</div></Link>
                 <Link className="Links" to="/examsCell">  <div className="dashMenu">Exams Cell</div></Link>
            <div className="dashMenu"><Link className="Links" to="/faculty">Faculty</Link></div>

            <Link className="Links" to="/attendence">  <div className="dashMenu">Attendence</div></Link>
            <Link className="Links" to="/timeTable"> <div className="dashMenu">Time Table</div></Link>
            <Link className="Links" to="/result"> <div className="dashMenu">Result</div></Link>
            <Link className="Links" to="/notification"><div className="dashMenu">Notification</div></Link>
            <Link className="Links" to="/messages">  <div className="dashMenu">Messages</div></Link>


        </div>

            </div>
     <RightSide/>
            
            </div>

            );
}

export default SideBar;
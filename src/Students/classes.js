import { stripBasename } from "@remix-run/router";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./classes.css";
function Classes() {
    
    const classes=["Nursery","Prep","1st","2nd","3rd","4th",
                   "5th", "6th","7th","8th","9th","10th"];
    
   const [classN,setClass]=useState("");
   
   const SetName=(name)=>{
    setClass(name);

   }
                   return (

        <div id="MainDiv">

            {
                classes.map((refClasses)=>
                (
                   <div id="Div">
                  
                   
                    <Link to={"/"+refClasses} id="Grids">
                    
                        {
                            
                            refClasses
                        }
                    </Link>
                   </div>  
                )
                
                )
            }
        </div>
    );
}

export default Classes;
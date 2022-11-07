import { stripBasename } from "@remix-run/router";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./classes.css";
function Classes() {
    
    const classes=["Nursery","Prep Class","1st Class","2nd Class","3rd Class","4th Class",
                   "5th Class", "6th Class","7th Class","Pre-9th Class","9th Class","10th Class"];
    
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
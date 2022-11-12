 import { useState } from "react";

// import "./time.css";
function Time(){
    const[Time, setTime]=useState([
        {Country:"Pakistan",Hours:"01"},
        {Country:"London",Hours:"01"},
        {Country:"Turekey",Hours:"01"},
        {Country:"Europe",Hours:"01"}

    ]

    const Delete=(r)=>
    {
        setTime(
            Time.filter((ref)=>

            
            (
                ref.Country!==r
            ))
        )
    }
    )
    return ( 
        <div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           >
                    {       
                        Time.map((ref)=>
                            <div style={{

                            }}>
                                <h1>
                                {
                                        ref.Country
                                }
                                </h1>
                               
                               <h2>
                                {
                                    ref.Hours
                                }
                               </h2>
                               <button onClick={()=>Delete(T.Country)}>
                                Delete
                               </button>
                            </div>

                                                                                        )
                    }

        </div>
        



    ) 
}

export default Time;
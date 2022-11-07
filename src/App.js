

import { Route,Routes } from "react-router-dom";
import Login from "./dashboard/login";
import SideBar from "./dashboard/sidebar";
import NavBar from "./NavBar/navbar"
import SeventhC from "./Students/7th";
import EightC from "./Students/8th";
import Ninth from "./Students/9th";
import Classes from "./Students/classes";
import NurseryClass from "./Students/nursery";
function App() {
  return (
    <div className="App">
      
{/* 
      <Classes/> */}
      

         
      <Routes>

        <Route path="/" element={<NavBar/>}/>
          
        
        <Route path="/start" element={<SideBar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/student" element={<Classes/>}/>
        <Route path="/Nursery" element={<NurseryClass/>}/>
        <Route path="/7th" element={<SeventhC/>}/>
        <Route path="/8th" element={<EightC/>}/>
        <Route path="/9th" element={<Ninth/>}/>


      </Routes>
     
    </div>
  );
}

export default App;

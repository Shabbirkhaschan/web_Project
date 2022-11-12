

// import {Route,Routes } from "react-router-dom";

import Time from "./Time/time";

// import Nursery from "./Class/nursery";

// import SideBar from "./Dashboard/sidebar";
// import Login from "./Login/login";
// import NavBar from "./NavBar/navbar"

// import Class from "./Students/classes";
// import Signup from "./Form/signup";
// import Footer from "./Footer/footer";
// import Prep from "./Class/prep";


function App( ) {


 
  return (
    <div className="App">
      

      
      

     
{          
      <Routes>

        <Route path="/" element={<NavBar/>}/>
          
        
        <Route path="/start" element={<Login/>}/>
        <Route path="/login" element={<SideBar/>}/>
        <Route path="/student" element={<Class/>}/>
        <Route path="/Nursery" element={<Nursery/>}/>
        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/Prep" element={<Prep/>}/>
        <Route path="/act" element={<fMain/>}/>

      </Routes> }

      {/* <Footer/> */}
      <Time/>
   
     
    </div>
  );
}

export default App;

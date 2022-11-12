import { Link } from "react-router-dom";
import "./login.css";

function Login() {
    return ( 
        <div id="loginForm">

       
        <form id="form">
  
  <div id="second">
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label" className="label">Email</label>
    
   
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" className="inputs" placeholder="Email"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label" className="label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" className="inputs" placeholder="Password"/>
    </div>
  </div>
  </div>

<Link to="/login">
           <button id="login" class="noselect">Login</button></Link>
           <Link to="/signUp">
           <button id="signup" class="noselect">Sign Up</button></Link>
</form>
</div>
     );
}

export default Login;
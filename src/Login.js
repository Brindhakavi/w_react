import React,{useState}from "react";
import "./Style.css";

const Login =() => {
    const [userName, setUserName] = useState("");
    return(
        <div className ="Login">
            <div className = "styles">
                <h3>Member Login</h3>
                <input type = "text" 
                placeholder="User Name" 
                id= "name"
                value = {userName} 
                onChange = {(e)=>{
                    console.log(e);
                    setUserName(e.target.value);
                }}
                    /><br></br>
                <input type="password" placeholder="Password" id = "name"/><br></br><br></br>
                <input type="submit" className="button" value="Submit" id = "name"/><br></br>
            </div>
        </div>
    );
}
export default Login
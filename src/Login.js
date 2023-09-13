import React,{ useEffect, useState}from "react";
import "./Style.css";

const Login =() => {
    const [userName, setUserName] = useState("");
    const [password, setPassword]= useState("");
    const [userMessage, setUserMessage]= useState("");
    const onLogin = () =>{
        if(userName ==="brindha" && password ==="brindha"){
            console.log("Login Finished");
            setUserMessage("Login Finished");
        }
        else{
            console.log("Login Failed");
            setUserMessage("Login Failed");
            setUserName("");
            setPassword("");
        }
    };
    useEffect(() => {
        if(userMessage){
            setTimeout(() => {
                setUserMessage("");
            },[4000]);
        }
    }, [userMessage]);
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
                <input type="password"
                 placeholder="Password" 
                 id = "name"
                 value = {password} 
                 onChange = {(e)=>{
                     console.log(e);
                     setPassword(e.target.value);
                 }}/>
                 <br></br><br></br>
                <input type="submit" className="button" value="Submit" id = "name" 
                onClick= {() =>onLogin()}/>
                <br></br>
                <div>{userMessage}</div>
            </div>
        </div>
    );
}
export default Login
import React from "react";
import "./Style.css";

class LoginClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            Message : ""
        };
    }
        onLogin = () => {
            if(this.state.username ==="brindha" && this.state.password ==="brindha"){
                this.setState({
                    message:"Login Success"
                });
            }
            else{
               this.setState({
                message:"Login failure"
               });
            }
        };
        // useEffect(() => {
        //     if(userMessage){
        //         setTimeout(() => {
        //             setUserMessage("");
        //         },[4000]);
        //     }
        // }, [userMessage]);
        render(){
            console.log(this.state.username, "username", this.state.password, "password");
        return(
            <div>
                    <input type = "text" 
                    placeholder="User Name" 
                    id= "name"
                    value = {this.state.username} 
                    onChange = {(e)=>{
                        console.log(e);
                   this.setState({
                    setusername: e.target.value
                   });
                    }
                        /><br></br>
                    <input type="password"
                     placeholder="Password" 
                     id = "name"
                     value = {this.state.password} 
                     onChange = {(e)=>{
                         console.log(e);
                         this.setState({  setpassword:e.target.value;
                        });
        )}
                    <input type="submit" className="button" value="Submit" id = "button" 
                    onClick= {() =>this.onLogin()}/>
                    <br></br>
                    <div>{this.state.Message}</div>
                </div>
            </div>
    )    }
}

    export default LoginClass;
        
    

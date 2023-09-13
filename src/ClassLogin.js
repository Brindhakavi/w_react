import React from "react";
import "./Style.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }
  onLogin = () => {
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.setState({
        message: "Login Success"
      });
    } else {
      this.setState({
        message: "Login Failure"
      });
    }
  };
  componentDidUpdate(prevState, prevProps) {
if(prevState.message !== this.state.message) {
    setTimeout(() => {
        this.setState({
            message:""

        })
    },3000)
}
  }
  render() {
    console.log(this.state.username, "user", this.state.password, "password");
    return (
      <div>
        <input
          type="text"
          placeholder="User Name"
          id="name"
          value={this.state.username}
          onChange={(e) => {
            console.log(e);
            this.setState({
              username: e.target.value
            });
        
          }}
        />{" "}
        <input
          type="password"
          placeholder="Password"
          id="name"
          value={this.state.password}
          onChange={(e) => {
            console.log(e);
            this.setState({
              password: e.target.value
            });
          }}
        />
        <input
          type="submit"
          value="Submit"
          id="button"
          onClick={() => this.onLogin()}
        />
        <div> {this.state.message} </div>
      </div>
    );
  }
}
export default LoginPage;

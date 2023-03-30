import React, {Component} from 'react';
import './Login.css';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password);
        fetch("http://localhost:8080/user/login", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userLogin");
            if (data.status === "ok") {
              alert("Login Successful");
              window.localStorage.setItem("token", data.data);
              window.location.href = "./Home";
            }
            else{
                alert("Login unsuccessful, enter the correct details");
            }        
          });
      }
    render(){
        return(
            <div className='login-page'>
                <h1>Login to get hired!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Username:
                    <input type="text" className='txt-uname' placeholder='Enter email'
                    onChange={(e)=> this.setState({email: e.target.value})}/>
                    </label>
                    <br/>
                    <label>
                    Password:
                    <input type="password" className='txt-pwd' placeholder='Enter password'
                    onChange={(e)=> this.setState({password: e.target.value})}/>
                    </label>
                    <br/>
                    <button type="submit" className='btn-login'>Log In</button>
                </form>
            </div>
        );
    }
}
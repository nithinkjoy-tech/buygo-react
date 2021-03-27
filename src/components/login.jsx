import React from "react";
import Form from "./common/form";
import Joi from "joi-browser"
import {loginUser} from "../services/authUser"

class Login extends Form {
  schema = {
    email: Joi.string().required().email(),
    password: Joi.string().required().min(3),
  };

  doSubmit=async()=>{
    let errors={}
    try{
      await loginUser(this.state.data)
      window.location="/mobiles"
    }catch(ex){
      if(ex.response.status>=400&&ex.response.status<=500){
        errors["email"]=ex.response.data
        this.setState({errors})
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div>
            <h1>Login Form</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("email","Email")}
              {this.renderInput("password","Password","password")}
              {this.renderButton("Login")}
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Login;

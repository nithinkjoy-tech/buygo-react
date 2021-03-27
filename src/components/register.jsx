import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { registerUser } from './../services/userService';

class Register extends Form {
  schema = {
    email: Joi.string().required().email(),
    password: Joi.string().required().min(3),
    name: Joi.string().required().min(3),
    address:Joi.string().required().min(10)
  };

  doSubmit=async()=>{
    let errors={}
    try{
      await registerUser(this.state.data)
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
          <h1>Register</h1>
          <div className="form-group">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("email", "Email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderInput("address", "Address")}
              {this.renderButton("Register")}
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Register;

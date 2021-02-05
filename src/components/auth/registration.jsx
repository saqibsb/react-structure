import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import * as userService from "../../services/userService";
import auth from "../../services/authService";

class Registraion extends Form {
  // username=React.createRef();
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(3).label("Password"),
    name: Joi.string().required().label("Name"),
  };
  // componentDidMount(){
  //     this.username.current.focus();
  // }

  // doSubmit = () => {
  //   // call the server ->save the Changes
  //   console.log("Submited");
  // };
  doSubmit = async () => {
    // Call the server
    try {
      const response = await userService.register(this.state.data);
      console.log("Register form response obj", response);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div>
        <h1>Registraion</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Username", "username")}
          {this.renderInput("Password", "password", "password")}
          {this.renderInput("Name", "name")}
          {this.renderButton("Registraion")}
        </form>
      </div>
    );
  }
}
export default Registraion;

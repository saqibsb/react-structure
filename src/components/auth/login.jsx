import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
// import * as userService from "../../services/userService";
import auth from "../../services/authService";
import { toast } from "react-toastify";

class LoginForm extends Form {
  // username=React.createRef();
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  // componentDidMount(){
  //     this.username.current.focus();
  // }

  // doSubmit = () => {
  //   // call the server ->save the Changes
  //   console.log("Submited");
  // };
  doSubmit = async () => {
    const { username, password } = this.state.data;
    try {
      await auth.login(username, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/products";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
        toast.error("Your credentials are not correct, please try again.");
      }
    }
  };
  render() {
    return (
      <div>
        <h1>LogIN</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Username", "username")}
          {this.renderInput("Password", "password", "password")}
          {this.renderButton("label")}
        </form>
      </div>
    );
  }
}
export default LoginForm;

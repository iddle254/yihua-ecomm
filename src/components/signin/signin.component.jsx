import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./signin.styles.scss";
import CustomButton from "./../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export default class Signin extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    this.setState({ email: "", password: "" });
  };

  handleSubmitWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <h1>Already have an account?</h1>
        <span>Enter your email and password to signin</span>

        <form className="signin-form">
          <FormInput
            type="text"
            value={email}
            name="email"
            label="email"
            handleChange={this.handleChange}
          />

          <br />
          <FormInput
            type="password"
            value={password}
            name="password"
            label="password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit" onClick={this.handleSubmit}>
              Login
            </CustomButton>
            <CustomButton onClick={this.handleSubmitWithGoogle} isGoogleSignin>
              Sign in wth Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

import React from "react";
import { NavLink, Route } from "react-router-dom";
import { SignUpForm } from "../components/Sign-up-form";
import { SignInForm } from "../components/Sign-in-form";

const AuthPage = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <div>
        <NavLink to="/auth/sign-in">Sign In</NavLink>
      </div>
      <div>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </div>
      <Route path="/auth/sign-in" component={SignInForm} />
      <Route path="/auth/sign-up" component={SignUpForm} />
    </div>
  );
};

export default AuthPage;

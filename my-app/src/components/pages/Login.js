import React from "react";
import "./Login.css";

export default function login() {
  return (
    <div className="container">
      <div className="main">
        <h2>Login</h2>
        <h4>username</h4>
        <input type="text" placeholder="Type your username" />
        <h4>password</h4>
        <input type="text" placeholder="Type your password" />
        <h6 className="forget">Forget password?</h6>
        <button>Login</button>
        <br />
        <h6>Or Sign Up Using</h6>
      </div>
    </div>
  );
}

import React from "react";
import "./login.css";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)

      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img id="fbLogo" src="/img/fb-logo.svg" alt="" />

        <img id="fbText" src="/img/fb-text.png" alt="" />
      </div>

      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;

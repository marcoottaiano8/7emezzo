import React from "react";
import Login from "7emezzo-libraryv2/dist/screens/Login";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/home");
  }

  function goToSignup() {
    navigate("/signup");
  }

  return <Login goToSignup={goToSignup} goToHome={goToHome} />;
}

export default LoginScreen;

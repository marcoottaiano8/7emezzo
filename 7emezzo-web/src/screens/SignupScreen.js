import React from "react";
import { Signup } from "7emezzo-libraryv2";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const navigate = useNavigate();

  function goToLogin() {
    navigate("/");
  }

  return <Signup goToLogin={goToLogin} />;
}

export default SignupScreen;

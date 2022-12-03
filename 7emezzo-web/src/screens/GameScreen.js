import React from "react";
import Game from "7emezzo-libraryv2/dist/screens/Game";
import { useNavigate } from "react-router-dom";

export default function GameScreen() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/home");
  }

  return <Game callbackQuit={goToHome} />;
}

import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "7emezzo-libraryv2/dist/screens/Home";

export default function HomeScreen() {
  const navigate = useNavigate();

  function goToRanking() {
    navigate("/ranking");
  }

  return <Home goToRanking={goToRanking}/>;
}
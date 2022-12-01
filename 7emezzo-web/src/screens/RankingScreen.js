import React from "react";
import Ranking from "7emezzo-libraryv2/dist/screens/Ranking";
import { useNavigate } from "react-router-dom";

function RankingScreen() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/home");
  }

  return <Ranking goToHome={goToHome} />;
}

export default RankingScreen;

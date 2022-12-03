import Ranking from "7emezzo-libraryv2/dist/screens/Ranking";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function RankingScreen() {
  const navigation = useNavigation();

  function goToHome() {
    navigation.navigate("Home");
  }

  return <Ranking goToHome={goToHome} />;
}

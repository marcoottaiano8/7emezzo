import Home from "7emezzo-libraryv2/dist/screens/Home";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  function goToRanking() {
    navigation.navigate("Ranking");
  }
  return <Home goToRanking={goToRanking} />;
}

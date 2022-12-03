import Home from "7emezzo-libraryv2/dist/screens/Home";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getDataFromStorage } from "7emezzo-libraryv2/dist/utils/utils";

export default function HomeScreen() {
  const navigation = useNavigation();

  async function goToRanking() {
    const token = await getDataFromStorage("token");
    console.log("token:", token);
    navigation.navigate("Ranking");
  }

  return <Home goToRanking={goToRanking} />;
}

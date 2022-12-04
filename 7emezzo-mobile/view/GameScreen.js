import Game from "7emezzo-libraryv2/dist/screens/Game";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function GameScreen() {

  const navigation = useNavigation();

  function goToHome(){
    navigation.navigate("Home");
  }

  return <Game callbackQuit={goToHome} />;
}

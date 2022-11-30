import Login from "7emezzo-libraryv2/dist/screens/Login";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  function goToHome() {
    navigation.navigate("Home");
  }

  function goToSignup() {
    navigation.navigate("Signup");
  }

  return <Login goToGame={goToHome} goToSignup={goToSignup}/>;
}

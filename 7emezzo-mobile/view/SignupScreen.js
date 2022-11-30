import Signup from "7emezzo-libraryv2/dist/screens/Signup";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function SignupScreen() {
  const navigation = useNavigation();

  function goToLogin() {
    navigation.navigate("Login");
  }

  return <Signup goToLogin={goToLogin} />;
}

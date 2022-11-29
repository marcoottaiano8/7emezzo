import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./view/LoginScreen";
import SignupScreen from "./view/SignupScreen";
import HomeScreen from "./view/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  let options = {
    headerStyle: {
      backgroundColor: "darkblue",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

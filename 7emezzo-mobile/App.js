import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./view/LoginScreen";
import SignupScreen from "./view/SignupScreen";
import HomeScreen from "./view/HomeScreen";
import GameScreen from "./view/GameScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator
          initialRouteName={"Game"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

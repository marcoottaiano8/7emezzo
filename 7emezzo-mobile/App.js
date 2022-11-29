<<<<<<< HEAD
import { Login } from "7emezzo-library";
import Signup from "7emezzo-library/dist/screens/Signup";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
=======
import { Login } from '7emezzo-library';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
>>>>>>> 57608437cebb10a90ecc02d8d32eb6577a28972e

export default function App() {

  let options = {
    headerStyle: {
      backgroundColor: 'darkblue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },

  }

  return (
<<<<<<< HEAD
    <View>
      <Signup />
    </View>
=======
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Login"}>
          <Stack.Screen
            name="Login"
            component={Tutorial}
            options={options}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={options}
          />
          <Stack.Screen
            name="CameraScreen"
            component={CameraScreen}
            options={options}
          />
          <Stack.Screen
            name="Gallery"
            component={Gallery}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
>>>>>>> 57608437cebb10a90ecc02d8d32eb6577a28972e
  );
}

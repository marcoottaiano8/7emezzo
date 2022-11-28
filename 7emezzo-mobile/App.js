import { Login } from '7emezzo-library';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

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
  );
}

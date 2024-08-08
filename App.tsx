// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './src/screen/login';
import Register from './src/screen/Register';
import Home from './src/screen/Home';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/> 
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
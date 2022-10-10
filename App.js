import { View, Text, Button } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import RegisterPage from './screens/RegisterPage'
import CarViewPage from './screens/CarViewPage'
import AddData from './screens/AddData'
import HomePage from './screens/HomePage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="AddData" component={AddData} />
          <Stack.Screen name="CarViewPage" component={CarViewPage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
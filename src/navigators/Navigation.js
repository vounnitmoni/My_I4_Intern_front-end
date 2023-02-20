import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginNavigator from './LoginNavigation';


const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
        <LoginNavigator/>
    </NavigationContainer>
  )
}

export default Navigations

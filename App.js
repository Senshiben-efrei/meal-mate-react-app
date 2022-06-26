import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './Stacks/AppStack';
import AuthStack from './Stacks/AuthStack';


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <AuthStack /> */}
        <AppStack />        
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
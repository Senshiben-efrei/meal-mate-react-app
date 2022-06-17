import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import Signin from './components/Signin';
import Signup from './components/Signup';


export default function App() {
  return (
    <NativeBaseProvider>
      <Signup/>
      <Recipes/>
      <Footer/>
    </NativeBaseProvider>
  );
}
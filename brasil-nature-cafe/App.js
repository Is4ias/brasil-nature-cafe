import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Routes from './Router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './src/pages/home';

const App = () => {

  
  return (
    <>
      <StatusBar style="light" backgroundColor="#0C0F14" translucent={true}/>
      <Routes/>
      
    </>
  );
};

export default App;




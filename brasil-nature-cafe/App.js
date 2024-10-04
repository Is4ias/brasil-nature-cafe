import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/Router';


export default function App() {
  // const[ data, setData ] = useState("");
  // const getData = async () => {
  //   try{
  //     const resp = await fetch("https://api.sampleapis.com/coffee/hot")
  //     const json = await resp.json();
  //     setData(json);
  //   } catch (err) {
  //     setData(err.message);
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, []);
  
  return (
    <>
    {/* se eu adicionar esse PRE aparece o json da api */}
    {/* <pre>
      {JSON.stringify(data, null, 2)}
    </pre> */}
      <StatusBar style="light" backgroundColor="#0C0F14" translucent={true}/>
      <Routes/>
      
    </>
  );
}

// arrumar a API - DEIXEI O CHAT GPT NA PAGINA JÁ 




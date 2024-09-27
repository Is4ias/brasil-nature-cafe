import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/Router';


export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#0C0F14" translucent={true}/>
      <Routes/>
      {/* <IconsApp/> */}
    </>
  );
}


















//AppRegistry.registerComponent('brasil-nature-cafe', () => App);H




// TESTAR DPS
// import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

//   let [fontsLoaded] = useFonts({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   });
//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }
//AppRegistry.registerComponent('brasil-nature-cafe', () => App);






//chat gpt---------------
//import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
//import { AppLoading } from 'expo-app-loading'


// export default function App() {
  
// const [fontsLoaded, setFontLoaded] = () => useState(false);

// useEffect(() => {
//   async function loadFonts() {
//     await useFonts({ Anton_400Regular });
//     setFontLoaded(true);
//   }
// });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }
//chatgpt----------






//tava rodando


  // export default function App() {
//   const [fontLoaded, setFontLoaded] = useState(false);

//   useEffect(() => {
//     async function loadResourcesAndDataAsync() {
//       try {
//         await loadAsync({
//           Anton: require('src/assets/Anton-Regular.ttf')
//         });

//         SplashScreen.preventAutoHideAsync();
//         SplashScreen.hideAsync();
//         setFontLoaded(true);
//       } catch (e) {
//         console.warn(e);
//       }
//     }
//     loadResourcesAndDataAsync();
//   }, []);
      

//   if (!fontLoaded) {
//     return ; // Evita renderizar qualquer coisa enquanto as fontes/recursos estiverem sendo carregados
//   }
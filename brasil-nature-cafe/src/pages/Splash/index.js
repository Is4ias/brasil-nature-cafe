import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
//import Video from 'react-native-video';
//import { Constants } from 'expo-constants';
import LottieView from 'lottie-react-native';
//import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = ({navigation}) => {
 useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');

      setTimeout(() => {
        navigation.navigate(userToken ? 'Home' : 'Login');
      }, 4000);
    };

    bootstrapAsync();
 }, []);

 return (
    <View style={styles.container}>
      <Image source={'src/assets/splash.png'} style={styles.logo} /> 
       <LottieView 
                source={'src/assets/splash.json'}
                autoPlay
                loop={false}
                speed={0.5}
                //onAnimationFinish={() => navigation.navigate('Home')}
                style={styles.lott}
            />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
 },
 lott: {
    opacity: 0.5,
 }
});

export default SplashScreen;







// export function splash(){
//     const navigation = useNavigation()
//     return(
//         <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
//             <LottieView 
//                 source={require('src/assets/splash.json')}
//                 autoPlay
//                 loop={false}
//                 speed={0.5}
//                 onAnimationFinish={() => navigation.navigate('Home')}
//             />
//         </View>
//     )
// }







//outra tentativa
// const VideoComponent = ({ navigation }) => {
//     const [showVideo, setShowVideo] = useState(true);
  
//     useEffect(() => {
//       // Esconde o vídeo após 5 segundos
//       const timeoutId = setTimeout(() => {
//         setShowVideo(false);
//         // Navega para a Home
//         navigation.replace('Home');
//       }, 5000);
  
//       // Limpa o timeout quando o componente é desmontado
//       return () => clearTimeout(timeoutId);
//     }, [navigation]);
  
//     return (
//       <View style={styles.container}>
//         {showVideo && (
//           <Video
//             source={{ uri: 'src/assets/splash.mp4' }}
//             style={styles.video}
//             resizeMode="cover"
//             repeat={true}
//             controls={true} // ou false se você quiser esconder os controles
//           />
//         )}
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     video: {
//       flex: 1,
//     },
//   });
  
//   export default VideoComponent;


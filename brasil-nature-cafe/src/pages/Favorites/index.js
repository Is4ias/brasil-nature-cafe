import React from "react";
import { View, Text, ScrollView, StyleSheet, Button, Image, ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";


export default function favoritos({ navigation}) {
    navigation.setOptions({
        headerTitle: "FAVORITOS"
    })
const imageApp = {uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fpt%2Fsearch%2Fcoffee-wallpaper&psig=AOvVaw1pfsz3HjLgAG2_HoebU7gl&ust=1727878034171000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDpmMGt7YgDFQAAAAAdAAAAABAJ'}

const App = () => (
    <View style={styles.container}>
        <ImageBackground source={imageApp} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>FAVORITOS</Text>
        </ImageBackground>
    </View>
)
}

const styles = StyleSheet.create({
   container:{
    backgroundColor: '#0C0F14',
    flex: 1,
    width: '%',
   },
   image:{
    flex: 1,
    justifyContent: 'center'

   },
   text:{
    color: 'white',
    fontSize: 40,
    fontWeight: 'Bold',
   }
})
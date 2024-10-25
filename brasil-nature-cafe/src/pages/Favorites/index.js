import React from "react";
import { View, Text, ScrollView, StyleSheet, Button, Image, ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";


export default function Favoritos() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Favoritos</Text>

            <View style={styles.box}>

            </View>
        
        
        
        
        
        
        
        
        
        </View>
    )


}

const styles = StyleSheet.create({
   container:{
    backgroundColor: '#0C0F14',
    flex: 1,
    width: '100%',
   },
   image:{
    justifyContent: 'center'

   },
   text:{
    color: '#D17842',
    fontSize: 40,
    fontWeight: 'Bold',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20
   },
   box: {
    width: 100,
    height: 100,
    backgroundColor: "#FFF",
    borderRadius: 23,
    
   },
})
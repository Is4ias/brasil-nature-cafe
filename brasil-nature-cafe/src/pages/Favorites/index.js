import React from "react";
import { View, Text, ScrollView, StyleSheet, Button, Image, ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";


export default function Favoritos() {
    return(
        <View style={styles.container}>
            <Text style={{ color:'#FFF', fontSize: 30, alignSelf: 'center', marginTop: 25, fontWeight: 'bold'}}>Favorites</Text>
        
        
        </View>
    )


}

const styles = StyleSheet.create({
   container:{
    backgroundColor: '#0C0F14',
    flex: 1,
    width: '100%',
   },
})
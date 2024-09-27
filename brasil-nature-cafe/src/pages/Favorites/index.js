import React from "react";
import { View, Text, ScrollView, StyleSheet, Button, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";


export default function favorites({ navigation}) {
    navigation.setOptions({
        headerTitle: "FAVORITES"
    })

return (
    <View style={StyleSheet.container}>
        <Text style={{ fontSize:50, fontStyle:'italic'}}>
            KSKKKKKKKKKKKKKKKKKKKKKKKKKK
        </Text>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0C0F14'
    },
})
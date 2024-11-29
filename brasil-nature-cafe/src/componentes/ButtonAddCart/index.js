import React, { useState } from "react";
import { StyleSheet, Button, Alert, TouchableOpacity, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() { 
    const [headerLine] = useState("Sucesso!")
    const [tip] = useState("Produto adicionado ao carrinho!")



    function showAlert(){
        Alert.alert()
        headerLine, tip,
        [
            {text: "OK", onPress: () => console.log("OK pressed")}
        ]
    }
    
    return (
        <View style={styles.container}>
            <Button 
            style={styles.stylebutton}
            title="Add to Cart"
            color="#D17842"
            width={200}
            onPress={showAlert}>Show Alert</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#0C0F14',
        alignItems: 'flex-end',

    },
    stylebutton:{
        borderRadius: 20
    }
})




import React, { useState } from "react";
import { StyleSheet, Button, Alert, TouchableOpacity, Text, View } from "react-native";


export default function App() { 
    function onPress() {
        console.log("PRODUTO ADICIONADO NO CARRINHO!")
    }
    
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.7}
                >
                    <View style={styles.containerbutton}>
                        <Text style={styles.buttonText}>
                            Add To Cart
                        </Text>
                    </View>
                
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#0C0F14',
        alignItems: 'flex-end',
        marginVertical: 10

    },
    containerbutton:{
        width: '240px',
        height: '60px',
        backgroundColor: '#D17842',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontFamily: 'Anton_400Regular',
        fontWeight: 'bold'

}
})




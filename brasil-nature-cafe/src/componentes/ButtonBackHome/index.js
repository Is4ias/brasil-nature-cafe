import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


const BackButton = () => {
    const navigation = useNavigation();

    return ( 
        <TouchableOpacity style={StyleSheet.button} onPress={() => navigation.navigate('Home')}>
            <Ionicons name='arrow-back' size={20} color="Black"></Ionicons>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:  {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10
    }
})
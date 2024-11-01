import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function ButtonBox() {
    const navigation = useNavigation();

    const navigateToShoppingCart = () => {
        navigation.navigate('ShoppingCart');
    };
    return (
        <View>
             <View style={{ flexDirection: 'row' , alignItems: 'center', marginTop: 8}}>
                <View style={{ flexDirection: 'row', marginHorizontal: 50, marginLeft: 2}}>
                    <TouchableOpacity>
                        <FontAwesome
                            name="dollar"
                            size={20}
                            color="#FF8C00"/>
                    </TouchableOpacity>

                    <Text style={styles.precoProduto}>4.20</Text> 
                </View>
                <Ionicons 
                    name="cart" 
                    color="#FF8C00" 
                    size={30}
                />
                
                    {/* <TouchableOpacity>
                        <Entypo 
                            name='circle-with-plus'
                            color="#FF8C00"
                            size={30}
                            onPress={navigateToShoppingCart}
                        />
                    </TouchableOpacity> */}
          </View>
        </View>
    );
}
const styles = StyleSheet.create({
    precoProduto:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 6
        
    },
})
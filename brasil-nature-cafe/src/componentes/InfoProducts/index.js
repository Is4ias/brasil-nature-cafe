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
                <View style={{ flexDirection: 'row', marginHorizontal: 50, marginLeft: 2, alignItems: 'center', justifyContent: 'center', padding:1}}>
                    <TouchableOpacity>
                        <FontAwesome
                            name="dollar"
                            size={20}
                            color="#FF8C00"/>
                    </TouchableOpacity>

                    <Text style={styles.precoProduto}>4.20</Text> 
                </View>

                <TouchableOpacity>
                    <View style={styles.desingCart}>
                        <Ionicons 
                        name="cart" 
                        color="#FFF" 
                        size={20}
                        onPress={navigateToShoppingCart}
                    />
                    </View>  
                </TouchableOpacity>
                
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    precoProduto:{
        fontSize: 15,
        color: '#FF8C00',
        fontWeight: 'bold',
        marginLeft: 6
        
    },
    desingCart:{
        backgroundColor: "#FF8C00",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        padding: 5
    },
})
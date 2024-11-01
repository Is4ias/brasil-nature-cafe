import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


// ARRUMAR ESSE BOTÃO 
// LINK DO CHAT GPT: https://chatgpt.com/c/670672d7-d320-800b-8758-b18e750fc461


export default function Button() {
    const navigation = useNavigation();


    const navigateToShoppingCart = () => {
        navigation.navigate('ShoppingCart');
    };       
 return (
    <View style={styles.FooterContainer}>
      
      <View style={styles.sizeContainer}>
        <Text style={styles.label}>Size</Text>
        <View style={styles.sizeOptions}>
          {['250ml', '500ml', '1000ml'].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.selectedSizeButton,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>


      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Price</Text>
        <Text style={styles.priceAmount}>${price.toFixed(2)}</Text>
      </View>

      {/* Botão Add to Cart */}
      <TouchableOpacity style={styles.addToCartButton} onPress={navigateToShoppingCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>

    
  );
};
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer:{
        width: '40%', //pra n pegar toda a tela
        height:"50%",
        backgroundColor: '#D17842',
        borderRadius: 20, 
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 17,
        color: '#FFF'
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%',
    },
    FooterContainer:{
        backgroundColor: "#1a1a1a",
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#333",
    },
    sizeContainer: {
        marginBottom: 20,
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
    },
    sizeOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sizeButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#333',
    },
    selectedSizeButton: {
        backgroundColor: "#d9793d",
    },
    sizeText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    selectedSizeText:{
        color: '#fff',
        fontSize: 16,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    priceText: {
        color: '#fff',
        fontSize: 16,
    },
    priceAmount: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    addToCartButton: {
        backgroundColor: '#d9793d',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      addToCartText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
})
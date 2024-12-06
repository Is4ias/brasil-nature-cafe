import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import ButtonAlert from '../ButtonAddCart';

export default function Button() {
    const navigation = useNavigation();

    const [ selectedSize, setSelectedSize ] = useState(null);
    const [ price, setPrice ] = useState(4.20)

    const handleAddToCart = () => {
      if (! selectedSize) {
        Alert.alert('Atenção!', 'Por favor, selecione um tamanho antes de adicionar ao carrinho!');
      }else {
        Alert.alert('Sucesso!', `O produto (${selectedSize}) foi adicionado ao carrinho!`);
      }
    }

    return (
      <View style={styles.FooterContainer}>

        <View style={styles.sizeContainer}>
          <Text style={styles.label}>Size</Text>

          <View style={styles.sizeOptions}>
            {['250ml', '500ml', '800ml'].map((size) => (
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
          <View styles={{ flexDirection: 'column'}}>
            <Text style={styles.priceText}>Price</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 5, position: 'relative', height: 40, width: 100 }}>
              <FontAwesome
                name="dollar"
                size={20}
                color="#d9793d"
                />
                <Text style={styles.priceAmount}>{price.toFixed(2)}</Text>
            </View>
            
          </View>


        <ButtonAlert></ButtonAlert>
        </View>
      </View>

    
  );
};
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
  
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
        // backgroundColor: "#1a1a1a",
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#333",
    },
    sizeContainer: {
        marginBottom: 15,
    },
    label: {
        color: '#52555A',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    sizeOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20
    },
    sizeButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        backgroundColor: '#252A32',
    },
    selectedSizeButton: {
        backgroundColor: "#0C0F14",
        borderColor: '#d9793d'
    },
    sizeText: {
        color: '#AEAEAE',
        fontWeight: '400',
    },
    selectedSizeText:{
        color: '#D17842',
        fontSize: 18,
        borderEndColor: 2
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginTop: 10
        
       
    },
    priceText: {
      color: '#52555A',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10

    },
    priceAmount: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    addToCartButton: {
        backgroundColor: '#d9793d',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '60%',
        
      },
      addToCartText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
       
      },
})
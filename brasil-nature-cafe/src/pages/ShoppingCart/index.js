import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Button from '../../componentes/ButtonSize';


const ShoppingCartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Produto A', price: 19.99, quantity: 2 },
    { id: 2, name: 'Produto B', price: 24.99, quantity: 1 },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0C0F14'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
    alignSelf: 'center',
    padding: 15,
  },
});

export default ShoppingCartScreen;

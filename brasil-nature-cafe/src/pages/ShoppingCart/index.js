import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

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
      <Text style={styles.heading}>Carrinho de Compras</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>Preço: R$ {item.price.toFixed(2)}</Text>
            <Text>Quantidade: {item.quantity}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: R$ {getTotalPrice()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  total: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ShoppingCartScreen;

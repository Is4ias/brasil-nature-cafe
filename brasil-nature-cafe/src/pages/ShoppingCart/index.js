import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Button from '../../componentes/Button';


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
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>

            <View>
              <Image 
                source={require('../../assets/chocolateChantilly.jpg')}
                resizeMode='cover'
                style={styles.imageCart}/>
            </View>
            
            
            <View style={ styles.InfoProduct}>
              <View>
                <Text>M</Text>
              </View>

              <View>
                <Text>{item.price.toFixed(2)}</Text>
              </View>
            </View>

            <View style={styles.quantProduct}>
              <TouchableOpacity style={{ flexDirection: 'row', justifyContent:'space-around'}}>
                <AntDesign
                  name='plussquare'
                  color='#D17842'
                  size={28}/>

                  <View style={styles.boxGray}>
                    <Text>{item.quantity}</Text>
                  </View>

                <AntDesign
                  name='minussquare'
                  color='#D17842'
                  size={28}/>

              </TouchableOpacity>
            </View>
            
          </View>
        )}
      />
      <View style={{ flexDirection: 'column', justifyContent:'space-between'}}>
        <Text style={styles.totalPrince}>Total Price</Text>
        
        <View style={ styles.Price}>
          <MaterialIcons 
            name='attach-money'
            color='#D17842'
            size={25}
          />
          <Text style={styles.total}>{getTotalPrice()}</Text>


  
        </View>
      </View>
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
  itemContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    height: 'auto',
    width: '100%',
    backgroundColor: '#252A32',
    borderRadius: 23,
    flexDirection: 'column',
    justifyContent: 'space-around',
    zIndex: 1,
    paddingVertical: 10,
    
  },
  itemName: {
    fontSize: '15px',
    marginBottom: 5,
    color: '#FFF',
    marginLeft: '180px',
    backgroundColor: '#DC3535'
    
  },
  imageCart:{
    flexDirection: 'column',
    width: '140px',
    height: '150px',
    borderRadius: 23,
    marginLeft: 10,
    padding: 30
  },
  InfoProduct:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: '60%',
    marginRight: '5%',
    backgroundColor: '#DC3535',
    marginVertical: 30
    
  }, 
  quantProduct:{
    backgroundColor: '#DC3535',
    marginLeft: '60%',
    marginRight: '5%',
    borderRadius: 23,
  },
  boxGray:{
    
  },
  totalPrince: {
    fontSize: 15,
    // padding: 5,
    color: "#FFF",
    marginLeft: '5%',
    fontStyle: 'italic'
  },
  total: {
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#FFF"
  },
  Price:{
    flexDirection:'row',
  },
  ButtonStyle:{
   
  }
});

export default ShoppingCartScreen;

import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Shoes from '../Shoes'

 
export default function Footer() {
 return (
   <View>
        <Text style={styles.title}>Other products on the menu</Text>

        <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
           <ScrollView horizontal > 

                <View style={[styles.GraySquare, {marginHorizontal: 10, }]}>
                    <Shoes img={require('../../assets/chocoChantily.jpg')} cost="10,00">
                        cafe x
                    </Shoes>
                </View>

                <View style={[styles.GraySquare, {marginHorizontal: 10}]}>
                    <Shoes img={require('../../assets/CHOCOLATE.jpg')} cost="9,00">
                        cafe xx
                    </Shoes>
                </View>

                <View style={[styles.GraySquare, {marginHorizontal: 10}]}>
                    <Shoes img={require('../../assets/cafe1.jpg')} cost="7,00">
                        cafe xxx
                    </Shoes> 
                </View>

                <View style={[styles.GraySquare, {marginHorizontal: 10}]}>
                    <Shoes img={require('../../assets/CHOCOLATE.jpg')} cost="9,00">
                        cafe xx
                    </Shoes>
                </View>

                <View style={[styles.GraySquare, {marginHorizontal: 10}]}>
                    <Shoes img={require('../../assets/cafe1.jpg')} cost="7,00">
                        cafe xxx
                    </Shoes> 
                </View>

            </ScrollView>
        </View>
   </View>
  );
}
const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
        color: '#FFF'
    },
    GraySquare:{ //caixa cinza
        //position: 'absolute',
        backgroundColor: '#333',
        borderRadius: 20,
        width: 200,
        height: 300,
        zIndex: 1,
        alignItems: 'center',
        marginBottom: 10
    },
})

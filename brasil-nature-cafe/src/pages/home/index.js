import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, BackHandler, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import Shoes from '../../componentes/Shoes';
import { useNavigation } from '@react-navigation/native';
import BarraPesquisa from '../../componentes/BarraPesquisa';
import DATA from '../../componentes/ListaHorizontal/MenuHorizontal';

import ShoppingCartScreen from '../ShoppingCart';
import MyAccount from '../Account';

export default function Home() {
    const [selectedId, setSelectedId] = useState(null);

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.itemList, style]}>
            <Text style={[styles.title, style]}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const color = item.id === selectedId ? '#D17842' : '#52555A';

        return (
        <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            style={{ color }}
        />
        );
    };


    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {

        });
    }, []);


const navigation = useNavigation();

const navigateToShoppingCart = () => {
    navigation.navigate('ShoppingCart')
}; 

const navigateMyAccount = () => {
    navigation.navigate('Account')
}
 



return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity >
                    <MaterialIcons style={ styles.MenuOpen}
                        name="menu-open"
                        size={28}
                        color="#52555A"
                    />
                    <MaterialIcons style={ styles.MyAccount} onPress={navigateMyAccount}
                        name="account-circle"
                        size={28}
                        color="#52555A"
                    />
            </TouchableOpacity>

        

            <View style={styles.textContainer}>
                <Text style={[styles.text]}>Find the best{'\n'}Coffee for you</Text>
            </View>  


            <BarraPesquisa>
            </BarraPesquisa>

            <View style={ styles.containerList}>
                <FlatList
                    horizontal
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    showsHorizontalScrollIndicator={false}>
                </FlatList>

            </View>


            <ScrollView horizontal>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40}}>
                    <View style={styles.GraySquare}> 
                        <Shoes img={require('../../assets/caferomantico.jpg')} onClick={() => navigation.navigate('Detail')}>
                            1
                        </Shoes>
                    </View>

                    <View style={styles.GraySquare}> 
                        <Shoes img={require('../../assets/chocoCafe.jpg')} onClick={() => navigation.navigate('DetailDois')}>
                        2
                        </Shoes>
                    </View>

                    <View style={styles.GraySquare}> 
                        <Shoes img={require('../../assets/chocoChantily.jpg')}  onClick={() => navigation.navigate('Detail')}>
                            3
                           
                        </Shoes>
                    </View>

                    <View style={styles.GraySquare}> 
                        <Shoes img={require('../../assets/cafe5.jpg')}  onClick={() => navigation.navigate('Detail')}>
                                4
                        </Shoes>
                    </View>

                    <View style={styles.GraySquare}> 
                        <Shoes img={require('../../assets/cafe4.jpg')}  onClick={() => navigation.navigate('Detail')}>
                            5
                        </Shoes>
                    </View>

                    <View style={styles.GraySquare}> 
                        <Shoes img={require('../../assets/caferomantico.jpg')} onClick={() => navigation.navigate('Detail')}>
                            6
                        </Shoes>
                    </View>
                </View>
            </ScrollView>

            <View>
                <Text style={styles.text2}>More offers - Customer Week</Text>
            </View>
            
            <ScrollView horizontal>
            <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
                <View style={styles.GraySquare}> 
                    <Shoes img={require('../../assets/cafe1.jpg')} onClick={() => navigation.navigate('CLICOU')}>
                        Doble Expresso
                        
                    </Shoes>
                </View>

                <View style={styles.GraySquare} > 
                    <Shoes img={require('../../assets/cafe2.jpg')} onClick={() => navigation.navigate('clicou')}>
                        Duplo Amor

                    </Shoes>
                </View>

                <View style={styles.GraySquare}> 
                    <Shoes img={require('../../assets/cafe3.jpg')} onClick={() => navigation.navigate('clicou')}>
                        Café tradicional
                        
                    </Shoes>
                </View>
            

            
                <View style={styles.GraySquare}> 
                    <Shoes img={require('../../assets/cafe5.jpg')} onClick={() => navigation.navigate('CLICOU')}>
                        Café expresso
                        
                    </Shoes>
                </View>

                <View style={styles.GraySquare}> 
                    <Shoes img={require('../../assets/cafe6.jpg')} onClick={() => navigation.navigate('clicou')}>
                        Submarino
                        
                    </Shoes>
                </View>

                <View style={styles.GraySquare}> 
                    <Shoes img={require('../../assets/chocolate8.jpg')} onClick={() => navigation.navigate('clicou')}>
                        Chocolate com marshmallow
                    </Shoes>
                </View>          
            </View>
                
            </ScrollView>

            <View>
                <Text style={styles.text2}>
                    Special for you
                </Text>
            </View>


            <View>
                <View style={styles.GraySquare2}>
                    <Image
                    source={require('../../assets/cafe7.jpg')}
                    style={styles.image}
                    resizeMode='cover'>
                    </Image>

                    <Text style={styles.Text3}>
                        Um bom café com chocolate e marshmallow é uma verdadeira indulgência. Ele começa com um expresso encorpado, 
                        perfeitamente tirado, que oferece a base rica e intensa. Ao café, é adicionado chocolate derretido, criando uma combinação 
                        harmoniosa de doçura e amargor. O toque final vem com marshmallows macios, levemente derretidos pelo calor do café, que proporcionam 
                        uma textura cremosa e um sabor suave de baunilha. 
                    </Text>
                </View>

                <View style={styles.GraySquare2}>
                    <Shoes img={require('../../assets/cafe8.jpg')} onClick={() => navigation.navigate('Clicou')}>
                            Duplo Chocolate
                            <Text style={styles.Text3}>
                            
                            </Text>
                    </Shoes>
                </View>
            </View>
            

            


        </ScrollView>

    </View>  
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1, //ocupar todo o espaço
        width: '%', //100% da tela
        backgroundColor: '#0C0F14'
    },
    header:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: '149px',
        height: '150px',
        borderRadius: 25,
        marginLeft: 10,
        marginTop: 10
        
    },
    containerImage:{
        flexDirection: 'row',
        
    },
    ButtonHeader:{
        marginTop: 10,
        marginLef: 10,
    },
    textContainer:{
        color: '#FFF',
        // flexDirection: 'row', //um do lado do outro
        marginVertical: '5%',
        marginHorizontal: '5%',
        
    },
    itemList:{
        padding: 15,
        marginTop: 10,
        paddingHorizontal: 20,
    },
    containerList:{
        flwx: 1,
        marginTop: 40,
        paddingHorizontal: 20,

    },
    text:{
        color: '#FFF',
        fontFamily: 'Anton_400Regular',
        fontSize: 40,
        marginHorizontal: '4%',
        marginTop: 150,
        marginVertical: 60
    },
    text2:{
        color: '#FFF',
        fontFamily: 'Anton_400Regular',
        fontSize: 30,
        marginHorizontal: '5%',
        marginTop: 60,
        marginVertical: 30,
    },
    Text3:{
        fontSize:10,
        marginTop: 20,
        margin: 15,
        color: '#FFF'
        
    },
    line:{
        color: '#FFF',
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 2,
    },
    GraySquare:{ //caixa cinza
        backgroundColor: '#252A32',
        borderRadius: 23,
        width: '149px',
        height: '245.68px',
        zIndex: 1,
        alignItems: 'center',
        marginRight: 15,  
        marginLeft: 20    
    },
    GraySquare2:{
        backgroundColor: '#252A32',
        borderRadius: 28,
        width: '90%',
        height: 'auto',
        marginLeft: 20,
        marginVertical: 20,
        flexDirection: 'row'

    },
    // containerList: {
    //     flex: 1,
    //     marginTop: 30,
    //     marginLeft: 80,
    //     marginVertical: 80
    // },
    title: {
        fontSize: 20,
        marginRight: 20,
        marginLeft: 30,
        marginVertical: 0
    },
    MenuOpen:{
        marginLeft: '5%',
        position: 'absolute',
        marginVertical: 15
    },
    MyAccount:{
        top: 15,
        marginLeft: '85%',
        marginVertical: 5,
        position: 'absolute'

    }

});


{/* <View style={styles.line}/> */}

//icone do dinheiro
 {/* <TouchableOpacity style={{position:'absolute', alignSelf:'center'}}>
                            <MonetizationOnIcon
                            name="MonetizationOn"
                            size={25}
                            color="#008000"
                            />
                        </TouchableOpacity> */}
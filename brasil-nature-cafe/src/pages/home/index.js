import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, BackHandler, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import Shoes from '../../componentes/Shoes';
import { useNavigation } from '@react-navigation/native';
import BarraPesquisa from '../../componentes/BarraPesquisa';

//import AddCircleIcon from '@mui/icons-material/AddCircle';
//import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
// import { Fontisto } from '@expo/vector-icons';




export default function Home() {

    const [selectedId, setSelectedId] = useState(null);
    const DATA = [
        { id: 'all', title: 'All' },
        { id: 'capuccino', title: 'Capuccino' },
        { id: 'expresso', title: 'Expresso' },
        { id: 'americano', title: 'Americano' },
        { id: 'tradicional', title: 'Tradicional' },
        { id: 'Sem açúcar', title: 'Sem açúcar' },
    ];

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress}>
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

        })
    },[])


const navigation = useNavigation();

const navigateToShoppingCart = () => {
    navigation.navigate('ShoppingCart');
}; 

// const navigateMyAccount = () => {
//     navigation.navigate('Account')
// }
 



return (
    <View style={styles.container}>
        <TouchableOpacity >
                <MaterialIcons style={ styles.MenuOpen} onPress={navigateToShoppingCart}
                    name="menu-open"
                    size={28}
                    color="#52555A"
                />

                <Image
                    source={require('../../assets/rıbeirosss.png')}
                    style={{ alignItems: 'center'}}
                    size={28}>
                </Image>

        
             
        </TouchableOpacity>
        
    
        <View style={styles.containerList}>
            <FlatList
                horizontal
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                showsHorizontalScrollIndicator={false}
            
            />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            

            <View style={styles.textContainer}>
                <Text style={[styles.text]}>Find the best{'\n'}Coffee for you</Text>
            </View>  

            {/* <ListaHorizontal>
            </ListaHorizontal> */}

            <BarraPesquisa>
            </BarraPesquisa>


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
                            {/* <TouchableOpacity style={{flexDirection: 'row', marginHorizontal:60, marginVertical:40, marginLeft:'1%'}}>
                                <MaterialIcons
                                    name="attach-money"
                                    size={28}
                                    color="#ff8c00"
                                />  
                            </TouchableOpacity>                 
                            <TouchableOpacity style={{flexDirection: 'row', marginHorizontal:55, marginVertical:60, marginRight: '1%'}}>
                                <MaterialIcons
                                    name="add-circle"
                                    size={28}
                                    color="#ff8c00"
                                />
                            </TouchableOpacity> */}
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
                        {/* <TouchableOpacity style={{flexDirection: 'row', marginHorizontal:60, marginVertical:30, marginLeft:'1%'}}>
                            <MaterialIcons
                                name="attach-money"
                                size={28}
                                color="#ff8c00"
                            />  
                        </TouchableOpacity> 

                        

                        <TouchableOpacity style={{flexDirection: 'row', marginHorizontal:20, marginRight:'1%' }}>
                            <MaterialIcons
                                name="add-circle"
                                size={28}
                                color="#ff8c00"
                            />
                        </TouchableOpacity> */}
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
            <Text style={{ fontSize: 28, fontFamily: 'Anton_400Regular', color: '#ffff', marginLeft: 20, marginTop: 30 }}>
                    Special for you
                </Text>
            </View>
            <View style={styles.GraySquare2}>
                <Shoes img={require('../../assets/chocolate8.jpg')} onClick={() => navigation.navigate('Clicou')}>
                        duplo Chocolate
                </Shoes>
                
            </View>

            <View style={styles.GraySquare2}>
                <Shoes img={require('../../assets/cafe7.jpg')} onClick={() => navigation.navigate('Clicou')}>
                        duplo Chocolate
                </Shoes>
                
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
        width:100,
        height: 100,
        // justifyContent: 'center',
        // alignItems: 'center',
        
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
    text:{
        color: '#FFF',
        fontFamily: 'Anton_400Regular',
        fontSize: 40,
        marginHorizontal: '4%',
        marginTop: 20,
        marginVertical: 60
    },
    text2:{
        color: '#FFF',
        fontFamily: 'Anton_400Regular',
        fontSize: 30,
        marginHorizontal: '5%',
        marginTop: 20,
        marginVertical: 60,
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
        borderRadius: 23,
        width: '90%',
        height: 'auto',
        marginLeft: 20,
        marginVertical: 50,

    },
    containerList: {
        flex: 1,
        marginTop: 30,
        marginLeft: 80,
        marginVertical: 80
    },
    title: {
        fontSize: 30,
        backgroundColor: '#f50f0f',
        marginRight: 20,
        marginLeft: 50,
        marginVertical: 0
    },
    MenuOpen:{
        marginLeft: '5%',
        position: 'absolute',
        marginVertical: 15
    },

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
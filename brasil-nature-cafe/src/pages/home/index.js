import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, BackHandler, FlatList, ActivityIndicator } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import Shoes from '../../componentes/Shoes';
import { useNavigation } from '@react-navigation/native';
import BarraPesquisa from '../../componentes/BarraPesquisa';
import DATA from '../../componentes/ListaHorizontal/MenuHorizontal';
import DrawerRoutes from '../../../../routes/drawer.routes';


// import ShoppingCartScreen from '../ShoppingCart';
// import MyAccount from '../Account';



export default function Home() {
    

    const [selectedId, setSelectedId] = useState(null);

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.itemList, style]}>
            <Text style={[styles.title, style]}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderItem2 = ({ item }) => {
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

const navigateToNotifications= () => {
    navigation.navigate('NotificationsPage')
}; 


return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={ styles.headerTop }>
                <TouchableOpacity >
                        <MaterialIcons style={ styles.MenuOpen} onPress={ console.log("abrir o drawer") }
                            name="menu-open"
                            size={28}
                            color="#52555A"
                        />
                        <View style={styles.containerLogo}>
                            <Image
                                source={require('../../assets/rıbeirosss.png')}
                                style={ styles.imageLogo}  
                
                                />
                        </View>

                        <Entypo style={ styles.NotificationBell} onPress={navigateToNotifications}
                            name="bell"
                            size={28}
                            color="#52555A"
                        />

                </TouchableOpacity>
            </View>
            

        

            <View style={styles.textContainer}>
                <Text style={[styles.text]}>Find the best{'\n'}Coffee for you</Text>
            </View>  


            <BarraPesquisa>
            </BarraPesquisa>

            <View style={ styles.containerList}>
                <FlatList
                    horizontal
                    data={DATA}
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    showsHorizontalScrollIndicator={false}>
                </FlatList>
            </View>

            {/* <TrendingFoods/> */}

            
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
        headerTop:{
            justifyContent:'space-between',
            flexDirection: 'column'
            // justifyContent: 'center'
        },
        containerLogo:{
            flexDirection: 'row',
            justifyContent:"center",
            alignItems: 'center',
            // backgroundColor: '#DC3535'
            
        },
        imageLogo: {
            width: 100,
            height: 120,
            marginTop: 10,
            
            
        },
        image:{
            width: '149px',
            height: '150px',
            borderRadius: 25,
            marginLeft: 10,
            marginTop: 10
            
        },
        ButtonHeader:{
            marginTop: 10,
            marginLef: 10,
        },
        textContainer:{
            color: '#FFF',
            marginVertical: '1%',
            marginHorizontal: '5%',
            
        },
        itemList:{
            padding: 15,
            marginTop: 10,
            paddingHorizontal: 5,
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
            marginTop: 90,
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
            fontSize: 15,
            marginTop: 20,
            margin: 15,
            color: '#FFF',
            
            
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
            // backgroundColor: '#252A32',
            backgroundColor: '#333',
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
            marginVertical: 15,
            top: 50
        },
        NotificationBell:{
            top: 55,
            marginLeft: '85%',
            marginVertical: 5,
            position: 'absolute'
    
        }
    
    });
    

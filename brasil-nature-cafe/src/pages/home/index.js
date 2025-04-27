import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, BackHandler, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ImageList from '../../componentes/CardapioEspecial';
import InfoProdcts from '../../componentes/InfoProducts';

import BarraPesquisa from '../../componentes/BarraPesquisa';
import CoffeList from '../../componentes/ListaHorizontal/MenuHorizontal';



export default function Home() {
    const navigation = useNavigation();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;

        });

        return () => BackHandler.remove();
    }, []);

    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          
          const productIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
          const promises = productIds.map(id => axios.get(`http://localhost:3000/${id}`));
          const responses = await Promise.all(promises);
          const fetchedProducts = responses.map(response => response.data);
          setProducts(fetchedProducts);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      };
  
      fetchProducts();
    }, []);

    const renderItemProduct = ({ item }) => (
        <View style={styles.GraySquare}>
            <Pressable style={{ position: 'relative'}} onPress={ () => navigateToDetail(item)}>
                <Image source={{ uri: item.image }} style={styles.imageProduto}/>

                <View style={styles.stars}>
                    <AntDesign name='star' color="#FFFF00" size={12}/>
                    <Text style={{ color:'#FFF'}}>4.9</Text>
                </View>
            </Pressable>

            <Text style={styles.nameProduto}>{item.title}</Text>
            
            <InfoProdcts></InfoProdcts>
        
        </View>
        
      );
    
    
    const navigateToDetail = ( product ) => {
        navigation.navigate('Detail', { item: product });
    }
    const navigateToNotification = () => {
        navigation.navigate('Notifications');
    };



return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={ styles.headerTop }>
                <TouchableOpacity >
                        <Entypo 
                            style={ styles.MenuOpen} 
                            onPress={ console.log("abrir o drawer1") }
                            name="menu"
                            size={28}
                            color="#52555A"
                        />
                </TouchableOpacity>


                
                <View style={styles.containerLogo}>
                    <Image
                        source={require('../../assets/rıbeirosss.png')}
                        style={styles.imageLogo}  
                        resizeMode='contain'
                    />
                </View>
                
                <TouchableOpacity >
                        <Entypo  
                            style={styles.NotificationBell}
                            name="bell"
                            size={28}
                            color="#52555A"
                            onPress={navigateToNotification}
                        />
                </TouchableOpacity>
            </View>
            
            <View style={styles.textContainer}>
                <Text style={[styles.Title]}>Find the best{'\n'}Coffee for you</Text>
            </View>  

            <BarraPesquisa>
            </BarraPesquisa>
            <CoffeList></CoffeList>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ContainerProduts}>
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        <FlatList
                            horizontal
                            data={products}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItemProduct}
                        />

                        <Text style={styles.Title2}>Special for you</Text>

                        
                        <FlatList
                            horizontal
                            data={products}
                            keyExtractor={(item) => item.id.toString()}  
                            renderItem={renderItemProduct}
                        />
                        

                        <Text style={styles.Title2}>New products</Text>
                        <ImageList></ImageList>

                    </ScrollView>
                </View>
            </ScrollView>
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        containerLogo:{
            backgroundColor: '#D17842',
        },
        imageLogo: {
            width: 100,
            height: 120,
            marginTop: 20,
            alignSelf: 'center'
        },
        MenuOpen:{
            marginLeft: 20
        },
        NotificationBell:{
            marginRight: 20
        },
        imageProduto:{
            width: 138,
            height: 145,
            borderRadius: 23,
            marginLeft: 3,
            marginTop: 10
        },
        stars:{
            flexDirection: 'row', 
            backgroundColor: 'rgba(0,0,0,0.6)', 
            gap: 5, 
            width: '30%', 
            height: 'auto',
            borderRadius: 25, 
            position: 'absolute', 
            marginTop: 12, 
            right: 5, 
            padding: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
        },
        nameProduto:{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#FFF',
            marginRight: 33,
            padding: 8
        },
        textContainer:{
            color: '#FFF',
            marginVertical: '2%',
            marginHorizontal: '5%',
            alignSelf: 'flex-start',
            width: '70%',   
        },
        Title:{
            color: '#FFF',
            fontFamily: 'Anton_400Regular',
            fontSize: 30,
            marginHorizontal: '4%',
            marginTop: 50,
        },
        Title2:{
            color: '#FFF',
            fontFamily: 'Anton_400Regular',
            fontSize: 30,
            marginHorizontal: '8%',
            marginVertical: 20
            // marginTop: 60,
            // marginVertical: 30,
        },
        ContainerProduts:{
            gap: 1,
        },
        GraySquare:{ //caixa cinza
            backgroundColor: '#252A32',
            borderRadius: 23,
            width: '160px',
            height: '245.68px',
            zIndex: 1,
            alignItems: 'center',
            marginRight: 15,  
            marginLeft: 20,
            flexDirection: 'column',
        },
    });
    

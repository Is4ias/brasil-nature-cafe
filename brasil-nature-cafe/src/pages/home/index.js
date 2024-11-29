import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, BackHandler, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import BarraPesquisa from '../../componentes/BarraPesquisa';
import DATA from '../../componentes/ListaHorizontal/MenuHorizontal';
import axios from 'axios';
import ImageList from '../../componentes/CardapioEspecial';
import InfoProdcts from '../../componentes/InfoProducts';




export default function Home() {
    const [selectedId, setSelectedId] = useState(null);

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.ListHorizontal, style]}>
            <Text style={[styles.ItemListHorizontal, style]}>{item.title}</Text>
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
        navigation.navigate('NotificationsScreen');
    };


const navigation = useNavigation();

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

            <View style={ styles.containerList}>
                <FlatList
                    horizontal
                    data={DATA}
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    showsHorizontalScrollIndicator={false}
                    fontSize={24}>
                </FlatList>
            </View>

            <ScrollView vertical showsVerticalScrollIndicator={false}>
                <View style={styles.ContainerProduts}>
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        <FlatList
                            horizontal
                            data={products}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItemProduct}
                        />

                        <Text style={styles.Title2}>Special for you</Text>

                        <View style={styles.ContainerProduts}>
                            <FlatList
                                horizontal
                                data={products}
                                keyExtractor={(item) => item.id.toString()}  
                                renderItem={renderItemProduct}
                            />
                        </View>

                        <Text style={styles.Title2}>Special coffee</Text>

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
            marginTop: 15,
        },
        MenuOpen:{
            marginLeft: 20
        },
        NotificationBell:{
            marginRight: 20
        },
        imageProduto:{
            width: '138px',
            height: '145px',
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
            borderRadius: '25%', 
            position: 'absolute', 
            marginTop: 12, 
            right: 5, 
            padding: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
        },
        precoProduto:{
            fontSize: 18,
            color: '#FFF',
            fontWeight: 'bold',
            marginLeft: 6 
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
        containerList:{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: 10,
            padding: 10
        },
        Title2:{
            color: '#FFF',
            fontFamily: 'Anton_400Regular',
            fontSize: 30,
            marginHorizontal: '8%',
            marginTop: 60,
            marginVertical: 30,
        },
        // Text3:{
        //     fontSize: 15,
        //     marginTop: 20,
        //     margin: 15,
        //     color: '#FFF',
        // },
        line:{
            color: '#FFF',
            borderBottomColor: '#D8D8D8',
            borderBottomWidth: 2,
        },
        ContainerProduts:{
            gap: 10,
            // backgroundColor: '#444',
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
        ListHorizontal:{
            padding: 10,
            marginTop: 10,
            paddingHorizontal: 5,
            paddingVertical: 10,
            
            
        },
        ItemListHorizontal: {
            fontSize: 18,
            marginRight: 20,
            marginLeft: 18,
            marginVertical: 0,
            // backgroundColor: "#D17842"
        },
    
    });
    

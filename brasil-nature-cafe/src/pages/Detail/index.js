import React, { useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Footer from '../../componentes/Footer';
import Button from '../../componentes/ButtonSize';



export default function Detail({ navigation, route }) {
    const { item } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "PRODUTO ESCOLHIDO"
        });
    }, [navigation]);
    
    

return (
    <ScrollView style={styles.container}>
        <View>
            <View>
                <Image
                    source={{ uri: item.image}}
                    style={styles.image}
                    resizeMode="cover"  
                />

                <View style={styles.boxTransparente}>
                    <View style={styles.productInfo}>
                        <Text style={styles.texTitle}>{item.title}</Text>
                            <Text style= {styles.SubTitle}>From africa</Text>
                            
                            <View style={styles.InfoRow}>
                                <Text style= {styles.Rating}>★ 4.5 (6,879)</Text>
                                
                                <View style={styles.TagContainer}>

                                    <View style={styles.info}>
                                        {/* <Text>{item.ingredients}</Text> */}

                                        <Image
                                            source={require('../../assets/Group87.png')}
                                            style={styles.imageBean}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    
                                    <View style={styles.info}>
                                        <Image
                                            source={require('../../assets/Vector.png')}
                                            style={styles.imagen2}
                                            resizeMode='cover'
                                        />
                                    </View>
                                </View> 
                            </View>                 
                    </View>
                </View>

            </View>

            <View>
                <Text style={styles.Desc}>Description</Text>
                <Text style={styles.textContent}>{item.description}</Text>
            </View>

            <Button></Button>

           


            
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        height: '50%',
        backgroundColor: "#0C0F14"
    },
    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 1.5 
    },
    title:{
        //fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%',
        color: '#FFF',
    },
    Desc:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: '6%',
        marginTop: 13
    },
    textContent:{
        fontSize: 14,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
        color: '#FFF',
        marginHorizontal: 8
    },
    texTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 8,
    },
    textList:{
        fontSize: 16,
        lineHeight: 25,
    },
    boxTransparente:{
        position:'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
        borderRadius: 20
    },
    productInfo:{
        flexDirection:'column',

    },
    SubTitle:{
        fontSize: 16,
        color: '#ddd',
        marginBottom: 30,
        marginLeft: 10

    },
    InfoRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        
    },
    Rating:{
        color:"#fff",
        fontSize: 14,

    },
    TagContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#D17842'
    },
    imageBean:{
        color: '#D17842',
    },
    imagen2:{
        color:'#D17842'
    },
    info:{
        backgroundColor: '#52555A',
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
        marginLeft: 8,
        width: 55.71,
        height: 55.71,
    },
    
});
import React, { useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, ImageBackground, Pressable} from 'react-native';
import Footer from '../../componentes/Footer';
import Button from '../../componentes/ButtonSize';
import { AntDesign, Foundation, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Detail({ navigation, route }) {
    const { item } = route.params;

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerTitle: "PRODUTO ESCOLHIDO"
    //     });
    // }, [navigation]);

    const navigateToHome = () => {
        navigation.navigate('Home')
    };
    
    

return (
    <ScrollView style={styles.container}>
        <View>
            <View>
                <Image
                    source={{ uri: item.image}}
                    style={styles.image}
                    resizeMode="cover"  
                />
                
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <MaterialIcons name='keyboard-arrow-left' size={20} onPress={navigateToHome} color={'#52555A'}/>
                    </TouchableOpacity>
                    
                    <Pressable style={styles.iconContainer2}>
                        <AntDesign name="heart" size={17} color={'#FFF'} onPress={console.log("produto favoritado")}/>
                    </Pressable>
                </View>
                

                <View style={styles.boxTransparente}>
                    <View style={styles.productInfo}>
                        <Text style={styles.texTitle}>{item.title}</Text>
                            <Text style= {styles.SubTitle}>From africa</Text>
                            
                            <View style={styles.InfoRow}>
                                <View style={{ flexDirection:'row', gap: 5, justifyContent: 'center', alignItems:'center'}}>
                                    <AntDesign
                                        name="star"
                                        size={18}
                                        color="#D17842"
                                        />
                                    <Text style={styles.Rating}>4.5 (6,879)</Text>

                                </View>
                                
                                
                                <View style={styles.TagContainer}>

                                    <View style={styles.Boxinfo}>
                                        <Text style={styles.textIngredients}>{item.ingredients}</Text>

                                        <Image
                                            source={require('../../assets/Group87.png')}
                                            style={styles.imagen2}
                                            color="#D17842"    
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
        height: Dimensions.get('window').height / 1.5,
        
    },
    title:{
        //fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%',
        color: '#FFF',
    },
    Desc:{
        color: '#52555A',
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: '6%',
        marginTop: 13
    },
    textContent:{
        fontSize: 14,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '5%',
        color: '#FFF',
        marginHorizontal: 8
    },
    texTitle:{
        fontSize: 25,
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
        fontSize: 18,

    },
    TagContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: '#D17842'
    },
    imageBean:{
        color: '#D17842',
    },
    imagen2:{
        width: 'auto',
        height: 'auto',
    },
    Boxinfo:{
        backgroundColor: '#52555A',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
        marginLeft: 8,
        width: 'auto',
        height: 55.71,
    },
    textIngredients: {
        color:'#FFF'
    },
    headerContainer:{
        flexDirection: 'row',
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        marginLeft: '5%',
        marginRight: '5%'

        
    },
    iconContainer:{
        width: 33.43,
        height: 33.43,
        marginTop: 59,
        borderRadius: 10,
        backgroundColor: '#0C0F14',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    iconContainer2: {
        width: 33.43,
        height: 33.43,
        marginTop: 59,
        borderRadius: 10,
        backgroundColor: '#0C0F14',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: '300%'
        marginHorizontal: 300
        
    }
});
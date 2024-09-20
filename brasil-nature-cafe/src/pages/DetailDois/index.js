import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import SizeButton from '../../componentes/SizeButton';
import Button from '../../componentes/Button';
import Footer from '../../componentes/Footer';
import Shoes from '../../componentes/Shoes';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Detail2({ navigation }) {
    navigation.setOptions({
        headerTitle: "PRODUTO ESCOLHIDO" 
    })
const CoffeFooter = () => {
    const [selectedId, setSelectedSize] = useState('250gm');
    const price = 10.50;  
}

return (
    <ScrollView style={styles.container}>
        <View>
            <View>
                <Image
                    source={require('../../assets/chocoCafe.jpg')}
                    style={styles.image}
                    resizeMode="cover"  
              
                />
                <View style={styles.boxTransparente}>
                    <View style={styles.productInfo}>
                        <Text style={styles.texTitle}>Café com chocolate 20%</Text>
                            <Text style= {styles.SubTitle}>From africa</Text>
                            <View style={styles.InfoRow}>
                                <Text style= {styles.Rating}>★ 4.5 (6,879)</Text>

                                <View style={styles.TagContainer}>
                                    <View>
                                        <Image
                                            source={require('../../assets/Vector.png')}
                                            style={styles.imageBean}
                                            resizeMode='cover'
                                            >
                                            

                                        </Image>
                                        <Text style={styles.info}>Bean</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.info}>Milk</Text>
                                    </View>
                                </View> 
                                
                            </View>                 
                    </View>
                </View>
            </View>

            {/* <View style={styles.DotContainer}>
                <Dot/>
            </View> */}

            <View style={styles.textContent}>
                <Text style={styles.textContent}>
                    Nossa receita exclusiva, com 20% de teor de chocolate, 
                    é cuidadosamente elaborada para garantir uma mistura equilibrada, 
                    oferecendo uma explosão de sabores sem ser excessivamente doce. 
                    Seja para um momento relaxante de introspecção ou para uma pausa 
                    animada com amigos, nosso Café Chocolatte é a escolha ideal para 
                    aqueles que buscam uma experiência única e envolvente.
                </Text>
            </View>

            
            {/* BOTAO ADD TO CART */}
            {/* <Button/>        */}

            <View style={styles.line}>
                <Footer>
                    
                </Footer>
            </View>
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
    textContent:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
        color: '#FFF'
    },
    texTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: '2%',
        color: '#FFF',
        marginLeft: 8,
        marginBottom: 20
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
        marginBottom: 10,
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
    },
    info:{
        backgroundColor: '#252A32',
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: '10px',
        marginLeft: 8,
        width: '55.71px',
        height: '55.71px',
    },
    
});
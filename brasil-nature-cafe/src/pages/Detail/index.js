import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function Detail({ route, navigation}) {
    const { product } = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "PRODUTO ESCOLHIDO"
        });
    }, [navigation])
    
    return (
        <View style={styles.Container}>
            <Image 
                source={{ uri: product.image }} 
                style={styles.styleImage}
                resizeMode="cover"
            />
            <View style={styles.boxTransparent}>
                <Text style={styles.nomeProduto}>{product.title}</Text>
                <Text style={styles.subTitle}>With Steamed Milk</Text> 
                
                <Text style={styles.pontuacao}>★ 4.5 (6,879)</Text> 
                <View style={styles.InfoRow}>
                    <View>
                        {/* <Image
                            source={require('../../assets/Vector.png')}
                            style={styles.imageBeen}
                            resizeMode="cover"
                        /> */}
                        <Text style={StyleSheet.ingredientes}>{product.ingredients}</Text>
                    </View>

                    <View>
                        {/* <Image
                            source={require('../../assets/Vector.png')}
                            style={styles.imageBeen}
                            resizeMode="cover"
                        /> */}
                        <Text style={styles.ingredientes}>{product.ingredients}</Text>
                    </View>
                    
                </View>

                <Text>Medium Roasted</Text>
                
                <View>
                    <Text>Descripition</Text>
                    <Text style={styles.TextDescription}>{product.description}</Text>  
                </View>
                <Text>SIZE</Text>
            </View>

            <Text style={styles.price}>4.20</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: "#0C0F14",
        width: '100%',
        height: '50%',
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height
    },
    styleImage:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 1.5
    },
    boxTransparent:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20 ,
        borderRadius: 20,
    },
    nomeProduto:{
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: '2%',
        color: '#FFF',
        marginLeft: 8,
        marginBottom: 20
    },
    subTitle:{
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
    TextDescription:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
        color: '#FFF'
    },
    ingredientes:{
        backgroundColor: '#252A32',
        color: '#fff',
    },
    price:{
        backgroundColor: '#252A32',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF'
    },
})
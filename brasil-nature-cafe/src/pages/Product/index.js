import React from 'react'; 
import  { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";


const ProductScreen = ({ route }) => {
    const { product } = route.params;

    return(
        <View style={ styles.container}>
            <Image 
                source={{ uri: product.image}} 
                style={styles.Image}
                resizeMode='cover'
            ></Image>
            
            <View style={styles.BoxTransparente}>
                <View style={styles.ProductInfo}>
                    <Text style={styles.TextName}>{product.name}</Text>
                    <Text style={styles.SubTitle}>{product.SubTitle}</Text>

                    <View style={styles.InfoRow}>
                        <Text style={styles.Rating}>★ 4.5 (6,879)</Text>
                        <View style={styles.TagContainer}>
                            <View>
                                <Image
                                    source={require('../../assets/Vector.png')}
                                    style={styles.ImageBean}
                                    resizeMode='cover'
                                />
                                <Text style={styles.info}>Bean</Text>
                            </View>
                            <View>
                                <Text style={styles.info}>Milk</Text>    
                            </View>
                        </View>
                    </View> 

                </View>
            </View>

            <View>
                <Text style={styles.Description}>{product.Description}</Text>
            </View>

            <View style={styles.line}>




                {/* <Footer></Footer> */}
            </View>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#0C0F14'
    },
    BoxTransparente: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
        borderRadius: 20
    },
    ProductInfo:{
        flexDirection: 'column'
    },
    TextName:{
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: '2%',
        paddingHorizontal: '2%',
        color: '#FFF'
    },
    SubTitle:{
        fontSize: 16,
        color: '#ddd',
        marginBottom: 10,
        marginLeft: 10,
    },
    InfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Rating: {
        color: '#FFF',
        fontSize: 14,
    },
    TagContainer: {
        flexDirection: 'row'
    },
    info: {
        backgroundColor: '#252A32',
        color: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: '10px',
        marginLeft: 8,
        width: '55.71px',
        height: '55.71px'
    },
    Description:{
        fontSize: 14,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 20
    },
});

export default ProductScreen;
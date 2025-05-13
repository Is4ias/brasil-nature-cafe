import { View, FlatList, Image, StyleSheet, Text } from 'react-native';
import InfoProdcts from '../../componentes/InfoProducts'

const images = [
    { id: '1', source: require('../../assets/cafe1.jpg'), name: 'Café Expresso' },
    { id: '2', source: require('../../assets/cafe2.jpg'), name: 'Café Americano' },
    { id: '3', source: require('../../assets/cafe3.jpg'), name: 'Café Latte' },
    { id: '4', source: require('../../assets/cafe4.jpg'), name: 'Cappuccino' },
    { id: '5', source: require('../../assets/cafe5.jpg'), name: 'Café Mocha' },
    { id: '6', source: require('../../assets/cafe6.jpg'), name: 'Café com Leite' },
    { id: '7', source: require('../../assets/cafe7.jpg'), name: 'Macchiato' },
    { id: '8', source: require('../../assets/cafepreto.jpg'), name: 'Café Preto' },
    { id: '9', source: require('../../assets/caferomantico.jpg'), name: 'Café Romântico' },
    { id: '10', source: require('../../assets/carrinhodecompras.jpg'), name: 'Carrinho de Compras' },
    { id: '11', source: require('../../assets/chocoCafe.jpg'), name: 'Choco Café' },
    { id: '12', source: require('../../assets/chocoChantily.jpg'), name: 'Choco Chantilly' },
    { id: '13', source: require('../../assets/CHOCOLATE.jpg'), name: 'Chocolate Quente' },
    { id: '14', source: require('../../assets/chocolate8.jpg'), name: 'Chocolate Especial' },
    { id: '15', source: require('../../assets/chocolate9.jpg'), name: 'Chocolate Suave' },
    { id: '16', source: require('../../assets/chocolateChantilly.jpg'), name: 'Chocolate com Chantilly' },
    { id: '17', source: require('../../assets/duoRomantico.jpg'), name: 'Duo Romântico' },
];

const ImageList = () => {
    return (
        <View style={styles.container}>
            
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={images}
                keyExtractor={item => item.id}
                initialNumToRender={5}
                renderItem={({ item }) => (
                    <View style={styles.GraySquare}>
                        <View style={styles.imageContainer}>
                            <Image 
                                source={item.source}   
                                style={styles.image}
                                resizeMode='cover'
                            />
                            <Text style={styles.productName}>{item.name}</Text>
                        </View>
                        <InfoProdcts></InfoProdcts>
                    </View>
               )}
            />
            
        </View>
    ) 
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 30
    },
    imageContainer:{
        flex: 1,
        margin: 5
    },
    image:{
       width: 138,
       height: 145,
       borderRadius: 23,
       marginLeft: 3,
       marginTop: 10
    },
    GraySquare:{
        backgroundColor: '#252A32',
        borderRadius: 23,
        width: 160,
        height: 245.68,
        zIndex: 1,
        alignItems: 'center',
        marginRight: 15,  
        marginLeft: 30,
        flexDirection: 'column',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
        marginRight: 33,
        padding: 8
    },
    
});

export default ImageList;
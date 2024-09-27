import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
//import Dot from '../../componentes/Dot';
import SizeButton from '../../componentes/SizeButton';
import Button from '../../componentes/Button';
import Footer from '../../componentes/Footer';

export default function Detail({ navigation}) {
    navigation.setOptions({
        headerTitle: "PRODUTO ESCOLHIDO" //TITULO DO HEADER LA EM CIMA
    })
return (
    <ScrollView style={styles.container}>
        <View>
            <Image
                source={require('../../assets/caferomantico.jpg')}
                style={styles.image}  
                resizeMode="cover"
            />
        
            {/* <View style={styles.DotContainer}>
                <Dot/>
            </View> */}

            <View style={styles.textContent}>
                <Text style={styles.textTitle}>Expresso Panna</Text>
                <Text style={styles.textContent}>
                    O Espresso Panna é uma verdadeira obra-prima no mundo do café. 
                    Ele combina a intensidade e a complexidade do espresso com a suavidade 
                    e a indulgência do creme batido, criando uma experiência sensorial única.
                    Este café começa com um espresso, uma concentração pura de sabor proveniente 
                    de grãos cuidadosamente selecionados e moídos finamente. A extração do 
                    espresso realça os aromas robustos e a riqueza dos grãos, proporcionando 
                    uma base encorpada e intensa para esta bebida.

                    O toque especial do Espresso Panna está no creme batido que o complementa. 
                    O creme, muitas vezes adoçado levemente, traz uma textura suave e cremosa 
                    que contrasta elegantemente com a intensidade do espresso. Esse equilíbrio 
                    entre o espresso encorpado e o creme delicado cria uma harmonia de sabores 
                    e texturas que é verdadeiramente cativante.
                </Text>
            </View>

            
            {/* <Button/> */}

            <View style={styles.line}>
                <Footer>
                </Footer>
            </View>

        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',//100% da tela
        backgroundColor:'#0C0F14'
    },
    image:{
        width: Dimensions.get('window').width, //latgural da tela toda
        height: Dimensions.get('window').height / 1.5//,etade da tela
    },
    title:{
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%',
        color: '#FFF'
    },
    textContent:{
        fontSize: 16,
        lineHeight:25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
        color: '#FFF'

    },
    textTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: '2%',
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20,
    },
    textList:{
        fontSize: 16,
        lineHeight: 25,
    }

});
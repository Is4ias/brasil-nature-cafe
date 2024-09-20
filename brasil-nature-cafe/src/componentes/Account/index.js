import {Image, View, StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MyAccount(){
    return (
        <View>
            <View>
                <Image
                source={require('../../assets/headercafe.png')}
                style={styles.BackImage}
                resizeMode='cover'>

                </Image>
            </View>
            <View>
                <View style={styles.GraySquare3}>
                    <Image
                        source={require('../../assets/pessoa.png')}
                    ></Image>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    BackImage: {
        
    },
    GraySquare3: {
        backgroundColor: '# FFF',
        borderRadius: 23,
        width: '70%',
        height: 'auto',
        marginLeft: 20,
        padding: 10,
        alignContent: 'center',

    },
    BackImage: {
        width: 10 
        // ARRUMAR O WIRTH E O CAMINHO PRA ESSE ARQUIVO 
    }

})
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text} from 'react-native';
import BackButton from '../../componentes/ButtonBackHome';


export default function ExpressCoffe(){
    const navigateToHome = () => {
        navigateToHome.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <View style={styles.HeaderContainer}>
                <Text style={styles.textExpress}>
                    Coffe Express
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0F14',
    },
    HeaderContainer:{
        backgroundColor: "#A1A1A1",
        flexDirection: 'row'
    },
    textExpress: {
        fontFamily: 'Anto-404Regular',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        color: `#FFF`,
        fontSize:20
    },
    iconContainer:{
        width: 33.43,
        heigth: 33.43,
        borderRadius: 10,
        backgroundColor: '#0c0f14',
        justifyContent: 'center',
        alignItems: 'center'

    },
})
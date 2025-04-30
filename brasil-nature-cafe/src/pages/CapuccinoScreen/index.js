import { MaterialIcons , Ionicons} from '@expo/vector-icons';
import { View, StyleSheet, Text} from 'react-native';


export default function Capuccino(){
    return (
        <View style={styles.container}>
            <View style={styles.titleCoffe}>
                <Text style={styles.textCoffe}>
                    Cappucino Coffe
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
    textCoffe:{
        fontSize: 20,
        color: '#FFF'
    },
    titleCoffe: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})
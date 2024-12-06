import { View, StyleSheet, Text} from 'react-native';


export default function AmericanCoffe(){
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textCoffe}>
                    Americano Coffe
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
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})
import { View, StyleSheet, Text} from 'react-native';


export default function ExpressCoffe(){
    return (
        <View style={styles.container}>
            <View style={styles.titleExpress}>
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
    textExpress:{
        fontSize: 20,
        color: '#FFF'
    },
    titleExpress: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})
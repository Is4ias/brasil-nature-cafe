import {Image, View, StyleSheet, ScrollView, Text, TouchableOpacity, Dimensions, LogBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Grid, Info, User } from 'react-native-feather';

export default function MyAccount(){
    return (
        <View style={styles.Container}>
            <View>
                <Image
                    source={require('../../assets/headercafe.png')}
                    style={styles.ImageHeader}
                    resizeMode='cover'
                />
                <View>
                    <Image
                        source={require('../../assets/rıbeirosss.png')}
                        style={styles.Logo}
                        />         
                </View>
                <TouchableOpacity>
                    <View style={styles.GraySquare3}> 
                        <Image
                            source={require('../../assets/MinhaFt.jpeg')}
                            style={styles.MinhaFt}/>

                        <View>
                            <Text style={styles.Name}>Isaías Ribeiro</Text>
                            <Text style={styles.UserID}>Uusuário 456.456</Text>
                            <View style={styles.Info}>
                                <Text>kkkkkkk</Text>
                                <Text>kkkkkkkkk</Text>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>
                
                
            </View>

       
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor: '#0C0F14',
        flex: 1,
    },    
    ImageHeader:{
        width: Dimensions.get('window') .width,
        height: Dimensions.get('window').height,
        
    },
    GraySquare3: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 23,
        width: '80%',
        height: 240,
        margin: 35,
        position: 'absolute',
        bottom: 0,
        
        
    },
    MinhaFt: {
         width: 80,
         height: 70,
         borderRadius: '90%',
         position: 'relative',
         alignSelf: 'center',
         marginTop: 10
    },
    Logo:{
        width: 100,
        height: 120,
        marginTop: 10,
        alignSelf:'center',
        
    },
    Name:{
        fontSize: 14,
        fontWeight: 'bold',
        alignItems: 'center',
        fontFamily: 'Anton_400Regular',
        color: '#FFF'
    },
    UserID:{
        fontSize: 14,
        color: "#FFF",
    },
    Info:{
        flexDirection: 'row',
        color: '#FFF',
        fontSize: 12
    }

})
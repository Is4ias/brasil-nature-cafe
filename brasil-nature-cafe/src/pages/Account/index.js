import {Image, View, StyleSheet, ScrollView, Text, TouchableOpacity, Dimensions, LogBox, ImageBackground, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import OpenURLButton from '../../pages/Account/linkedin';
import OpenURLButton2 from '../../pages/Account/guithub';
import OpenURLButton3 from '../../pages/Account/instagram';


export default function MyAccount(){
    const navigation = useNavigation();

    const navigateToHome = () => (
    navigation.navigate('home')
)
    return (
        <View style={styles.Container}>
            {/* <Pressable>
            <ImageBackground
                    source={require('../../assets/cafe1.jpg')}
                    style={styles.ImageBackground}
                    resizeMode='cover'
                    onPress={navigateToHome}
                />
            </Pressable> */}
                

                {/* <TouchableOpacity style={styles.ContainerLogo}>
                    <Image
                        source={require('../../assets/rıbeirosss.png')}
                        style={styles.Logo}
                        />         
                </TouchableOpacity> */}

                
                <View style={styles.GraySquare3}> 
                    <Image
                        source={require('../../assets/kilerbean.png')}
                        style={styles.MinhaFt}
                    />

                    <View style={styles.ContainerInfo}>
                        <Text style={styles.Name}>Isaías Ribeiro</Text>
                        <Text style={styles.UserID}>Usuário 456.456</Text>
                        <View>
                            <View style={styles.searchBarContainer}>
                                <Text styles={{ color: '#FFF'}}>E-mail: killerCafe@gmail.com</Text>
                            </View>
                            <View style={styles.searchBarContainer}>
                                <Text style={{ color: '#FFFFFF'}}>Number: 987654321</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.IconsFooter}>
                            <OpenURLButton></OpenURLButton>
                            <OpenURLButton2></OpenURLButton2>
                            <OpenURLButton3></OpenURLButton3>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor: '#0C0F14',
        flex: 1,
    },    
    ImageBackground:{
        width: Dimensions.get('window') .width,
        height: Dimensions.get('window').height,

    },
    ContainerLogo: {
        backgroundColor: '#AEAEAE',
        position: 'absolute',
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    Logo:{
        width: 120,
        height: 120,
        marginTop: 10,
        alignSelf:'center',
        
    },
    GraySquare3: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        borderRadius: 23,
        width: '85%',
        height: 550,
        position: 'absolute',
        bottom: 0,   
        alignSelf: 'center',
        marginVertical: 180
    },
    ContainerInfo: {
        marginLeft: 15,
        marginTop: 20,
        // backgroundColor: '#FFFF00'
    },
    searchBarContainer: {
        width: '90%',
        backgroundColor: '#252A32',
        borderRadius: '20px',
        padding: 10,
        marginVertical: 10,
        borderColor: '#FFF',
        
        
    },
    MinhaFt: {
         width: 100,
         height: 100,
         borderRadius: '80%',
         position: 'relative',
         alignSelf: 'flex-start',
         marginTop: 20,
         marginLeft: 10
    },
    Name:{
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        fontFamily: 'Anton_400Regular',
        color: '#FFF'
    },
    UserID:{
        fontSize: 20,
        color: "#FFF",
    },
    Info:{
        flexDirection: 'row',
        backgroundColor: '#FFF',
        fontSize: 20,
        borderRadius: 23,
        width: '60%',
        height: '40%',
        marginVertical: 10
    },
    IconsFooter:{
        flexDirection: 'row',
        gap: 10,
        marginVertical: 100,
        position: 'relative',
        alignSelf: 'center'
    },

})
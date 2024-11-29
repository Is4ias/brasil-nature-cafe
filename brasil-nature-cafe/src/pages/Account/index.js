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
                    source={require('../../assets/Hot Chocolate.jfif')}
                    style={styles.ImageBackground}
                    resizeMode='cover'
                    onPress={navigateToHome}
                />
            </Pressable>  */}
                

                <TouchableOpacity style={styles.containerLogo}>
                    <Image
                        source={require('../../assets/rıbeirosss.png')}
                        style={styles.imageLogo}  
                        resizeMode='contain'
                    />
                </TouchableOpacity>

                
                <View style={styles.GraySquare3}> 
                    <View>
                        <Image
                            source={require('../../assets/kilerbean.png')}
                            style={styles.MinhaFt}
                        />
                    </View>
                    

                    <View style={styles.ContainerInfo}>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.Name}>Isaías Ribeiro</Text>
                            <Text style={styles.UserID}>Usuário 456.456</Text>
                        </View>
                    </View>
                    
                    <View>
                        <Text style={{ colo: "#FFF"}}>
                            Phone
                        </Text>
                    </View>

                </View>
                <TouchableOpacity style={styles.IconsFooter}>
                    <OpenURLButton></OpenURLButton>
                    <OpenURLButton2></OpenURLButton2>
                    <OpenURLButton3></OpenURLButton3>
                </TouchableOpacity>

                
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
    },    
    ImageBackground:{
        width: Dimensions.get('window') .width,
        height: Dimensions.get('window').height,
        zIndex: 1,
    },
    containerLogo: {
        backgroundColor: '#D17842',
        margn
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    imageLogo:{
        width: 120,
        height: 120,
        marginTop: 15,
        alignSelf:'center',
        
    },
    GraySquare3: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderRadius: 23,
        width: '80%',
        position: 'absolute',
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
        padding: 10,
        marginHorizontal: '10%'
    },
    ContainerInfo: {
        marginLeft: 15,
        marginTop: 20,
        

    },
    // searchBarContainer: {
    //     width: '90%',
    //     backgroundColor: '#252A32',
    //     borderRadius: '20px',
    //     padding: 10,
    //     marginVertical: 10,
    //     borderColor: '#FFF',
        
        
    // },
    
    MinhaFt: {
         width: 100,
         height: 100,
         borderRadius: '80%',
         marginTop: 20,
         marginLeft: 10,
         alignSelf: 'center'
    },
    Name:{
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
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
        alignSelf: 'center',
        justifyContent: 'flex-end',
        zIndex: 3,
        position: 'absolute',
        marginVertical: '180%'
    },

})
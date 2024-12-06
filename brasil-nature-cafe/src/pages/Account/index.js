import {Image, View, StyleSheet, ScrollView, Text, TouchableOpacity, Dimensions, button, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


import OpenURLButton from '../../pages/Account/linkedin';
import OpenURLButton2 from '../../pages/Account/guithub';
import OpenURLButton3 from '../../pages/Account/instagram';


export default function MyAccount(){
    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('home');
    };
    return (
        <View style={styles.Container}>
                {/* <ImageBackground
                    source={require('../../assets/Hot Chocolate.jfif')}
                    style={styles.ImageBackground}
                    resizeMode='cover'
                /> */}
        
                
                <TouchableOpacity style={styles.containerLogo}>
                    <Image
                        source={require('../../assets/rıbeirosss.png')}
                        style={styles.imageLogo}  
                        resizeMode='contain'
                        onPress={navigateToHome}
                    />
                </TouchableOpacity>

                
                <View style={styles.GraySquare3}> 
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <MaterialIcons 
                        name="account-circle" 
                        color='#FFF' 
                        size={100}
                        />

                        <Text style={styles.Name}>Isaías Ribeiro</Text>
                        <Text style={styles.UserID}>isaias0233@gmail.com</Text>
                    </View>
                   
                    <View style={styles.ContainerInfo}>
                        <View >
                            <Pressable style={{ height: 'auto', width:100, backgroundColor: '#AEAEAE', marginTop: 10, borderRadius: 23,  alignItems: 'center'}}>
                                Edit Perfil
                            </Pressable>
                            
                            <View>
                                <Text style={{ marginTop: 10, fontSize:20, fontWeight:'bold', color:'#3F2A22 '}}>Personal information</Text>
                                <Text style={{color:'#C69C6D'}}>-----------------------------</Text>
                                <Text style={styles.textInfo}>E-mail: isaias0233@gmail.com</Text>
                                <Text style={styles.textInfo}>Phone: 4402-8922 </Text>

                                <Text style={{color:'#3F2A22 ', marginTop: 30, fontSize: 20, fontWeight: 'bold'}}>Security</Text>
                                <Text style={styles.textInfo}>Change number</Text>
                                <Text style={styles.textInfo}>Change email</Text>
                            </View>
                            
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'center', gap: 10, marginTop: 50}}>
                        <Pressable style={{ width:80, height:40, backgroundColor: '#E3C9A9', borderRadius: 23, alignItems:'center'}}>
                            add cont
                        </Pressable>
                        <Pressable style={{ width:80, height: 40, backgroundColor: '#D17842', borderRadius: 23, alignItems:'center'}}>
                            Log Out
                        </Pressable>
                    </View>

                    <TouchableOpacity style={styles.IconsFooter}>
                        <OpenURLButton></OpenURLButton>
                        <OpenURLButton2></OpenURLButton2>
                        <OpenURLButton3></OpenURLButton3>
                    </TouchableOpacity>
 
                </View>

                
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#F5F5DC'
    },    
    ImageBackground:{
        width: Dimensions.get('window') .width,
        height: Dimensions.get('window').height, 
        zIndex: 1,
    },
    containerLogo: {
        backgroundColor: '#D17842',
        // marginHorizontal: '35%',
        position: 'absolute',
        zIndex:2,
        alignSelf: 'center'
    },
    imageLogo:{
        width: 100,
        height: 120,
        marginTop: 20,
        alignSelf:'center',
        
    },
    GraySquare3: {
        backgroundColor: '#A67B5B',
        borderRadius: 23,
        width: '80%',
        zIndex: 3,
        marginTop: '40%',
        padding: 10,
        marginHorizontal: '10%'
    },
    ContainerInfo: {
       
        

    },

    MinhaFt: {
         width: 100,
         height: 100,
         borderRadius: '80%',
         marginTop: 20,
         marginLeft: 10,
         alignSelf: 'center',
         zIndex: 4
    },
    infoPessoal: {

    },
    Name:{
        fontSize: 18,
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
    textInfo: {
        color:'#E3C9A9', 
        fontSize: 15,
        marginLeft: 10
    },
    buttonStyle:{
        height: 20,
        width: 20,
        color: '#0000',
        marginTop: 15
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
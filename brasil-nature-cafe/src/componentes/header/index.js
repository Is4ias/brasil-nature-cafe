import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Header(){
    const navigation = useNavigation()

    const navigateToNotification = () => {
        navigation.navigate('Notifications');
    };

    return(
        <View>
            <View style={ style.headerTop }>
                <TouchableOpacity >
                        <Entypo 
                            style={ style.MenuOpen} 
                            onPress={() => console.log("abri o drawer") }
                            name="menu"
                            size={28}
                            color="#FFF"
                        />
                </TouchableOpacity>


                
                <View style={style.containerLogo}>
                    <Image
                        source={require('../../assets/rıbeirosss.png')}
                        style={style.imageLogo}  
                        resizeMode='contain'
                    />
                </View>
                
                <TouchableOpacity >
                        <Entypo  
                            style={style.NotificationBell}
                            name="bell"
                            size={28}
                            color="#FFF"
                            onPress={navigateToNotification}
                        />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    headerTop:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    MenuOpen:{
        marginLeft: 20,
    },
    containerLogo:{
        backgroundColor: `#D17842`
    },
    imageLogo:{
        width: 100,
        height: 120,
        marginTop: 20,
        alignSelf: 'center'
    },
    NotificationBell:{
        marginRight: 20
    }
})
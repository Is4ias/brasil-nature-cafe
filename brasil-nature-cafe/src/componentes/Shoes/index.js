import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { View, Text , TouchableOpacity, Image, StyleSheet} from "react-native";

export default function Shoes(props){
    function filterDescricao(desc){
        if (desc.length < 10){
            return desc;
        }
        return `${desc.substring(0,15)}...`; //substring recebe o parametro que vai começar e terminar
    }

    
    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}> 
            <Image
                source ={props.img}
                style={styles.shoesImg}
            />
            <View>
                <Text style={styles.shoesText}>
                    {filterDescricao(props.children)}
                </Text>
            </View>
            <View opacity={0.4}>
                <Text style={styles.shoesText}> {props.cost} </Text>
            </View>

            <View style={styles.PosionIcons}>
                <View style={{ }}> 
                    <MaterialIcons
                        name="attach-money"
                        size={25}
                        color="#ff8c00"
                    />
                </View>
                <View style={{  }}>
                    <AntDesign
                        name="pluscircle"
                        size={25}
                        color="#ff8c00"
                    />
                </View>
            </View>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    container:{
        paddingVertical: '5%',
        alingItens: 'center',
        justifyContent: 'center',

    },
    shoesImg:{
        borderRadius: 20,
        width: '126px',
        height: '126px',
        margin: 10,
        marginTop: 5

    },
    shoesText:{
        color: '#f0f8ff',
        fontSize: 16,
        marginHorizontal: '5%',
        width: '92.13px',
        heigth: '22.75px',
    },
    PosionIcons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginRight: 8
        
    }
});
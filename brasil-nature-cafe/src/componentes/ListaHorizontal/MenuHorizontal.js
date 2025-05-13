import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    { id: 'all', title: 'All' },
    { id: 'capuccino', title: 'Capuccino' },
    { id: 'express', title: 'Express' },
    { id: 'american', title: 'American' },
    { id: 'traditional', title: 'Traditional' },
    { id: 'no sugar', title: 'No sugar' },
];

export default function CoffeList() {
    const [selectedId, setSelectedId] = useState('all');
    const navigation = useNavigation();

    const handlerPress = (id) => { //ATUALIZANDO O ITEM SELECIONADO 
        setSelectedId(id);
        if (id != 'all') {
            navigation.navigate(id); //NAVEGANDO PARAR A TELA SELECIONADA
        } else {
            navigation.navigate('Home');
        }
    };

    const renderItem2 = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.itemContainer,
                selectedId === item.id && styles.selectedItem, 
            ]}
            onPress={() => handlerPress(item.id)}>

                <Text
                    style={[
                        styles.itemText,
                        selectedId === item.id && styles.selectedText,
                    ]}
                    >
                    {item.title}

                </Text>
        </TouchableOpacity>
    );
    return (
            <View style={ styles.containerList}>
                <FlatList
                    horizontal
                    data={DATA}
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    showsHorizontalScrollIndicator={false}
                    
                />
            </View>
    );
}
const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#52555A',
        alignItems: 'center',
        justifyContent: 'center'

    },
    selectedItem: {
        backgroundColor: '#D17842',
    },
    itemText: {
        color: '#FFF',
        fontSize: 15,
        
    },
    selectedText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    containerList: {
        flex: 1,
        marginTop: 40,
        marginVertical: 20,
        marginHorizontal: 20,
        

    }
})

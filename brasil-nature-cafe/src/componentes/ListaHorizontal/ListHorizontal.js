import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [selectedId, setSelectedId] = useState(null);
    const DATA = [
        { id: 'all', title: 'All' },
        { id: 'capuccino', title: 'Capuccino' },
        { id: 'expresso', title: 'Expresso' },
        { id: 'americano', title: 'Americano' },
        { id: 'tradicional', title: 'Tradicional' },
        { id: 'Sem açúcar', title: 'Sem açúcar' },
    ];

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.title, style]}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const color = item.id === selectedId ? '#D17842' : '#52555A';

        return (
        <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            style={{ color }}
        />
        );
    };


    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {

        })
    },[])


const navigation = useNavigation();
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        backgroundColor: '#0C0F14',
        marginRight: 20,
        marginLeft: 50,
        marginVertical: 0
    },
})
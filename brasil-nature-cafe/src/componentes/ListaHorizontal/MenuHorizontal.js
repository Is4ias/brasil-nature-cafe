import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DATA = [
    { id: 'all', title: 'All' },
    { id: 'capuccino', title: 'Capuccino' },
    { id: 'expresso', title: 'Expresso' },
    { id: 'americano', title: 'Americano' },
    { id: 'tradicional', title: 'Tradicional' },
    { id: 'Sem açúcar', title: 'Sem açúcar' },
];

export default DATA;

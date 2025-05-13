import { EvilIcons, Ionicons } from '@expo/vector-icons';
import iconSet from '@expo/vector-icons/build/Fontisto';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

const SearchBar= ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TouchableOpacity>
          <Ionicons style={styles.IconSearch}
            name='search'
            size={18}
            color="#52555A"/>
        </TouchableOpacity>
        
        <TextInput
          style={styles.searchInput}
          placeholder="Encontre seu café"
          value={query}
          onChange={handleInputChange}
          color="#52555A"
        />
        {/* <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={{ color: 'white'}}>pesquisa</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  searchBarContainer: {
    width: '88%',
    backgroundColor: '#252A32', 
    borderRadius: '15px',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 40
  },
  
  searchInput:{
    flex: 1, 
    backgroundColor: '#252A32',
    borderRadius: '15px',
    padding: 5,
    marginRight: 10,
    fontSize: 15,
    height: '100%' ,
    color: '#52555A'
  },
  IconSearch: {
    padding: 5
  }

//   searchButton:{
//     backgroundColor: '#D17842', 
//     borderRadius: 23,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//  },
});

export default SearchBar;
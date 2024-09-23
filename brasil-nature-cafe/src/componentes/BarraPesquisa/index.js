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
        <TextInput
          style={styles.searchInput}
          placeholder="Find Your Coffe..."
          value={query}
          onChange={handleInputChange}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={{ color: 'white'}}>pesquisa</Text>
        </TouchableOpacity>
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
    width: '80%',
    backgroundColor: '#252A32', 
    borderRadius: '15px',
    padding: 10,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  
  searchInput:{
    flex: 1, /* A entrada de texto ocupa todo o espaço disponível */
    backgroundColor: '#252A32', /*cor de fundo do input*/
    borderRadius: '15px',
    padding: 5,
    marginRight: 10,
    fontSize: 15 //espaço entre campo de pesquisa e o botao
  },

  searchButton:{
    backgroundColor: '#D17842', 
    borderRadius: 23,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
 },
});

export default SearchBar;
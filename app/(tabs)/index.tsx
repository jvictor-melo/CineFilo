//TODO - Barra de Pesquisa, Lista de filmes abaixo, tudo organizado verticalmente (escrever codigo em ingles)

import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


//* Tradalho com eles depois
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter()
  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState('')
  const filteredMovies = movies.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
  
  //* Definindo a imagen como 1/3 pra ter so 3 cards ta tela sem serem dimensionados automaticamente
  const screenWidth = Dimensions.get('window').width
  const cardWidth = (screenWidth - 40 - 30) / 3
  return (
    
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Procure um filme...'
          placeholderTextColor="gray"
          value={search}
          onChangeText={(text) => setSearch(text)}>          
        </TextInput>
      </View>
      <FlatList 
      numColumns={3}
      data={filteredMovies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => router.push({
          pathname: '/movie/[id]',
          params: { id: item.id }
        })}>
          <View style={[styles.movieCard, { width: cardWidth }]}>
            <Image 
              source={{ uri: item.poster}}
              style={styles.image}/>
            <Text style={{ color: 'white', marginBottom: 10}}>
              {item.title}
            </Text>
          </View>
        </Pressable>
      )}
      /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#000000',
    flex: 1,
    paddingHorizontal: 20
  },
  searchBarContainer: {
    backgroundColor: '#2e2e2e',
    color: 'white',
    width: '100%',
    borderRadius: 10,
    padding: 10
  },
  textInput: {
    color: 'white'
  },
  // RN é dominado por tres forças: flex, width/height, aspectRatio
  movieCard: {
    margin: 5,
    aspectRatio: 2/3
  },
  image: {
    width: '100%',
    height: 150
  },


});


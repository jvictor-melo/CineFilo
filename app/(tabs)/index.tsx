//TODO - Barra de Pesquisa, Lista de filmes abaixo, tudo organizado verticalmente (escrever codigo em ingles)
//! CONSERTAR PESQUISAS COM ACENTO

import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


//* Tradalho com eles depois
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter()

  const tmbdKey = process.env.EXPO_PUBLIC_TMDB_API_KEY
  
  // declarado um tipo de ts
  type Movie = {
      id: string,
      title: string,
      overview: string,
      poster_path: string
    }
  
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState<Movie[]>([])
    const [page, setPage] = useState(1)

  async function fetchMovies(){
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${tmbdKey}&language=pt-BR&&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    setMovies(prev => [...prev, ...data.results])
  }

  async function searchMovies() {
    const query = encodeURIComponent(search)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${tmbdKey}&language=pt-BR&query=${query}`
    const response = await fetch(url)
    const data = await response.json()
    setMovies(data.results)
  }

  useEffect(() =>{
    if (search.length === 0) {
    fetchMovies()
    }
    else {
      searchMovies()
    }
  }, [page, search])

  const filteredMovies = movies.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
  
  //* Definindo a imagen como 1/3 pra ter so 3 cards ta tela sem serem dimensionados automaticamente
  const screenWidth = Dimensions.get('window').width
  const cardWidth = (screenWidth - 40 - 30) / 3
  return (
    
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Procure um filme minha lalazinha linda...'
          placeholderTextColor="gray"
          value={search}
          onChangeText={(text) => setSearch(text)}>          
        </TextInput>
      </View>
      <FlatList 
      onEndReached={() => setPage(prev => prev + 1)}
      onEndReachedThreshold={0.5}
      numColumns={3}
      data={filteredMovies}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => (
        <Pressable onPress={() => router.push({
          pathname: '/movie/[id]',
          params: { id: item.id }
        })}>
          <View style={[styles.movieCard, { width: cardWidth }]}>
            <Image 
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
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
    padding: 10,
    marginBottom: 5
  },
  textInput: {
    color: 'white'
  },
  // RN é dominado por tres forças: flex, width/height, aspectRatio
  movieCard: {
    margin: 5,
    aspectRatio: 2/3,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 150
  },


});


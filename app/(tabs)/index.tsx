//TODO - Barra de Pesquisa, Lista de filmes abaixo, tudo organizado verticalmente (escrever codigo em ingles)

import React, { useState } from 'react';
import { Image } from 'expo-image';
import { Platform, ScrollView, FlatList, StyleSheet, Button, View, Text, Alert, TextInput, } from 'react-native';

import { HelloWave } from '@/components/hello-wave';

//* Tradalho com eles depois
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const movies = [
    {
      id: '1',
      title: 'Matrix',
      overview: 'Um hacker descobre a verdade...',
    },
    {
      id: '2',
      title: 'Kung Fu Panda',
      overview: 'Um panda vira dragao.',
    },
    {
      id: '3',
      title: 'Oi',
      overview: 'Um hacker descobre a verdade...',
    },
    {
      id: '4',
      title: 'Kung Fu Tchay',
      overview: 'Um panda vira dragao.',
    },
  ]

  const [search, setSearch] = useState('')
  const filteredMovies = movies.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
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
        <View style={styles.movieCard}>
          <Text style={{ color: 'white', marginBottom: 10}}>
            {item.title}
          </Text>
        </View>
      )}
      /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#0000',
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
  movieCard: {
    flex: 1,
    margin: 5
  }


});


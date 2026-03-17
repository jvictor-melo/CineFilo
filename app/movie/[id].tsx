import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/* MAPA MENTAL
FUNCIONAMENTO: Lista de filmes -> Clicar -> Tela de detalhes -> Salvar localmente -> ver offline
1. Pegar o Id
2. Buscar filme na API com Id
3. Guardar Estado
4. renderizar a tela
*/

export default function MovieScreen() {
    const router = useRouter()
    const tmbdKey = process.env.EXPO_PUBLIC_TMDB_API_KEY

    const { id } = useLocalSearchParams() //peguei o id que ja ta vindo do index

    type Movie = {
      title: string,
      overview: string,
      poster_path: string,
      release_date: string,
      vote_average: number
    }

    const [ movie, setMovie ] = useState<Movie | null>(null)
    
    async function fetchMovie(){
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${tmbdKey}&language=pt-BR`
        const response = await fetch(url)
        const data = await response.json()
        setMovie(data)
    }
    useEffect(() =>{
        fetchMovie()
    }, [id])

    if (!movie) {
        return (
            <SafeAreaView>
                <Text>Carregando...</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView>
            <View>
                <Image
                source = {{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={{ width: 200, height: 300}}
                />
                <Text>{movie.title}</Text>
                <Text>{movie.overview}</Text>
                <Text>{movie.release_date}</Text>
                <Text>{movie.vote_average}</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    
});


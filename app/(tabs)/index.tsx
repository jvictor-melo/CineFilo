import React, { useState } from 'react';
import { Image } from 'expo-image';
import { Platform,  StyleSheet, Button, View, Text, Alert, } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  //const [valor, setValor] = useState(0)
  const [clicado, setClicado] = useState(false)

  // function SomarValor() {
  //   setValor(valor + 1)
  // }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f3f3f3', dark: '#000000' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Cinefilo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Button
          color="#000000"
          title="Clicou aqui"
          onPress={() => setClicado(true)}
        />
        {clicado && <ThemedText>Você clicou!</ThemedText>}
      </ThemedView> 
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

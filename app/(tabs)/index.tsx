import React, { useState } from 'react';
import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet, Button, View, Text, Alert, } from 'react-native';

import { HelloWave } from '@/components/hello-wave';

//* Tradalho com eles depois
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
    <View style={styles.testContainer}>
      <View style={styles.titleContainer}>
        <Text>Cinefilo!</Text>
        <HelloWave />
      </View>
      <View>
        <Button
          color="#ff0000"
          title="Clique aqui"
          onPress={() => setClicado(true)}
        />
        {clicado && <Text style={styles.message}>Você clicou!</Text>}
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  testContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    marginBottom: 20,
  },
  message: {
    marginTop: 10,
    color: 'red'
  }
});


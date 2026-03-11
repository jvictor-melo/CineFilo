import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const router = useRouter()
    const tmbdKey = process.env.EXPO_PUBLIC_TMDB_API_KEY


    return (
        <SafeAreaView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    
});


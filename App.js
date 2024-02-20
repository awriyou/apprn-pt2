import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
export default function App() {
  return (
    <LinearGradient colors={['#254959', '#95b1bd']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/bg.jpg')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#254959',
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.15
  }
});

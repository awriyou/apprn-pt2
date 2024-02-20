import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickNumber){
    setUserNumber(pickNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}/>
  } //jika terdapat number user, tampilkan ke game screen

  return (
    <LinearGradient colors={['#254959', '#95bcbd']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/bg.jpg')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        {screen}
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

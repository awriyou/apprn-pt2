import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'Anta': require('./assets/fonts/Anta-Regular.ttf'),
    'Dancing': require('./assets/fonts/DancingScript-Regular.ttf'),
    'DancingBold': require('./assets/fonts/DancingScript-Bold.ttf'),
    'Oswald': require('./assets/fonts/Oswald-Regular.ttf'),
    'OswaldBold': require('./assets/fonts/Oswald-Bold.ttf'),
  });

  if(!fontsLoaded) {
    return <View></View>;
  }

  function pickedNumberHandler(pickNumber) {
    setUserNumber(pickNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  } //jika terdapat number user, tampilkan ke game screen

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={['#254959', '#95bcbd']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/bg.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#254959',
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
export default function App() {
  return (
    <View className="p-10 mt-10 flex-1 justify-center items-center">
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});

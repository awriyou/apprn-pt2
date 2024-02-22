import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View className="flex-1 p-[24px] justify-center items-center ">
      <Title>GAME OVER!</Title>
      <View className=" w-[300px] h-[300px] rounded-[150px] border-2 border-primary2 overflow-hidden m-[36px]">
        <Image
          source={require('../assets/images/success.png')}
          className="w-full h-full "
        />
      </View>
      <Text style={styles.SummaryText}>
        Your Phone needed  <Text style={styles.higlightText}>{roundsNumber}</Text>  rounds to
        guess the number <Text style={styles.higlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    SummaryText:{
        fontFamily: 'Anta',
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    higlightText:{
        fontFamily: 'OswaldBold',
    }

})
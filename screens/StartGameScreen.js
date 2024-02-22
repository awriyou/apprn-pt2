import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Please enter a number between 0 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View className="flex-1 mt-44 items-center">
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          className=" h-16 w-14 text-center text-2xl border-b-4 border-b-secondary text-green-200 my-4 font-bold"
          autoCorrect={false}
          autoCapitalize="none"
          value={enteredNumber}
          // onChangeText={(text) => setEnteredNumber(text)}
          onChangeText={numberInputHandler}
        />
        <View className="flex-row justify-center">
          <View className="flex-1">
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View className="flex-1">
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25, //!for ios
  },
});

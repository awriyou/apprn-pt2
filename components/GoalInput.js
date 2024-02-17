import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Text,
  Pressable,
  Image,
} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer} className="bg-purple-300">
        <Image
          source={require('../assets/images/goal.png')}
          className="h-20 w-20 mb-8"
        />
        <TextInput
          placeholder="Your Goals!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          className="bg-purple-50 border-purple-100"
        />
        <View className="flex-row gap-3 mt-5">
          <Pressable
            className="px-4 py-2 bg-red-500 items-center rounded-md"
            onPress={props.onCancel}
          >
            <Text className="font-bold text-white">Cancel</Text>
          </Pressable>
          <Pressable
            className="px-4 py-2 bg-purple-500 items-center rounded-md"
            onPress={addGoalHandler}
          >
            <Text className="font-bold text-white">Add Goal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 12,
    borderRadius: 10,
  },
});

import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View
      style={styles.inputContainer}
      className="items-center mx-8 rounded-lg mt-60 p-10 bg-[#95b1bd] opacity-60"
    >
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        className=" h-16 w-10 text-center text-2xl border-b border-b-cyan-900 text-green-200 my-4 font-bold"
      />
      <View className="flex-row justify-center">
        <View className="flex-1">
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View className="flex-1">
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
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

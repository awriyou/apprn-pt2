import { Pressable, StyleSheet, Text, View } from 'react-native';

const PrimaryButton = ({ children }) => {
  function pressHandler() {
    console.log('PRessed');
  }
  return (
    <View style={sty.buttonOuterContainer}>
      {/* <View className="bg-[] rounded-md px-6 py-3 mx-3 my-3 shadow-xl"> */}
      <Pressable
        style={({pressed}) => pressed ? [sty.buttonInnerContainer, sty.pressed] : sty.buttonInnerContainer} //if for ios
        onPress={pressHandler}
        android_ripple={{ color: '#254959' }}
      >
        <Text className="text-white text-center">{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;


const sty = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: 'hidden',
    borderRadius: 20,
  },
  buttonInnerContainer: {
    backgroundColor: '#297697',
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginHorizontal: 8,
  },
  pressed: {
    opacity: 0.75,

  }
});
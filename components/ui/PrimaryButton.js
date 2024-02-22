import {
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

const PrimaryButton = ({ children, onPress }) => {
  // function pressHandler() {
  //   console.log('PRessed');
  // }
  return (
    <View style={sty.buttonOuterContainer}>
      {/* <View className="bg-[] rounded-md px-6 py-3 mx-3 my-3 shadow-xl"> */}
      {/* <Pressable
        style={({pressed}) => pressed ? [sty.buttonInnerContainer, sty.pressed] : sty.buttonInnerContainer} //if for ios
        onPress={pressHandler}
        android_ripple={{ color: '#254959' }}
      > */}
      <TouchableOpacity className='bg-primary2' style={sty.buttonInnerContainer} onPress={onPress}>
        <Text className="text-white text-center text-lg" style={{ fontFamily: 'Anta' }}>{children}</Text>
      </TouchableOpacity>
      {/* </Pressable> */}
    </View>
  );
};

export default PrimaryButton;

const sty = StyleSheet.create({
  // buttonOuterContainer: {
  //   margin: 4,
  //   overflow: 'hidden',
  //   borderRadius: 20,
  // },
  buttonInnerContainer: {
    // backgroundColor: Colors.primary,
    paddingVertical: 3,
    // paddingHorizontal: 24,
    marginHorizontal: 6,
    marginTop: 20,
    borderRadius: 16,
    elevation: 2,
  },
  // pressed: {
  //   opacity: 0.75,
  // },
});

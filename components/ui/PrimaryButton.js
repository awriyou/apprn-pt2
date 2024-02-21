import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../const/cp';

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
      <TouchableOpacity style={sty.buttonInnerContainer} onPress={onPress}>
        <Text className="text-white text-center">{children}</Text>
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
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginHorizontal: 8,
    marginTop: 10,
    borderRadius: 20,
  },
  // pressed: {
  //   opacity: 0.75,
  // },
});

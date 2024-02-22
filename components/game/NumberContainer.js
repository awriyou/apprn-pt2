import { Text, View } from "react-native";

const NumberContainer = ({children}) => {
    return (
      <View className="border-2 border-primary2 mx-12 mt-10 p-10 rounded-lg items-center justify-center">
        <Text
          style={{ fontFamily: 'DancingBold' }}
          className=" text-secondary text-[30px]"
        >
          {children}
        </Text>
      </View>
    );
}

export default NumberContainer;
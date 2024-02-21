import { Text, View } from "react-native";

const NumberContainer = ({children}) => {
    return (
      <View className='border-2 border-primary2 m-12 p-10 rounded-lg items-center justify-center'>
        <Text className='text-secondary text-[30px] font-bold'>{children}</Text>
      </View>
    );
}

export default NumberContainer;
import { Text, View } from "react-native";

const PrimaryButton = ({children}) => {
    return (
        <View className='bg-blue-400 rounded-md px-3 py-1'>
            <Text>{children}</Text>
        </View>
    );
}

export default PrimaryButton;
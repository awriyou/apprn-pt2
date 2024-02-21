import { View, Text } from "react-native";

const Title = ({children}) => {
    return (
      <Text className="text-[24px] font-bold text-white text-center border border-white p-4">
        {children}
      </Text>
    );
}

export default Title;
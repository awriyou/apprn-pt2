import { View, Text } from "react-native";

const Title = ({children}) => {
    return (
      <Text
        style={{ fontFamily: 'Anta' }}
        className="text-[24px] text-white text-center border border-white p-4"
      >
        {children}
      </Text>
    );
}

export default Title;
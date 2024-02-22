import { Text } from "react-native";

const InstructionText = ({children}) => {
    return (
      <Text className="text-xl text-secondary font-bold">{children}</Text>
    );
}

export default InstructionText;
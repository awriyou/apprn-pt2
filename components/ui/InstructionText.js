import { Text } from "react-native";

const InstructionText = ({children, style}) => {
    return (
      <Text  className="text-2xl text-primary" style={[{fontFamily: 'Oswald'}, style]}>{children}</Text>
    );
}

export default InstructionText;
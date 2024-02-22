import { View, Text, StyleSheet } from "react-native";

const Card = ({children}) => {
  return (
    <View
      style={styles.card}
      className="items-center mx-8 rounded-lg mt-8 p-10 bg-[#95b1bd] opacity-60"
    >
    {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25, //!for ios
  },
});

export default Card;

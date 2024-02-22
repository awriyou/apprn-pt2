import { Text, View } from 'react-native';

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View
      className="border border-primary2 rounded-[40px] p-4 my-4 bg-secondary flex-row justify-between w-full"
      style={{ elevation: 2, shadowColor: 'black ', shadowOpacity: 0.15, shadowOffset: { width: 0, height: 2 }, shadowRadius: 3 }}
    >
      <Text className=''>#{roundNumber}</Text>
      <Text>Opponent's Guess : {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

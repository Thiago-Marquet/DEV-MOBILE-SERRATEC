import {StyleSheet} from 'react-native';
import { Blackjack } from '../../Components/blackjack';


const Game = () => {

  return (
    <Blackjack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#289B49',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    shadowRadius: 3,
    margin: 10,
    height: 150,
    width: 100,
    borderRadius: 10
  }
});

export default Game;

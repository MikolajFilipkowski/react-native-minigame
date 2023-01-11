import { StyleSheet,ImageBackground } from 'react-native';
import StartGameScreen from './GUI/StartGameScreen';
//import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  return (
    <ImageBackground source={require('./assets/dice.jpg')} style={styles.container}>
      <StartGameScreen/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Hello world</Text>
      </View>
      <View>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Praesentium sint facere assumenda natus nam atque. Saepe, quibusdam
          odio! Modi sed laborum totam nam reiciendis eos quia dolorem quaerat.
          Quos, deleniti.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    backgroundColor: 'red',
    padding: 20,
    fontWeight: 'bold',
    color:'white'
  },

  paragraph:{
    padding: 10,
    textAlign:'center'
  }
  
});

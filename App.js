import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('John');
  const [person, setPerson] = useState({ name: 'John', age: 20 })

  const clickHandler = () => {
    setName('Tommy');
    setPerson({ name: 'Tommy', age : 50 });
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.heading}>person name is {person.name}, age is {person.age}</Text>
      </View>
      <View>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Praesentium sint facere assumenda natus nam atque. Saepe, quibusdam
          odio! Modi sed laborum totam nam reiciendis eos quia dolorem quaerat.
          Quos, deleniti.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Change' onPress={clickHandler} />
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
    backgroundColor: 'gray',
    padding: 20,
    margin: 5,
    textAlign:'center',
    fontWeight: 'bold',
    color: 'white'
  },

  paragraph: {
    padding: 10,
    textAlign: 'center'
  },

  buttonContainer: {
    marginTop: 20
  }

});

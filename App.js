import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('___');
  const [age, setAge] = useState('___');

  return (
    <View style={styles.container}>
      <View >
        <Text> Input name: </Text>
        <TextInput
          placeholder='your name'
          style={styles.inputField}
          onChangeText={(val) => setName(val)}
        />

        <Text> Input age: </Text>
        <TextInput
          keyboardType='numeric'
          placeholder='your age'
          style={styles.inputField}
          onChangeText={(val) => setAge(val)}
        />
      </View>

      <Text style={styles.output}>Name : {name} | age : {age}</Text>
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

  inputField: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 5,
    width: 200
  },

  output: {
    backgroundColor: 'gray',
    padding: 10,
    width: 200,
    textAlign: 'center',
    color:'white'
  }
});

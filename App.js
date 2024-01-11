import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'John', key: '1' },
    { name: 'Peter', key: '2' },
    { name: 'Tommy', key: '3' },
    { name: 'Ruby', key: '4' },
    { name: 'Shaun', key: '5' },
    { name: 'James', key: '6' },
    { name: 'Harry', key: '7' },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'orange',
    fontSize: 24
  }
});

import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'John', id: '1' },
    { name: 'Peter', id: '2' },
    { name: 'Tommy', id: '3' },
    { name: 'Ruby', id: '4' },
    { name: 'Shaun', id: '5' },
    { name: 'James', id: '6' },
    { name: 'Harry', id: '7' },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      // return new array without selected id
      return prevPeople.filter(person => person.id != id);
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1} // default 1 column
        keyExtractor={(item) => item.id} // default looks for key
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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

import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todo, setTodo] = useState([
    { text: 'wake up', key: '1' },
    { text: 'code', key: '2' },
    { text: 'eat', key: '3' },
    { text: 'play', key: '4' },
    { text: 'sleep', key: '5' },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});

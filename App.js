import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todo, setTodo] = useState([
    { text: 'examples', key: '0' },
    { text: 'wake up', key: '1' },
    { text: 'code', key: '2' },
    { text: 'eat', key: '3' },
    { text: 'play', key: '4' },
    { text: 'sleep', key: '5' },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text, clearTextCallback) => {
    if (text.length > 3) {
      setTodo(prevTodo => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodo
        ]
      })
      // clear text field after add to list
      clearTextCallback();
    } else {
      Alert.alert(
        'OOPS',
        'Your todo is too short! Make it a bit longer, at least 4 characters.',
        [{ text: 'understood', onPress: () => console.log('alert closed') }]
      )
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        {/* rest */}
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  }
});

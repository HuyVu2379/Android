import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';

import Task from './components/Task/index';
import styles from './style';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { setTasks } from './Redux/Action';

function TodoApp() {
  // Lấy danh sách tasks từ Redux
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://67150f4d33bc2bfe40b94064.mockapi.io/ToDoList')
      .then(response => {
        dispatch(setTasks(response.data)); 
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {tasks.map((task, index) => (
            <Task key={index} title={task.title} number={index + 1} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

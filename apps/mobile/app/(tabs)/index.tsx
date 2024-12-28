import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';

interface ITaskProps {
  id: string;
  text: string;
}

export default function TodoApp() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITaskProps[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask('');
    }
  };

  const renderItem = ({ item }: {item: ITaskProps}) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    color: 'white',
  },
  input: {
    height: 40,
    color: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  taskList: {
    marginTop: 20,
    color: 'white',
  },
  taskItem: {
    color: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
    color:'white'
  },
});

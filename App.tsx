import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {BackgroundColor, Color, Normalize} from './constants/constants';
import RenderData from './component/renderData';
import AddTextInput from './component/addTextInput';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [task, setTask] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const addTask = () => {
    if (task) {
      if (editIndex !== -1) {
        const updatedTask = [...data];
        updatedTask[editIndex] = task;
        setData(updatedTask);
        setEditIndex(-1);
      } else {
        setData([...data, task]);
      }
      setTask('');
    }
  };

  const editTask = index => {
    const taskToEdit = data[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const deleteTask = () => {
    const updatedTask = [...data];
    updatedTask.splice(editIndex, 1);
    setData(updatedTask);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: BackgroundColor(),
        marginHorizontal: 20,
      }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text
        style={{fontSize: Normalize(26), color: Color(), fontWeight: '600'}}>
        Todo App
      </Text>
      <AddTextInput
        task={task}
        setTask={setTask}
        editIndex={editIndex}
        addTask={addTask}
      />
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <RenderData
            item={item}
            index={index}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;

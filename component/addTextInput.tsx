import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color, Normalize} from '../constants/constants';

const AddTextInput = ({task, setTask, editIndex, addTask}) => {
  return (
    <View
      style={{
        marginTop: Normalize(12),
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TextInput
        placeholder="Enter you task here..."
        defaultValue={task}
        onChangeText={task => {
          setTask(task);
        }}
        style={{
          width: '80%',
          color: Color(),
          borderColor: Color(),
          borderWidth: 1,
          borderRadius: Normalize(5),
          padding: Normalize(6),
        }}
      />
      <TouchableOpacity
        onPress={() => addTask()}
        style={{
          backgroundColor: 'green',
          padding: Normalize(8),
          borderRadius: Normalize(5),
        }}>
        <Text style={{color: Color(), fontWeight: '600'}}>
          {editIndex === -1 ? 'Add' : 'Update'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTextInput;

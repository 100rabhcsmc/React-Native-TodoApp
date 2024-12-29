import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Normalize} from '../constants/constants';

const RenderData = ({item, index, editTask, deleteTask}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#cce6ff',
        padding: Normalize(10),
        marginTop: Normalize(18),
        borderRadius: Normalize(5),
      }}>
      <Text>{item}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => editTask(index)}
          style={{marginEnd: Normalize(10)}}>
          <Text style={{color: 'green'}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(index)}>
          <Text style={{color: 'red'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderData;

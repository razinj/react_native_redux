import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {add, selectCounterValue, subtract} from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20}}>Counter: {counterValue}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Button title="Add" color="#265E92" onPress={() => dispatch(add())} />
        </View>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Button
            title="Subtract"
            color="#C1292E"
            onPress={() => dispatch(subtract())}
          />
        </View>
      </View>
    </View>
  );
};

export default Counter;

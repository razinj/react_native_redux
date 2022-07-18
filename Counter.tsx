import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20}}>Counter: {count}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Button
            title="Add"
            color="#265E92"
            onPress={() =>
              setCounter(currentCountValue => currentCountValue + 1)
            }
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Button
            title="Subtract"
            color="#C1292E"
            onPress={() =>
              setCounter(currentCountValue => currentCountValue - 1)
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Counter;

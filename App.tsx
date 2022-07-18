import React from 'react';
import {StatusBar, Text, useColorScheme, View} from 'react-native';
import Counter from './Counter';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Counter />
    </View>
  );
};

export default App;

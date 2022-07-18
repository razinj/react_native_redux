import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {Provider} from 'react-redux';
import Counter from './Counter';
import {store} from './store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Counter />
      </View>
    </Provider>
  );
};

export default App;

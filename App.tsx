import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Counter from './Counter';
import {persistor, store} from './store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Counter />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;

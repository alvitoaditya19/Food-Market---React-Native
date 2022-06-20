import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router/>
        <FlashMessage position="top" />

      </Provider>
    </NavigationContainer>
  );
};

export default App;

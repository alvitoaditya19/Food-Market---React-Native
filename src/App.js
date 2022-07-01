import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react';
import { Loading } from './components';
import { useSelector } from 'react-redux';

const MainApp = () => {
  // const loading = useSelector((state) => state.globalReducer.isLoading);
  const {isLoading} = useSelector((state) => state.globalReducer); //destructuring

  return(
    <NavigationContainer>
      <Router/>
      <FlashMessage position="top" />
      {isLoading && <Loading/>}
    </NavigationContainer>
  )
}

const App = () => {
  return (
      <Provider store={store}>
        <MainApp/>
      </Provider>
  );
};

export default App;

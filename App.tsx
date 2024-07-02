/**
 * @author Kaveen Sithija
 */
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import Spinner from './src/components/spinner/Spinner';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <Spinner />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import configureStore from '~/store/configureStore';
import { cashImages } from '~/lib';
import RootNavigation from '~/Navigations/RootNavigation';

const { store, persistor } = configureStore();

const App = (): React.ReactElement => {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cashImages([
      'https://images.unsplash.com/photo-1594569567351-ad9e90210643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      require('./assets/splash.png'),
    ]);
  };
  const onFinish = () => {
    setIsReady(true);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

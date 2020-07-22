import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import configureStore from 'src/store/configureStore';
import { cashImages } from 'src/lib';
import Stack from 'src/Navigations/Stack';

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

  return isReady ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={(e) => {
        console.log(e);
      }}
    />
  );
};

export default App;

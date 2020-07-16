import React, { useState } from 'react';
import { Image } from 'react-native';
import { AppLoading } from 'expo';
import styled from 'styled-components/native';
import { Asset } from 'expo-asset';

const Word = styled.Text``;

const cashImages = (images: Array<string | React.ReactText>) => {
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync;
    }
  });
};

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
    <Word>READY!</Word>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={(e) => {
        console.log('LOAD ERROR', e);
      }}
    />
  );
};

export default App;

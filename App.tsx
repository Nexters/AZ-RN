import React, { useState } from "react";
import { AppLoading } from "expo";
import styled from "styled-components";
import { Text } from "react-native";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {};
  const onFinish = () => {
    setIsReady(true);
  };
  return isReady ? (
    <Text>READY!</Text>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={(e) => {
        console.log("LOAD ERROR", e);
      }}
    />
  );
}

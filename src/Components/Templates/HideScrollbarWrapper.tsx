import React from 'react';
import { ScrollView } from 'react-native';

type HideScrollbarProps = {
  children: React.ReactChild | React.ReactChild[];
};

const HideScrollbarWrapper = ({ children }: HideScrollbarProps) => {
  return <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>;
};

export default HideScrollbarWrapper;

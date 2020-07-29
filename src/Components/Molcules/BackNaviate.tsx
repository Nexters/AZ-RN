import React from 'react';
import { Text, Rowbox, Image } from '~/Components/Atoms';
import backPng from '@png/back.png';
import { WHITE } from '~/constants/Colors';
import styled from 'styled-components/native';
import { NonLoginStackParams } from '~/@types';
import { StackNavigationProp } from '@react-navigation/stack';

type BackNaviateProps = {
  title: string;
  navigation: StackNavigationProp<NonLoginStackParams, any>;
};

const Touchable = styled.TouchableOpacity``;

const BackNaviate = ({ title, navigation }: BackNaviateProps) => {
  return (
    <Rowbox>
      <Touchable
        onPress={() => {
          navigation.goBack();
        }}>
        <Image imgSrc={backPng} />
      </Touchable>
      <Text
        text={title}
        fontWeight={700}
        fontSize="17px"
        marginLeft="17px"
        color={WHITE}
      />
    </Rowbox>
  );
};

export default BackNaviate;

import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { LoginStackParams } from '~/@types';
import { Text } from '~/Components/Atoms';
import { WHITE } from '~/constants/Colors';
import Layout from '~/constants/Layout';
import { useHandleInput } from '~/hooks';
import PostWriteViewer from './PostWriteViewer';

interface PostWriteProps {
  navigation: StackNavigationProp<LoginStackParams, 'PostWrite'>;
}
export interface FontStyleTypes {
  fontSize: string;
  lineHeight: string;
}

const PostWriteContainer = ({ navigation }: PostWriteProps) => {
  const [fontStyle, setFontStyle] = useState({
    fontSize: '35px',
    lineHeight: '40px',
  });

  const { bind } = useHandleInput('');

  const handlePostSubmit = () => {
    console.log('SUCC');
  };

  const handleFlexableFontSize = () => {
    const { text } = bind;
    if (text.length < 13) {
      setFontStyle({
        fontSize: '35px',
        lineHeight: '40px',
      });
    } else if (text.length < 51) {
      setFontStyle({
        fontSize: '22px',
        lineHeight: '27px',
      });
    } else {
      setFontStyle({
        fontSize: '16px',
        lineHeight: '21px',
      });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={handlePostSubmit}
          text="완료"
          color={WHITE}
          fontSize="16px"
          fontWeight={700}
        />
      ),
      headerRightContainerStyle: {
        paddingRight: Layout.width / 18,
      },
    });
  }, [navigation]);

  useEffect(() => {
    handleFlexableFontSize();
  }, [bind.text]);

  return <PostWriteViewer textAreaBinder={bind} fontStyle={fontStyle} />;
};

export default PostWriteContainer;

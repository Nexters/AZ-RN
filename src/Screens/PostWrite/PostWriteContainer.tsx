import React, { useLayoutEffect, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { LoginStackParams } from '~/@types';
import { Text } from '~/Components/Atoms';
import { WHITE } from '~/constants/Colors';
import Layout from '~/constants/Layout';
import { useHandleInput } from '~/hooks';
import PostWriteViewer from './PostWriteViewer';
import { postCreateContent } from '~/api';
import { useDispatch } from 'react-redux';
import { postCreateContentThunk } from '~/store/modules/post/thunks';

interface PostWriteProps {
  navigation: StackNavigationProp<LoginStackParams, 'PostWrite'>;
}
export interface FontStyleTypes {
  fontSize: string;
  lineHeight: string;
}

const PostWriteContainer = ({ navigation }: PostWriteProps) => {
  const dispatch = useDispatch();
  const { bind } = useHandleInput('');

  const handlePostSubmit = () => {
    const config = {
      ...postCreateContent,
      content: bind.text,
    };
    dispatch(postCreateContentThunk(config));
    navigation.navigate('Home');
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
  }, [navigation, bind.text]);

  return <PostWriteViewer textAreaBinder={bind} />;
};

export default PostWriteContainer;

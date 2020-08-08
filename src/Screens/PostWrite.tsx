import React, { useLayoutEffect } from 'react';
import { BackgroundContainer, SectionWrapper } from '~/Components/Templates';
import { Text, TextArea } from '~/Components/Atoms';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParams } from '~/@types';
import Layout from '~/constants/Layout';
import { WHITE } from '~/constants/Colors';

interface PostWriteProps {
  navigation: StackNavigationProp<LoginStackParams, 'PostWrite'>;
}
const PostWrite = ({ navigation }: PostWriteProps) => {
  const handlePostSubmit = () => {
    console.log('SUCC');
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

  return (
    <BackgroundContainer>
      <SectionWrapper>
        <TextArea />
      </SectionWrapper>
    </BackgroundContainer>
  );
};

export default PostWrite;

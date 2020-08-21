import React from 'react';
import { BackgroundContainer, SectionWrapper } from '~/Components/Templates';
import { TextArea } from '~/Components/Atoms';
import { InputBindType } from '~/hooks/useHandleInput';

interface PostWriteProps {
  textAreaBinder: InputBindType;
}
const PostWriteViewer = ({ textAreaBinder }: PostWriteProps) => {
  return (
    <BackgroundContainer>
      <SectionWrapper>
        <TextArea
          textAreaBinder={textAreaBinder}
          fontWeight={800}
          fontSize="22px"
          lineHeight="27px"
        />
      </SectionWrapper>
    </BackgroundContainer>
  );
};

export default PostWriteViewer;

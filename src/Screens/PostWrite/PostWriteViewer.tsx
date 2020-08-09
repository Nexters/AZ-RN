import React from 'react';
import { BackgroundContainer, SectionWrapper } from '~/Components/Templates';
import { TextArea } from '~/Components/Atoms';
import { InputBindType } from '~/hooks/useHandleInput';
import { FontStyleTypes } from './PostWriteContainer';

interface PostWriteProps {
  textAreaBinder: InputBindType;
  fontStyle: FontStyleTypes;
}
const PostWriteViewer = ({ textAreaBinder, fontStyle }: PostWriteProps) => {
  return (
    <BackgroundContainer>
      <SectionWrapper>
        <TextArea
          textAreaBinder={textAreaBinder}
          {...fontStyle}
          fontWeight={800}
        />
      </SectionWrapper>
    </BackgroundContainer>
  );
};

export default PostWriteViewer;

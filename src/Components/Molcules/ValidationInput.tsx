import React from 'react';
import styled from 'styled-components/native';

import { Colbox, Text } from '../Atoms';
import { InputBindType } from '~/hooks/useHandleInput';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const Input = styled.TextInput<StyleProps>`
  width: 100%;
  background-color: #3a3a3a;
  padding: ${ifIphoneX('14px 24px 14px 24px', '7px 12px 7px 12px')};
  border: 2px solid
    ${({ isAvailable }) => (isAvailable ? '#5f5f5f' : '#EA4040')};
  border-radius: 10px;
  font-size: 17px;
  margin-bottom: 10px;
`;

interface StyleProps {
  isAvailable?: boolean;
}

interface ValidationInputProps extends StyleProps {
  placeholder: string;
  onBlur: () => void;
  inputBinder: InputBindType;
  guideMsg: string;
}

const ValidationInput = ({
  placeholder,
  onBlur,
  inputBinder,
  isAvailable,
  guideMsg,
}: ValidationInputProps) => {
  const isUsed = isAvailable !== undefined && isAvailable;
  console.log('isUsed', isUsed);

  return (
    <Colbox>
      <Input
        placeholder={placeholder}
        onBlur={onBlur}
        isAvailable={!isUsed}
        {...inputBinder}
      />
      <>
        {isUsed && guideMsg.length > 1 && (
          <Text
            text={guideMsg}
            fontSize="15px"
            fontWeight={600}
            color="#EA4040"
            marginBottom={'10px'}
          />
        )}
      </>
    </Colbox>
  );
};

export default ValidationInput;

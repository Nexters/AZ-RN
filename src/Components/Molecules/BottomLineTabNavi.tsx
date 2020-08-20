import React from 'react';
import styled from 'styled-components/native';

import { Text } from '../Atoms';
import IconMsg from './IconMsg';
import { ImageSourcePropType } from 'react-native';

const BottomLineNavigation = styled.TouchableOpacity<StyleProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 9px;
  border-bottom-width: 4px;
  border-bottom-color: ${({ activationColor, isActivation }) =>
    isActivation ? `${activationColor}` : 'transparent'};
`;

interface StyleProps {
  isActivation: boolean;
  activationColor: string;
}

interface BottomLineTabNaviProps extends StyleProps {
  imgSrc: ImageSourcePropType;
  text: string;
  fontWeight: number;
  fontSize: string;
  onPress: () => void;
}

const BottomLineTabNavi = ({
  imgSrc,
  text,
  fontWeight,
  fontSize,
  isActivation,
  activationColor,
  onPress,
}: BottomLineTabNaviProps) => {
  return (
    <BottomLineNavigation
      isActivation={isActivation}
      activationColor={activationColor}
      onPress={onPress}>
      <IconMsg imgSrc={imgSrc} direction="column" height="20px" width="20px">
        <Text
          text={text}
          fontWeight={fontWeight}
          fontSize={fontSize}
          color={isActivation ? activationColor : undefined}
          marginTop="15px"
        />
      </IconMsg>
    </BottomLineNavigation>
  );
};

export default BottomLineTabNavi;

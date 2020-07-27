import React from 'react';
import styled from 'styled-components/native';
import { Rowbox, Text } from '../Atoms';
import { WHITE } from '~/constants/Colors';

const Container = styled.View`
  width: 100%;
`;
const Count = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 45px;
  border: 1px solid #ffffff;
  border-radius: 25px;
`;
const Gage = styled.View`
  width: 100%;
  height: 8px;
  border-radius: 30px;
  background-color: #ffffff;
`;
const FillGage = styled(Gage)<FillGageProps>`
  width: ${({ width }) => width ?? '0px'};
  position: absolute;
  background-color: ${({ fillColor }) => fillColor ?? '#b029df'};
`;

type FillGageProps = {
  width: string;
  fillColor?: string;
};

type Gagebar = {
  // range 0~1
  persentage: number;
  fillColor?: string;
};

const Gagebar = ({ persentage, fillColor }: Gagebar) => {
  return (
    <Container>
      <Rowbox align="flex-end" justifyContent="space-between">
        <Count>
          <Text text="14" fontSize={'24px'} fontWeight={800} color={WHITE} />
          <Text text="개" fontSize={'15px'} fontWeight={800} color={WHITE} />
        </Count>
        <Text
          text="더 작성하면 등급업"
          fontSize={'16px'}
          fontWeight={200}
          color={WHITE}
        />
      </Rowbox>
      <Rowbox marginTop="10px">
        <Gage />
        <FillGage width={`${persentage * 100}%`} fillColor={fillColor} />
      </Rowbox>
    </Container>
  );
};

export default Gagebar;
import React from 'react';
import styled from 'styled-components/native';
import { Rowbox, Text, RadiusButton } from '../Atoms';
import { WHITE, LIGHT_PURPLE, PURPLE } from '~/constants/Colors';

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
  background-color: #3a3a3a;
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
  postCountForPromotion: number;
  commentCountForPromotion: number;
};

const Gagebar = ({
  persentage,
  fillColor,
  postCountForPromotion,
  commentCountForPromotion,
}: Gagebar) => {
  return (
    <Container>
      <Rowbox align="flex-end">
        <Rowbox width="auto" marginRight="12px">
          <RadiusButton
            text="게시글"
            borderRadius="10px"
            bgColor="#161616"
            fontSize="12px"
            color="#717171"
            width="49px"
            height="19px"
            marginRight="2px"
          />
          <Text text={`${postCountForPromotion}`} fontSize="15px" fontWeight={800} color={WHITE} />
        </Rowbox>
        <Rowbox width="auto" marginRight="12px">
          <RadiusButton
            text="댓글"
            borderRadius="10px"
            bgColor="#161616"
            fontSize="12px"
            color="#717171"
            width="49px"
            height="19px"
            marginRight="2px"
          />
          <Text
            text={`${commentCountForPromotion}`}
            fontSize="15px"
            fontWeight={800}
            color={WHITE}
          />
        </Rowbox>
        <Text text="더 작성하면 등급 업" fontSize="15px" fontWeight={200} color={WHITE} />
      </Rowbox>
      <Rowbox marginTop="10px">
        <Gage />
        <FillGage width={`${persentage * 100}%`} fillColor={fillColor} />
      </Rowbox>
    </Container>
  );
};

export default Gagebar;

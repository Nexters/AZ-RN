import React from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParams } from '@types';
import { Rowbox, Colbox, Text } from '~/Components/Atoms';
import { Gagebar } from '~/Components/Molcules';
import {
  SectionWrapper,
  BackgroundContainer,
  HideScrollbarWrapper,
} from '~/Components/Templates';
import { WHITE } from '~/constants/Colors';
import Layout from '~/constants/Layout';
import badgePng from '@png/level_one_badge.png';

const Badge = styled.Image`
  position: relative;
  left: ${`${Layout.width / 7}px`};
`;

interface HomeProps {
  navigation: StackNavigationProp<RootStackParams, 'Home'>;
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <BackgroundContainer>
      <HideScrollbarWrapper>
        <SectionWrapper marginTop={Layout.height / 12}>
          <Rowbox>
            <Colbox>
              <Text
                fontSize={'38px'}
                text="유머쪼랩ㅋ"
                fontWeight={800}
                color={WHITE}
              />
              <Text
                fontSize={'38px'}
                text="분발하자^^"
                fontWeight={100}
                color={WHITE}
              />
            </Colbox>
            <Badge source={badgePng} />
          </Rowbox>
          <Colbox width={'240px'}>
            <Gagebar persentage={0.4} />
          </Colbox>
        </SectionWrapper>
      </HideScrollbarWrapper>
    </BackgroundContainer>
  );
};

export default Home;

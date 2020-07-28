import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  CollapsibleNavBarScrollView,
  CollapsibleNavBarState,
} from '@busfor/react-native-collapsible-navbar-scrollview';

import { LoginStackParams } from '@types';
import { Rowbox, Colbox, Text } from '~/Components/Atoms';
import { Gagebar } from '~/Components/Molcules';
import { SectionWrapper, BackgroundContainer } from '~/Components/Templates';
import { WHITE, GREY_DARK, LIGHT_DARK } from '~/constants/Colors';
import Layout from '~/constants/Layout';
import badgePng from '@png/level_one_badge.png';

const Badge = styled.Image`
  position: relative;
  left: ${`${Layout.width / 7}px`};
`;

const StickyHeader = styled.View`
  flex: 1;
  width: 100%;
  margin-top: ${`${Layout.height / 20}px`};
  padding-top: 15px;
  align-items: center;
  background-color: ${GREY_DARK};
  height: 100px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;
const Sidebox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: blue;
`;

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const Home = ({ navigation }: HomeProps) => {
  const [stickyView, setStickyView] = useState<boolean>(false);
  return (
    <CollapsibleNavBarScrollView
      headerMinHeight={100}
      headerMaxHeight={Layout.height / 2.5}
      header={
        <BackgroundContainer>
          <StickyHeader>
            <SectionWrapper>
              <Colbox>
                <Rowbox
                  width="44px"
                  height="6px"
                  bgColor={LIGHT_DARK}
                  borderRadius="20px"
                />
                <Sidebox>
                  <Text
                    text="A"
                    fontSize="18px"
                    fontWeight={700}
                    color={WHITE}
                  />
                  <Text
                    text="B"
                    fontSize="18px"
                    fontWeight={700}
                    color={WHITE}
                  />
                </Sidebox>
              </Colbox>
            </SectionWrapper>
          </StickyHeader>
          <SectionWrapper>
            {/* 
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
            <Colbox>
              <Gagebar persentage={0.4} />
            </Colbox> */}
          </SectionWrapper>
          {/* <StickyHeader>
            <Colbox>
              <Rowbox
                width="44px"
                height="6px"
                bgColor={LIGHT_DARK}
                borderRadius="20px"
              />
              <Sidebox>
                <Text text="A" fontSize="18px" fontWeight={700} color={WHITE} />
                <Text text="B" fontSize="18px" fontWeight={700} color={WHITE} />
              </Sidebox>
            </Colbox>
          </StickyHeader> */}
        </BackgroundContainer>
      }
      useNativeDriver={true}
      initialState={CollapsibleNavBarState.open}
      onChangeState={(state) => {
        console.log(state);
      }}></CollapsibleNavBarScrollView>
  );
};

export default Home;

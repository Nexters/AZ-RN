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
  margin-top: 100px;
  padding-top: 15px;
  align-items: center;
  /* background-color: ${GREY_DARK}; */
  background-color:blue;
  height: 100px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-left: ${`${Layout.width / 20}px`};
  padding-right: ${`${Layout.width / 20}px`};
`;

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const Home = ({ navigation }: HomeProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <CollapsibleNavBarScrollView
      headerMinHeight={300}
      headerMaxHeight={Layout.height / 2.5}
      header={
        isOpen ? (
          <BackgroundContainer>
            <SectionWrapper>
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
              </Colbox>
            </SectionWrapper>
            <StickyHeader>
              <Rowbox
                width="44px"
                height="6px"
                bgColor={LIGHT_DARK}
                borderRadius="20px"
                marginBottom="18px"
              />
              <Rowbox
                width="100%"
                justifyContent="space-between"
                bgColor="transparent">
                <Text
                  text="개그 목록"
                  fontSize="18px"
                  fontWeight={700}
                  color={WHITE}
                />
                <Rowbox
                  borderRadius="25px"
                  border="1px solid #ffffff"
                  width="110px"
                  height="44px"
                  bgColor="transparent"
                  justifyContent="center">
                  <Text
                    text="명예의 전당"
                    fontSize="13px"
                    fontWeight={200}
                    color={WHITE}
                  />
                </Rowbox>
              </Rowbox>
            </StickyHeader>
          </BackgroundContainer>
        ) : (
          <BackgroundContainer>
            <StickyHeader>
              <Rowbox
                width="44px"
                height="6px"
                bgColor={LIGHT_DARK}
                borderRadius="20px"
                marginBottom="18px"
              />
              <Rowbox
                width="100%"
                justifyContent="space-between"
                bgColor="transparent">
                <Text
                  text="개그 목록"
                  fontSize="18px"
                  fontWeight={700}
                  color={WHITE}
                />
                <Rowbox
                  borderRadius="25px"
                  border="1px solid #ffffff"
                  width="110px"
                  height="44px"
                  bgColor="transparent"
                  justifyContent="center">
                  <Text
                    text="명예의 전당"
                    fontSize="13px"
                    fontWeight={200}
                    color={WHITE}
                  />
                </Rowbox>
              </Rowbox>
            </StickyHeader>
          </BackgroundContainer>
        )
      }
      useNativeDriver={true}
      initialState={CollapsibleNavBarState.open}
      onChangeState={(state) => {
        setIsOpen(state !== 'open' ? false : true);
      }}></CollapsibleNavBarScrollView>
  );
};

export default Home;

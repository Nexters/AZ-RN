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
import {
  SectionWrapper,
  BackgroundContainer,
  HideScrollbarWrapper,
} from '~/Components/Templates';
import { WHITE } from '~/constants/Colors';
import Layout from '~/constants/Layout';
import badgePng from '@png/level_one_badge.png';
import { ScrollView } from 'react-native';

const Badge = styled.Image`
  position: relative;
  left: ${`${Layout.width / 7}px`};
`;

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const Home = ({ navigation }: HomeProps) => {
  const [stickyView, setStickyView] = useState<boolean>(false);
  return (
    // <BackgroundContainer>
    //   <HideScrollbarWrapper>
    //     <SectionWrapper marginTop={Layout.height / 12}>
    //       <Rowbox>
    //         <Colbox>
    //           <Text
    //             fontSize={'38px'}
    //             text="유머쪼랩ㅋ"
    //             fontWeight={800}
    //             color={WHITE}
    //           />
    //           <Text
    //             fontSize={'38px'}
    //             text="분발하자^^"
    //             fontWeight={100}
    //             color={WHITE}
    //           />
    //         </Colbox>
    //         <Badge source={badgePng} />
    //       </Rowbox>
    //       <Colbox width={'240px'}>
    //         <Gagebar persentage={0.4} />
    //       </Colbox>
    //     </SectionWrapper>
    //   </HideScrollbarWrapper>
    // </BackgroundContainer>
    <CollapsibleNavBarScrollView
      headerMinHeight={10}
      headerMaxHeight={'auto'}
      header={
        !stickyView ? (
          <BackgroundContainer>
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
          </BackgroundContainer>
        ) : (
          <BackgroundContainer>
            <SectionWrapper marginTop={Layout.height / 12}>
              <Colbox width={'240px'}>
                <Gagebar persentage={0.4} />
              </Colbox>
            </SectionWrapper>
          </BackgroundContainer>
        )
      }
      useNativeDriver={true}
      initialState={CollapsibleNavBarState.open}
      onChangeState={(state) => {
        console.log(state);
      }}></CollapsibleNavBarScrollView>
  );
};

export default Home;

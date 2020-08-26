import { DARK_GREY } from '~/constants/Colors';
import { ifIphoneX } from 'react-native-iphone-x-helper';

export const HomeHeaderStyle = {
  backgroundColor: DARK_GREY,
  height: ifIphoneX(100, 70),
  shadowRadius: 0,
  shadowOffset: {
    height: 0,
  },
};

export const NotiHeaderStyle = {
  backgroundColor: DARK_GREY,
  height: ifIphoneX(100, 70),
  shadowRadius: 0,
  shadowOffset: {
    height: 0,
  },
};

import { DARK_GREY } from '~/constants/Colors';

export const screenOptions = {
  headerStyle: {
    backgroundColor: DARK_GREY,
    height: 60,
    shadowOffset: {
      height: 0,
    },
  },
  headerShown: true,
  cardOverlayEnabled: false,
  cardStyleInterpolator: ({ current: { progress } }: c) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
  }),
};

export const headerStyle = {
  backgroundColor: DARK_GREY,
  height: 100,
  shadowRadius: 0,
  shadowOffset: {
    height: 0,
  },
};

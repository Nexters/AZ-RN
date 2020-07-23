export const screenOptions = {
  headerStyle: {
    backgroundColor: '#222222',
    height: 60,
    shadowOffset: {
      height: 0,
    },
  },
  headerShown: true,
  cardOverlayEnabled: false,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
  }),
};

import { StackNavigationProp } from '@react-navigation/stack';

const stackNavigate = <
  N extends StackNavigationProp<Record<string, undefined>, string>,
  T extends string
>(
  navigation: N,
  to: T,
) => {
  navigation.navigate(to);
};

export default stackNavigate;

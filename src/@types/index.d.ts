import { TextInputTextInputEventData } from 'react-native';

// Root Stack Navigator Param types
export type RootStackParams = {
  Home: undefined;
  Detail: undefined;
  Login: undefined;
};

// margin
export type MarginStyleProps = {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

// padding
export type PaddingStyleProps = {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
};

// input binder
export type InputBinderTypes = {
  onChange: (e: NativeSyntheticEvent<TextInputTextInputEventData>) => void;
  value: string;
};

import { TextInputTextInputEventData } from 'react-native';
import { PayloadAction } from 'typesafe-actions';

// Root Stack Navigator Param types
export type RootStackParams = {
  Home: undefined;
  Detail: undefined;
  Login: undefined;
};

// margin
export type MarginStyleProps = {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
};

// padding
export type PaddingStyleProps = {
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
};

// input binder
export type InputBinderTypes = {
  onChange: (e: NativeSyntheticEvent<TextInputTextInputEventData>) => void;
  value: string;
};

// redux action playload
export type PayloadType<Action extends string, T> = PayloadAction<Action, T>;

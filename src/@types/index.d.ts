import { TextInputTextInputEventData } from 'react-native';
import { PayloadAction } from 'typesafe-actions';

// NonLogin Stack navigator types
export type NonLoginStackTypes = 'Login' | 'CreateAccount';
// NonLogin Stack Navigator Param types
export type NonLoginStackParams = {
  Login: undefined;
  CreateAccount: undefined;
};

// Login Stack navigator types
export type LoginStackTypes = 'Home' | 'Detail';
// Login Stack Navigator Param types
export type LoginStackParams = {
  Home: undefined;
  Detail: undefined;
  Notification: undefined;
  Profile: undefined;
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

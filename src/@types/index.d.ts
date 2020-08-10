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
  PostWrite: undefined;
  PostDetail: PostDetailParams;
};
export type PostDetailParams = {
  heartCount: number;
  commentCount: number;
  username: string;
  createdAt: string;
  content: string;
  isPressLike: boolean;
  comments: Comment[];
};
export type Comment = {
  username: string;
  comment: string;
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

// redux action playload
export type PayloadType<Action extends string, T> = PayloadAction<Action, T>;

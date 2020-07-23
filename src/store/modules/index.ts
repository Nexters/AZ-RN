import { combineReducers } from 'redux';
import loading from './loading';
import post from './post';
import user from './user';

const rootReducer = combineReducers({
  loading,
  post,
  user,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

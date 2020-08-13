import { combineReducers } from 'redux';
import loading from './loading';
import post from './post';
import user from './user';
import auth from './auth';

const rootReducer = combineReducers({
  loading,
  post,
  user,
  auth,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

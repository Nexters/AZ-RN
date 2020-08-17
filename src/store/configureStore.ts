import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-community/async-storage';

import rootReducer from './modules';

const persistConfig = {
  key: 'root',
  blacklist: ['user', 'auth'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const env = process.env.NODE_ENV;

const middleware = [thunk];

// if (env === 'development') {
//   const { logger } = require('redux-logger');
//   middleware.push(logger);
// }

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  // const store = createStore(rootReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);
  return { store, persistor };
};

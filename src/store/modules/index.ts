import { combineReducers } from 'redux'
import loading from './loading'
import post from './post'

const rootReducer = combineReducers({
  loading,
  post,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
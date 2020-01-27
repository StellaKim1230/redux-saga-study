import { combineReducers } from 'redux'
import { counterReducer } from './counter'
import { extraReducer } from './extra'

const reducers = combineReducers({
  counter: counterReducer,
  extra: extraReducer,
})

export default reducers

import { combineReducers } from 'redux'
import movieRedecer from './movie'

const reducers = combineReducers({
  movie: movieRedecer,
})

export default reducers

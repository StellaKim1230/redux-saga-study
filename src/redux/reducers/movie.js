import {
  GET_MOVIES,
  MOVIE_RECEIVED,
} from '../actions'

const initialState = {}

const movieRedecer = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIES:
      return {
        ...state,
        loading: true,
      }
    case MOVIE_RECEIVED:
      return {
        ...state,
        movie: action.json,
        loading: false,
      }
    default:
      return state;
  }
}

export default movieRedecer

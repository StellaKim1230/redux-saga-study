import {
  INCREMET,
  DECREMENT,
  SET_DIFF,
} from '../actions'

const initialState = {
  value: 0,
  diff: 1,
}

const counterRedecer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMET:
      return Object.assign({}, state, {
        value: state.value + state.diff
      })
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff
      })
    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.diff
      })
    default:
      return state;
  }
}

export default counterRedecer

const initialState = {
  value: 'this_is_extra_reducer'
}

const extraReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default extraReducer

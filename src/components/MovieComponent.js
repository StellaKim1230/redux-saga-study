import React, { Component } from 'react'

class MovieComponent extends Component {
  onSomeButtonClicked() {
    const { movieId, dispatch } = this.props
    dispatch({ type: 'MOVIE_FETCH_REQUESTED', payload: { movieId } })
  }

  render() {
    return (
      <button onClick={this.onSomeButtonClicked}>영화 정보 가져오기</button>
    )
  }
}

export default MovieComponent

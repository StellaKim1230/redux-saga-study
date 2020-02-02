import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../redux/actions'

class Buttons extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.props.GetMovies}
        >
          press to see movies
        </button>
      </div>
    )
  }
}

const mpaDispatchToProps = (dispatch) => ({
  GetMovies: () => dispatch(getMovies()),
})

export default connect(
  undefined,
  mpaDispatchToProps,
)(Buttons)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions'

class Buttons extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.props.onIncrement}
        >
          +
        </button>
        <button
          type="button"
          onClick={this.props.onDecrement}
        >
          -
        </button>
      </div>
    )
  }
}

const mpaDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
})

export default connect(
  undefined,
  mpaDispatchToProps,
)(Buttons)

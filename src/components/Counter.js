import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <h1>value: {this.props.value}</h1>
    )
  }
}

const mapStateToProps = ({ counter }) => ({
  value: counter.value
})

export default connect(
  mapStateToProps
)(Counter)

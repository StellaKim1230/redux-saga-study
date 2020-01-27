import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDiff } from '../redux/actions'

class Option extends Component {
  constructor(props) {
    super(props)

    this.state = {
      diff: '1'
    }

    this.onChangeDiff = this.onChangeDiff.bind(this)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.diff}
          onChange={this.onChangeDiff}
        />
      </div>
    )
  }

  onChangeDiff(e) {
    if (isNaN(e.target.value)) return
    
    this.setState({ diff: e.target.value })

    if (e.target.value === '') this.setState({ diff: '0' })

    this.props.onUpdateDiff(parseInt(e.target.value))
  }
}

const mapDispatchToProps = (dispatch) => ({
  onUpdateDiff: (value) => dispatch(setDiff(value))
})

export default connect(
  undefined,
  mapDispatchToProps,
)(Option)

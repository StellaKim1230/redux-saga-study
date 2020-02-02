import React, { Component } from 'react'
import Buttons from './Buttons'
import MovieContainer from '../containers/MovieContainer'

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Buttons/>
        <MovieContainer />
      </div>
    )
  }
}

export default App

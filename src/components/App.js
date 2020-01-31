import React, { Component } from 'react'
import Counter from './Counter'
import Buttons from './Buttons'
import Option from './Option'
import MovieComponent from './MovieComponent'

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Counter/>
        <Buttons/>
        <Option/>
        <MovieComponent/>
      </div>
    )
  }
}

export default App

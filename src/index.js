import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import { configureStore } from './redux/store'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  rootElement
)

// example movie open api
// https://api.themoviedb.org/3/movie/550?api_key=71962ad6d2c75c9a679e97a46ec37c70

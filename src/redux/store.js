import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '/reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

sagaMiddleware.run(rootSaga)

export const configureStore = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

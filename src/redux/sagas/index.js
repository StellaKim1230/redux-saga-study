import { all } from 'redux-saga/effects'
import { actionWatcher } from './movie'

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}

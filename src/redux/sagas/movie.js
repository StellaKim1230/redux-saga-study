import { put, takeLatest } from 'redux-saga/effects'

const API_KEY = '71962ad6d2c75c9a679e97a46ec37c70'
const movieApi = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`

function* fetchMovie() {
  const json = yield fetch(movieApi).then(res => res.json())

  yield put({ type: "MOVIE_RECEIVED", json })
}

export function* actionWatcher() {
  yield takeLatest('GET_MOVIES', fetchMovie)
}

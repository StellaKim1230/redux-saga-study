import { call, put, takeLatest } from 'redux-saga/effects'

const API_KEY = '71962ad6d2c75c9a679e97a46ec37c70'
const movieApi = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`

function* fetchMovieApi() {
  try {
    const movie = yield call(movieApi)
    yield put({ type: 'MOVIE_FETCH_SUCCEEDED', movie: movie })
  } catch (e) {
    yield put({ type: 'MOVIE_FETCH_FAILED', message: e.message})
  }
}

function* movieSaga() {
  yield takeLatest('MOVIE_FETCH_REQUESTED', fetchMovieApi)
}

export default movieSaga

import { all, fork } from 'redux-saga/effects'

const API_KEY = '71962ad6d2c75c9a679e97a46ec37c70'

const fetchMovieApi = (movieId = 550) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
}

export default function* movieSaga() {
  yield all([
    fork(fetchMovieApi),
  ])
}
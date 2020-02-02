import React from 'react'

const Movie = ({ movie }) => {
  return movie.movie ? (
    <div>
      {movie.movie.original_title}
    </div>
  ) : null
}

export default Movie

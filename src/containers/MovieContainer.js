// import React from 'react'
import { connect } from 'react-redux'

import Movie from '../components/Movie'

const mapStateToProps = state => ({
  movie: state.movie,
})

export default connect(
  mapStateToProps,
)(Movie)


// const MovieContainer = () => {
//   const movie = useSelector(state => state.movie )
//   return (
//     <Movie movie={movie} />
//   )
// }

// export default MovieContainer

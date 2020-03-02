import React from 'react'
import Movie from './Movie'

function MovieList({movies}){

  const movieComponents = movies.map(movie => {
    return (
      <Movie
        key={movie.id}
      >
        {movie.name}
      </Movie>
    )
  })

  return (
    <ul>
      {movieComponents}
    </ul>
  )

}

export default MovieList

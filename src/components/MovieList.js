import React from 'react'
import Movie from './Movie'

function MovieList({movies}){

  const movieComponents = movies.map(movie => {
    return (
      <Movie
        url={movie.url}
        key={movie.id}
      >
        {movie.name}
      </Movie>
    )
  })

  return (
    <ul>
      <h2>Upcoming film releases for the UK</h2>
      {movieComponents}
    </ul>
  )

}

export default MovieList

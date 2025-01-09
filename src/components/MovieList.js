import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies}) {
  return (
    <div className='movie-list-content'>
        {movies.map((elem)=><MovieCard movie={elem}/>)}
    </div>
  )
}

export default MovieList
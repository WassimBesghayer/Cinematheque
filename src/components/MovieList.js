import React from 'react'
import MovieCard from './MovieCard'
import Synopsis from './Synopsis'

function MovieList({movies}) {
  return (
    <div className="body">
    <div className='movie-list-content'>
        {movies.map((elem)=><MovieCard movie={elem}/>)}
        {movies.map((elem)=><Synopsis movie={elem}/>)}
    </div>
    </div>
  )
}

export default MovieList
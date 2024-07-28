import React from 'react';
import genre from '../constant/GenresList'; // Ensure the path is correct
import MovieList from './MovieList';

function GenreMovieList() {
  return (
    <div>
     {genre.map((item, index) => index<=4&&(
        <div >
        <h2 className='text-[20px] text-white font-bold pl-8 py-2' key={index}>{item.name}</h2>
        <MovieList genreId = {item.id}/>
        </div>
     ))}
    </div>
  );
}

export default GenreMovieList;
import React, { useEffect, useState } from 'react';
import GlobalAPI from '../services/GlobalAPI';

const IMAGE_BASE_URL = " https://image.tmdb.org/t/p/original"

function MovieList({ genreId }) {
    const [movieList, setMovieList] = useState([])
  useEffect(() => {
    getMoviesbyGenreId(genreId);
  }, [genreId]);

  const getMoviesbyGenreId = async (genreId) => {
    try {
        GlobalAPI.getMovieByGenreId(genreId).then(resp => {
            // console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className='flex w-[100vw] gap-2 overflow-x-auto px-10 scrollbar-hide pb-10'>
        {
            movieList.map((item, index) => (
                <div className='min-w-[350px] min-h-[200px] transition ease-in-out delay-100 hover:-translate-y-8 cursor-pointer' key={index}>
                    <img src={ IMAGE_BASE_URL+item.backdrop_path} alt="images" className='object-cover w-full h-full'/>
                   <h1 className=' text-white truncate text-[16px] px-5 font-extrabold text-opacity-100 mt-1'>{item.original_title}</h1>
                 </div>
            ))
        }
    </div>
  );
}

export default MovieList;

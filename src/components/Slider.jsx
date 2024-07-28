import React, { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../services/GlobalAPI'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2'

const IMAGE_BASE_URL = " https://image.tmdb.org/t/p/original"

function Slider() {

    const [movieList, setMovieList] = useState([])
    const elementRef = useRef();
    const screenWidth = window.innerWidth;

    useEffect(() => {
            getTrendingMovies()
    },[])

    const getTrendingMovies = () => {
        GlobalAPI.getTrendingVideos.then(resp => {
            console.log(resp)
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = (element) => {
            element.scrollLeft += screenWidth-110;
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth-110;
}
  return (
   <div>
    <HiChevronLeft className=' hidden md:block  text-white text-6xl absolute mx-14 mt-[215px] cursor-pointer shadow-2xl' onClick={() =>sliderLeft(elementRef.current)}/>
    <HiChevronRight className='hidden md:block text-white text-6xl absolute mx-14 mt-[215px] cursor-pointer right-0 shadow-2xl' onClick={() => sliderRight(elementRef.current)}/>
     <div className='flex overflow-x-auto w-[100vw] px-16 py-2 scrollbar-hide scroll-smooth' ref={elementRef}>
      {movieList.map((item, index)=> (
        <img src={IMAGE_BASE_URL + item.backdrop_path} alt="coverImg" className='min-w-full md:h-[410px] object-cover object-top-center mr-5 rounded-md shadow-xl hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' key={index}/>
      ))}
    </div>
   </div>
  )
}

export default Slider

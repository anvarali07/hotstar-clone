import React, { useEffect, useState } from 'react'
import GlobalAPI from '../services/GlobalAPI';

const IMAGE_BASE_URL = " https://image.tmdb.org/t/p/original"

function PopularMovies() {
    const [popularList, setPopularList] = useState([]);

    useEffect(() => {
        getPopularList()
    },[])

    const getPopularList = () => {
        GlobalAPI.getPopularMovies.then(resp =>{
            console.log(resp.data.results)
            setPopularList(resp.data.results)
        })
    }
  return (
    <div className='w-[100vw] flex flex-col py-2'>
        <p className=' text-[18px] font-bold text-white pl-10 mb-2'>Popular Movies</p>
        <div className=' flex w-[100vw] overflow-x-auto px-10 gap-4 scrollbar-hide'>
            {popularList.map((item, index) =>(
            <div className='min-w-[200px] min-h-[200px] transition ease-in-out delay-100 hover:translate-y-6 cursor-pointer' key={index}>
             <img src={IMAGE_BASE_URL + item.poster_path} alt="poster" className=' w-full h-full object-fill' />
             </div>
                ))}
               
         </div>
       
      
    </div>
  )
}

export default PopularMovies

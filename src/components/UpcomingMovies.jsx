import React, { useEffect, useState } from 'react'
import GlobalAPI from '../services/GlobalAPI'

const IMAGE_BASE_URL = " https://image.tmdb.org/t/p/original"

function UpcomingMovies() {
    
    const [upcoming,setUpcoming] = useState([])

    useEffect(() =>{
        getUpcomingMovies()
    },[])

    const getUpcomingMovies = () => {
        GlobalAPI.getUpcoimingMovies.then(resp => {
            console.log(resp.data.results);
            setUpcoming(resp.data.results)
        })
    }

  return (
    <div>
      <div className='w-[100vw] flex flex-col py-2   '>
        <p className=' text-[18px] font-bold text-white pl-10 mb-2'>Upcoming Movies</p>
        <div className=' flex w-[100vw] overflow-x-auto px-10 gap-4 scrollbar-hide cursor-pointer '>
            {upcoming.map((item, index) =>(
            <div className='min-w-[200px] min-h-[200px] transition ease-in-out delay-100 hover:translate-y-6' key={index}>
             <img src={IMAGE_BASE_URL + item.poster_path} alt="poster" className=' w-full h-full object-fill' />
             </div>
                ))}
         </div>
      
    </div>
    </div>
  )
}

export default UpcomingMovies

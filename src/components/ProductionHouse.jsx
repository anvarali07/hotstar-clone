import React from 'react'
import disney from '../assets/Images/logo.png'
import marvel from '../assets/Images/marvel.png'
import national from '../assets/Images/national.png'
import pixar from '../assets/Images/pixar.png'
import starwar from '../assets/Images/start_war.png'

function ProductionHouse() {

    const logo = [
        {
        logo : disney
        },
        {
        logo : marvel
        },
        {
        logo : national
        },
        {
        logo : pixar
        },
        {
        logo : starwar
        },
]

  return (
    <div className=' w-[100vw] py-3 px-3 flex justify-center items-center gap-5 overflow-x-auto scrollbar-hide '>
    
       {logo.map((item, index) =>(
          <div className='px-16 py-10 border-[3px] border-white rounded-lg bg-[#22232f] bg-opacity-80  shadow-gray-100 mb-5'>
         <img src={item.logo} alt="Tv Logo" key={index} className='min-w-[150px] h-[100px] object-cover' />
         </div>
       ))}
     
    </div>
  )
}

export default ProductionHouse

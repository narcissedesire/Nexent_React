import React from 'react'
// import { Carousel } from "flowbite-react"
import { dataHome } from '../Constant/data'

export default function Home() {
  return (
    <div className='bg-neutralSilver -mt-7' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-sceen h-screen mt-7'>
        {/* <Carousel className='w-full mx-auto'> */}
          {dataHome.map((item, id)=>(
            <div key={id} className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                <div>
                  <img src={item.img} alt=''/>
                </div>
                <div className='md:w-1/2'>
                  <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                    {item.titre1} <span className='text-brandPrimary'>{item.titre2}</span>
                  </h1>
                  <p className='text-neutralGrey text-base mb-8'>{item.desc}</p>
                  <button className='btn-primary'>{item.button}</button>
                </div>
            </div>
          ))}
        {/* </Carousel> */}
      </div>
    </div>
  )
}

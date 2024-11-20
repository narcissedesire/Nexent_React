import React from 'react'
import { blog } from '../Constant/data'

export default function Blog() {
  return (
    <div className='px-4 lg:px-14 max-w-screen mx-auto my-12' id='faq'>
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
        <p className='md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto'>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Unde voluptates quidem veniam quae eum est totam. 
        Ratione veritatis placeat nam odit inventore esse magni nobis vel hic, vero culpa 
        ipsum.</p>
      </div>

      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {blog.map((item)=>(
          <div key={item.id} className='mx-auto relative mb-12 cursor-pointer h-[300px]'>
            <img src={item.image} alt='image blog' className='w-full h-full rounded-xl hover:scale-95 transition-all duration-300'/>
            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
              <h3 className='mb-3 text-neutralGrey font-semibold'>{item.titre}</h3>
              <div className='flex items-center gap-8 justify-center'>
                  <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'
                  >Read More <i className='fa fa-arrow-right'/></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

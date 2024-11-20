import React from 'react'
import { services } from '../Constant/data'

export default function Services() {
  return (
    <div className=' md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>

        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <i className='fa fa-circle'/>
            <i className='fa fa-circle'/>
            <i className='fa fa-circle'/>
            <i className='fa fa-circle'/>
            <i className='fa fa-circle'/>
            <i className='fa fa-circle'/>
        </div>
      </div>

      <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your entire community in a single system</h2>
        <p className='text-neutralGrey'>Who is Nextcent suitable for ?</p>
      </div>

      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {services.map((item)=>(
            <div key={item.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-x-indigo-700 transition-all duration-300 flex items-center justify-center'>
                <div >
                    <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl text-4xl flex items-center'><i className={`${item.icone} -ml-5`}/></div>
                    <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{item.titre}</h4>
                    <p className='text-sm text-neutralGrey'>{item.desc}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

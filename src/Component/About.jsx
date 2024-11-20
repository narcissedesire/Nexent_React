import React from 'react'

export default function About() {
  return (
    <div>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src='./images/IMG_20240116_215528-removebg-preview.png' alt='image'/>
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Unde voluptates quidem veniam quae eum est totam. 
                Ratione veritatis placeat nam odit inventore esse magni nobis vel hic, vero culpa 
                ipsum.</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
      </div>

      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local <br/>
                <span className='text-brandPrimary'>business reinvent itself</span></h2>
                    <p>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit.</p>
            </div>

            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-center gap-12'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <i className='fa fa-users text-4xl text-brandPrimary'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,45,127</h4>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <i className='fa-solid fa-book text-4xl text-brandPrimary'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,45,127</h4>
                            <p>Event Bookings</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <i className='fa-solid fa-hands-holding-child text-4xl text-brandPrimary'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,45,127</h4>
                            <p>Clubs</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <i className='fas fa-money-check text-4xl text-brandPrimary'/>
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,45,127</h4>
                            <p>Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

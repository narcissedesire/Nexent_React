import React from 'react'

export default function Produit() {
  return (
    <div id='product'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 group'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src='./images/IMG_20240116_215528-removebg-preview.png' alt='image'/>
            </div>
            <div className='md:w-3/5 mx-auto group-hover:p-1'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Unde voluptates quidem veniam quae eum est totam. 
                Ratione veritatis placeat nam odit inventore esse magni nobis vel hic, vero culpa 
                ipsum.</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
      </div>

      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/3'>
                <img src='./images/IMG_20240116_214450-removebg-preview.png'/>
            </div>

            <div className='md:w-2/3 mx-auto'>
                <div>
                    <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium 
                    maiores quas rerum. Assumenda quis dignissimos veniam aliquid mollitia? A 
                    cupiditate iusto similique, quibusdam at possimus accusantium dolorum sint sunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatum. 
                    Perferendis atque ad rem debitis tempora nobis quaerat quis saepe hic, unde 
                    distinctio cupiditate suscipit culpa dignissimos ab reiciendis expedita.</p>
                    <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                    <p className='text-base text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>
                        <div className='flex items-center gap-8'>
                            <i className='fa fa-circle'/>
                            <i className='fa fa-circle'/>
                            <i className='fa fa-circle'/>
                            <i className='fa fa-circle'/>
                            <i className='fa fa-circle'/>
                            <i className='fa fa-circle'/>
                            <div className='flex items-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'
                                >Meet all customers <i className='fa fa-arrow-right'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

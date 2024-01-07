import React from 'react'

export default function Features() {
  const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.';
  const about = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

  return (
    <section className='white-color-bg black-color-text feature-bg'>
        <h1 className='page_title'> <span className='we'>Features</span> & <span className='we'>Services</span> </h1>
        <p className='text-center'>{description}</p>

        <div className='flex flex-col items-center mt-10 gap-6'>

          <div className='flex items-start border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <p><span className='we font-bold'>Small Heading</span> {about}</p>
            <img className='h-40' src='/loan.png'/>
          </div>

          
          <div className='flex flex-row-reverse items-start border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <p><span className='we font-bold'>Small Heading</span> {about}</p>
            <img className='h-40' src='/loan.png'/>
          </div>

          <div className='flex items-start border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <p><span className='we font-bold'>Small Heading</span> {about}</p>
            <img className='h-40' src='/loan.png'/>
          </div>

          <div className='flex flex-row-reverse items-start border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <p><span className='we font-bold'>Small Heading</span> {about}</p>
            <img className='h-40' src='/loan.png'/>
          </div>

          <div className='flex items-start border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <p><span className='we font-bold'>Small Heading</span> {about}</p>
            <img className='h-40' src='/loan.png'/>
          </div>

        </div>
    </section>
  )
}

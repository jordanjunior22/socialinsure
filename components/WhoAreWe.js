import React from 'react'

export default function WhoAreWe() {
  const describe ='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry';
  const about = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  
  return (
    <section className='black-color-bg white-color-text p-4 about-container'>
        <h1 className=' page_title'>Who Are <span className='we'>We?</span></h1>
        <p className='text-center'>{describe}</p>
        <div className='flex items-center justify-center mt-5 about-inner-container'>
          <p className='w-3/5 aboutus'>{about}</p>
          <img className='h-72' src='/social1.png' alt='socialimage'/>
        </div>
    </section>
  )
}

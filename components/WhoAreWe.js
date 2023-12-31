import React from 'react'

export default function WhoAreWe() {
  const describe ='Social Insure is a social community crowd funded insurance platform for those who care about their love ones, to have the support the deserve when the truly need it.';
  const about = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  
  return (
    <section className='flex flex-col items-center black-color-bg white-color-text p-8 about-container'>
        <h1 className=' page_title'>About<span className='we'> Social Insure</span></h1>
        <p className='text-center w-3/4'>{describe}</p>

        <div className='flex items-center justify-between py-10 about-inner-container gap-20'>
          <div className='flex gap-4 items-center'>
            <img className='' src='/goal.png' alt='goal'/>
            <h2 className='we font-bold text-xl'>Goal Oriented</h2>
          </div>
          <div className='flex gap-4 items-center'>
          <img className='' src='/reliable.png' alt='reliable'/>
            <h2 className='we font-bold text-xl'>Reliable</h2>
          </div>
          <div className='flex gap-4 items-center'>
            <img className='' src='/support.png' alt='support'/>
            <h2 className='we font-bold text-xl'>Support</h2>
          </div>
        </div>

    </section>
  )
}

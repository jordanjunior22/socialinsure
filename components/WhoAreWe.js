"use client"
import React from 'react'
import ScrollReveal from './ScrollReveal';

export default function WhoAreWe() {
  const describe ='Social Insure is a community funded platform for loved ones, ensuring they have needed support they deserve in a most timely and efficient manner.';
  const about = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  
  return (
    <section className='flex flex-col  black-color-bg white-color-text p-8 about-container'>
      <ScrollReveal>
        <h1 className=' page_title '>About<span className='we'> Social Insure</span></h1>
        <p className='text-center'>{describe}</p>
      </ScrollReveal>

      <ScrollReveal>
      <div className='flex items-center justify-between py-10 about-inner-container gap-20'>
          <div className='flex gap-4 items-center goals'>
            <img className='' src='/goalsvg.svg' alt='goal'/>
            <h2 className='we font-bold text-xl'>Goal Oriented</h2>
          </div>
          <div className='flex gap-4 items-center goals'>
            <img className='' src='/reliablesvg.svg' alt='reliable'/>
            <h2 className='we font-bold text-xl'>Reliable</h2>
          </div>
          <div className='flex gap-4 items-center goals'>
            <img className='' src='/supportsvg.svg' alt='support'/>
            <h2 className='we font-bold text-xl'>Support</h2>
          </div>
        </div>
      </ScrollReveal>


    </section>
  )
}

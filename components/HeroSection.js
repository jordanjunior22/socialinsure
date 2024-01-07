"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';

 
export default function HeroSection() {
  const [SideNavOpen, setSideNavOpen] = useState(false);
  const Heading = 'Social Insure Here We Will Put A Heading, Mission Or Moto For The Brand.';
  const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  function handleClose(){
    setSideNavOpen(false);
  } 
  function handleOpen(){
    setSideNavOpen(true);
  }
  return (
    <section className='w-full relative overflow-hidden'>
        <div className='flex black-color-bg'>

            <div className='ps-8 flex flex-col gap-1 w-1/2  white-color-text pb-16 left-side'>
                <div className='logo-container'>
                  <img src='/logonobg.png' className='logo'/>
                </div>
                <div className='phone-container'>
                    <img src='/phone.png' alt='phone'/>
                </div>
            </div>

            <div className='pe-8 flex flex-col gap-1 w-1/2 white-color-bg black-color-text pb-16 right-side'>
                <div className='flex justify-between ps-8 div-container '>
                  <div className='logo-container black-logo'>
                    <img src='/logonobg2.png' className='logo'/>
                  </div>
                  <div className='flex gap-10 lg:gap-4 nav-links'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>About Us</Link>
                    <Link href='/'>Features</Link>
                    <Link href='/'>Contact</Link>
                  </div>
                  <div className='nav-links'>
                    <Link href='/' className='cta-button'>Get Notified</Link>
                  </div>

                  <div className='menu-icon' onClick={handleOpen}>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                  </div>


                </div>
                <div className='phone-container flex flex-col gap-5 justify-center px-10'>
                    <h1 className='heading'>{Heading}</h1>
                    <p className='des'>{description}</p>
                    <div className='flex gap-10 items-center'>
                      <Link href='/' className='cta-button'>Get Notified</Link>
                      <Link href='/' className='email '>Email Us</Link>
                    </div>
                </div>
                
            </div>

            <div className={`${SideNavOpen ? 'fixed right-0 w-64 bg-gray-700 h-full white-color-text shadow-drop-left' : 'SideNavClosed'}`}>

              <div className='flex flex-col gap-5 p-6'>
              <div className='cursor-pointer' onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>

                <Link href='/'>Home</Link>
                <Link href='/'>About Us</Link>
                <Link href='/'>Features</Link>
                <Link href='/'>Contact</Link>
                <Link href='/' className='cta-button'>Get Notified</Link>
                <Link href='/' className='email '>Email Us</Link>
              </div>
            </div>

        </div>
    </section>
  )
}

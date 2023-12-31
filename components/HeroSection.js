"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import SmoothScroll from './SmoothScoll';
 
export default function HeroSection() {
  const [SideNavOpen, setSideNavOpen] = useState(false);
  const Heading = 'Social Insure';
  const description = 'A web and mobile platform to social insure the live and dreams of those you love and care about.';
  function handleClose(){
    setSideNavOpen(false);
  } 
  function handleOpen(){
    setSideNavOpen(true);
  }
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    //console.log('Email before fetch:', email);

    try {
      const response = await fetch('/api/mailchimp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      //console.log(data); // Log the response from the API

      // Optionally, you can show a success message to the user
      if (response.ok) {
        alert('Subscribed successfully!');
        setEmail('');
      } else if (data.message === 'Already Subscribed') { 
        alert('Email is already subscribed.'); 
      }
        else {
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleScrollToSection = (sectionId) => {
    SmoothScroll(sectionId);
  };

  return (
    <section className='w-full relative overflow-hidden'>
        <div className='flex black-color-bg'>

            <div className='ps-8 flex flex-col gap-1 w-1/2  white-color-text pb-16 left-side'>
                <div className='logo-container'>
                <Link href='/'><img src='/logonobg.png' className='logo'/></Link>
                </div>
                <div className='phone-container'>
                    <img src='/phone.png' alt='phone'/>
                </div>
            </div>

            <div className='pe-8 flex flex-col gap-1 w-1/2 white-color-bg black-color-text pb-16 right-side'>
                <div className='flex justify-end ps-8 div-container '>
                  <div className='logo-container black-logo'>
                    <Link href='/'><img src='/logonobg2.png' className='logo'/></Link>
                    
                  </div>
                  {/* <div className='flex gap-10 lg:gap-4 nav-links'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>About Us</Link>
                    <Link href='/'>Features</Link>
                    <Link href='/'>Contact</Link>
                  </div> */}
                  <div className='nav-links'>
                    <Link onClick={() => handleScrollToSection('footer')} href='/#footer' className='cta-button'>Get Notified</Link>
                  </div>
{/* 
                  <div className='menu-icon' onClick={handleOpen}>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                  </div> */}


                </div>
                <div className='phone-container flex flex-col gap-3 text-center justify-center items-center px-10'>
                    <h1 className='heading cta-color-text'>{Heading}</h1>
                    <h2 className='font-bold text-lg'>Community Support Made Easy</h2>
                    <p className='des'>{description}</p>
                    <div className='flex gap-10 items-center '>
                      <button onClick={openModal} className='cta-button'>Join The Waiting List</button>
                      {isModalOpen && (
                      <div className="modal-overlay">
                        <div className="modal">
                          <button className='border  p-1 hover:bg-red-400 hover:text-white' onClick={closeModal}>Close X</button>
                          <p className='mt-4'>Some thing really cool is coming for our community. Enter your email and we&apos;ll put you on our invite list.</p>
                          <form onSubmit={handleEmailSubmit}>
                              <input className='border' 
                                type='email'
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                />
                              <button type='submit' className='cta-button-submit'>Let&apos;s Go</button>
                          </form>
                        </div>
                      </div>
                    )}
                      {/* <Link href='/' className='email '>Email Us</Link> */}
                    </div>
                </div>
                
            </div>

            {/* <div className={`${SideNavOpen ? 'fixed right-0 w-64 bg-gray-700 h-full white-color-text shadow-drop-left' : 'SideNavClosed'}`}>

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
            </div> */}

        </div>
    </section>
  )
}

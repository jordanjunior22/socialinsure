"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import ThankYouPopup from './ThankYouPopup';
 
export default function HeroSection() {
  const [SideNavOpen, setSideNavOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);



  const Heading = 'Social Insure';
  const description = 'A web and mobile platform to social insure the live and dreams of those you love and care about.';




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
      if (data.message === 'Email subscribed successfully') {
        // alert('Subscribed successfully!');
        setModalOpen(false);
        setShowPopup(true);
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

  return (
    <section className='w-full relative overflow-hidden'>

        <ThankYouPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)}
    />
          
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

                  <div className='nav-links'>
                    <button className='cta-button' onClick={openModal}>Get Notified</button>
                  </div>

                </div>
                <div className='phone-container flex flex-col gap-3 text-center justify-center items-center px-10'>
                    <h1 className='heading cta-color-text hover-on'>{Heading}</h1>
                    <h2 className='font-bold text-lg'>Community Support Made Easy</h2>
                    <p className='des'>{description}</p>
                    <div className='flex gap-10 items-center '>
                      <button onClick={openModal} className='cta-button big-cta'>Join The Waiting List</button>
                      {isModalOpen && (
                      <div className={`modal-overlay z-50 ${isModalOpen ? 'active' : ''}`}>
                        <div className={`modal relative ${isModalOpen ? 'active' : ''}`}>
                          <button className='px-2 hover:bg-red-800 hover:text-white absolute left-5 top-5 border' onClick={closeModal}>X</button>
                          <div className='flex items-center justify-center flex-col '>
                            <p className='w-7/12 text-center something'>
                            Something really cool is coming for our community.</p>
                            <p className='enter_ pb-3'>Enter your email and we&apos;ll put you on our invite list.</p>
                          </div>
                          <form onSubmit={handleEmailSubmit} className='flex flex-col gap-1'>
                              <div className='flex gap-2 pb-3 f-l-name-mobile-res'>
                                <input
                                type='text'
                                placeholder='Last Name'
                                required
                                />
                                <input
                                type='text'
                                placeholder='First Name'
                                required
                                />
                              </div>
                              <div className='flex input-email-res-footer h-9 justify-center items-center mt-2 mobile-respons- gapflex'>
                                <input className='border ' 
                                  type='email'
                                  id="email"
                                  name="email"
                                  placeholder='Email'
                                  value={email}
                                  onChange={handleEmailChange}
                                  required
                                  
                                  />
                                <button type='submit' className='cta-button-submit h-9 mobile-respons- '>Let&apos;s Go</button>
                              </div>

                          </form>
                        </div>
                      </div>
                    )}

                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

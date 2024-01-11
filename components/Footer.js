"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import ThankYouPopup from './ThankYouPopup';

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const GoEmail = () => {
        // Redirect the user to the specified link
            window.location.href ='mailto:pchhservicesllc@gmail.com';
      };
      const GoFacebook = () => {
        // Redirect the user to the specified link
        window.open('https://www.facebook.com/profile.php?id=100083733096698', '_blank'); // Replace with your desired link
      };
      const GoInstagram = () => {
        // Redirect the user to the specified link
        window.open('https://www.instagram.com/pchhservicesllc/', '_blank'); // Replace with your desired link
      };
        const GoTwitter = () => {
        // Redirect the user to the specified link
        window.open('https://twitter.com/pchhservicesllc', '_blank'); // Replace with your desired link
      };
      const GoTiktok = () => {
        // Redirect the user to the specified link
        window.open('https://www.tiktok.com/@pchhservicesllc', '_blank'); // Replace with your desired link
      };

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
  

    const handleSubmit = async (e) => {
        e.preventDefault();
  
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
  
        try {
          const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
          });
    
          if (response.ok) {
            alert('Form submission successful!');
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
          } else {
            alert('An error occurred while submitting the form.');
          }
        } catch (error) {
          console.error(error);
          alert('An error occurred while submitting the form.');
        }
      };

    return (
    <section id='footer' className='flex res_footer'>
              <ThankYouPopup 
                isOpen={showPopup} 
                onClose={() => setShowPopup(false)}
            />
        <div className='w-1/2 black-color-bg left_footer p-6'>
            <div className='p-8 flex justify-start black-color-bg white-color-text items-end '>
                <div className='logo-container'>
                <Link href='/'><img src='/logonobg.png' className='logo'/></Link>

                </div>
                <div className=' flex gap-5 social_media'>
                    
                    <img onClick={GoFacebook} className='w-6 cursor-pointer' src='/facebook.png' alt='facebook'/>
                    <img onClick={GoInstagram} className='w-6 cursor-pointer' src='/instagram.png' alt='instagram'/>
                    <img onClick={GoTwitter} className='w-6 cursor-pointer' src='/twitter.png' alt='twitter'/>
                    <img onClick={GoTiktok} className='w-6 cursor-pointer' src='/tiktok.png' alt='tiktok'/>
                    <img onClick={GoEmail} className='w-6 cursor-pointer' src='/email.png' alt='email'/>
                </div>
            </div>
            <div className='p-10 flex justify-center white-color-bg black-color-text rounded-tl rounded-tr'>
            <button onClick={openModal} className='cta-button big-cta '>Join The Waiting List</button>
                      {isModalOpen && (
                      <div className="modal-overlay">
                        <div className="modal relative">
                          <button className='px-2 hover:bg-red-400 hover:text-white absolute left-5 top-5' onClick={closeModal}>X</button>
                          <p className='mt-4'>Some thing really cool is coming for our community. Enter your email and we&apos;ll put you on our invite list.</p>
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
                                <button type='submit' className='cta-button-submit w-1/4 h-9 mobile-respons- '>Let&apos;s Go</button>
                              </div>

                          </form>
                        </div>
                      </div>
                    )}
            </div>
            <div className='notification black-color-text p-8 rounded-bl rounded-br '>
                <div className=' flex items-center gap-2'>
                    <h2 className='font-bold'>Get Notified</h2>
                    <img className='w-4' src='/bell.png'/>
                </div>
                <div className='flex items-center justify-center flex-col '>
                <p className='w-7/12 text-center something'>
                  Something really cool is coming for our community.</p>
                  <p className='enter_ pb-3'>Enter your email and we&apos;ll put you on our invite list.</p>
                </div>
                <form onSubmit={handleEmailSubmit} className='flex flex-col gap-5'>
                    <div className='flex gap-2 input-mobile-res-footer'>
                        <input
                            type='text'
                            placeholder='Last Name'
                            required
                            className='rounded'
                            />
                        <input
                            type='text'
                            placeholder='First Name'
                            required
                            className='rounded'
                            />
                      </div>
                      <div className='flex input-email-res-footer h-9 justify-center items-center mobile-respons- gapflex'>
                          <input className='border w-full' 
                              type='email'
                              id="email"
                              name="email"
                              placeholder='Email'
                              value={email}
                              onChange={handleEmailChange}
                              required
                              />
                            <button type='submit' className='cta-button-submit w-1/2 h-9 mobile-respons-'>Let&apos;s Go</button>
                      </div>

                  </form>
            </div>
        </div>

        <div className='w-1/2 black-color-bg p-6 right_footer '>

            <div className='p-4 white-color-text items-center '>
                <h1 className='white-color-text page_title'>GET IN TOUCH</h1>
            </div>

            <form onSubmit={handleSubmit} className='black-color-bg flex flex-col items-center contact_us gap-7'>
                <input 
                    placeholder='Enter Full Name' 
                    type='text'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full rounded'
                    />
                <input 
                    placeholder='Enter Email Address' 
                    type='email'
                    require
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full rounded'
                    />
                <textarea className='text_box p-2 mt-4 w-full rounded' 
                    placeholder='Type Message...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    
                    />
                <button type='submit' className='cta-button mt-10'>Send Message</button>
            </form>
            
        </div>

    </section>
  )
}

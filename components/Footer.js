"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import ThankYouPopup from './ThankYouPopup';
import {TfiEmail} from 'react-icons/tfi'
import {BsFacebook, BsTwitter} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import { BsTiktok } from 'react-icons/bs'
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [last_name, setLastName] = useState('');
    const [first_name, setFirstName] = useState('');

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const GoEmail = () => {
        // Redirect the user to the specified link
            window.location.href ='mailto:socailinsure.org@gmail.com';
      };
      const GoFacebook = () => {
        // Redirect the user to the specified link
        window.open('https://www.facebook.com', '_blank'); // Replace with your desired link
      };
      const GoInstagram = () => {
        // Redirect the user to the specified link
        window.open('https://www.instagram.com', '_blank'); // Replace with your desired link
      };
        const GoTwitter = () => {
        // Redirect the user to the specified link
        window.open('https://twitter.com', '_blank'); // Replace with your desired link
      };
      const GoTiktok = () => {
        // Redirect the user to the specified link
        window.open('https://www.tiktok.com', '_blank'); // Replace with your desired link
      };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    };
    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
    };
  
  
    const handleEmailSubmit = async (event) => {
      event.preventDefault();
  
      //console.log('Email before fetch:', email);
      //console.log('Email before fetch:', first_name);
      //console.log('Email before fetch:', last_name);
      if (!email.trim() || !first_name.trim() || !last_name.trim()) {
        toast('Please fill in all required fields: First Name, Last Name, and Email.');
        return;
      }
  
      try {
        const response = await fetch('/api/mailchimp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, last_name, first_name }),
        });
  
        const data = await response.json();
        //console.log(data); // Log the response from the API
  
        // Optionally, you can show a success message to the user
        if (data.message === 'Email subscribed successfully') {
          toast('Subscribed Successfully...');
          setModalOpen(false);
          setShowPopup(true);
          setEmail('');
        } else if (data.message === 'Already Subscribed') { 
          toast('Email is already subscribed.'); 
        }
          else {
            toast('An error occurred. Please try again.');
        }
      } catch (error) {
        //console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
          });

          if (response.ok) {
            toast("Send Successful...");
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
          } else {
            toast("Send Failed...");
          }
        } catch (error) {
          //console.error(error);
          toast('Error Sending...');
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
                    
                    <BsFacebook onClick={GoFacebook} className='w-6 cursor-pointer hover:text-red-800'/>
                    <FaInstagram onClick={GoInstagram} className='w-6 cursor-pointer hover:text-red-800'/>
                    <BsTwitter onClick={GoTwitter} className='w-6 cursor-pointer hover:text-red-800' />
                    <BsTiktok onClick={GoTiktok} className='w-6 cursor-pointer hover:text-red-800'/>
                    <TfiEmail onClick={GoEmail} className='w-6 cursor-pointer hover:text-red-800'/>
                </div>
            </div>
            <div className='p-10 flex justify-center white-color-bg black-color-text rounded-tl rounded-tr'>
            <motion.button onClick={openModal} className='cta-button big-cta' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>Join The Waiting List</motion.button>
                      {isModalOpen && (
                      <div className={`modal-overlay z-50 ${isModalOpen ? 'active' : ''}`}>
                        <motion.div  className={`modal relative ${isModalOpen ? 'active' : ''}`}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                          duration: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                          scale: {
                          type: "spring",
                          damping: 5,
                          stiffness: 100,
                          restDelta: 0.001
                          }
                           }}
                        >
                          <button className='px-2 hover:bg-red-800 hover:text-white absolute left-5 top-5 border' onClick={closeModal}>X</button>
                          <div className='flex items-center justify-center flex-col '>
                          <p className='w-full text-center something'>
                            Something really cool is coming</p>
                            <p className='something'>for our community.</p>
                            <p className='enter_ pb-3'>Enter your email and we&apos;ll put you on our invite list.</p>
                          </div>
                          <form onSubmit={handleEmailSubmit} className='flex flex-col gap-1'>
                              <div className='flex gap-2 pb-3 f-l-name-mobile-res'>
                                <input
                                type='text'
                                placeholder='Last Name'
                                required
                                className='rounded-md'
                                value={last_name}
                                onChange={handleLastNameChange}
                                />
                                <input
                                type='text'
                                placeholder='First Name'
                                required
                                className='rounded-md'
                                value={first_name}
                                onChange={handleFirstNameChange}
                                />
                              </div>
                              <div className='flex input-email-res-footer h-9 justify-center items-center mt-2 mobile-respons- gapflex'>
                                <input className='border rounded-tl rounded-bl' 
                                  type='email'
                                  id="email"
                                  name="email"
                                  placeholder='Email'
                                  value={email}
                                  onChange={handleEmailChange}
                                  required
                                  
                                  />
                                <button type='submit' className='cta-button-submit h-9 mobile-respons- rounded-tr rounded-br'>Let&apos;s Go</button>
                              </div>

                          </form>
                        </motion.div>
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
                            value={last_name}
                            onChange={handleLastNameChange}
                            />
                        <input
                            type='text'
                            placeholder='First Name'
                            required
                            className='rounded'
                            value={first_name}
                            onChange={handleFirstNameChange}
                            />
                      </div>
                      <div className='flex input-email-res-footer h-9 justify-center items-center mobile-respons- gapflex'>
                          <input className='border w-full rounded-tl rounded-bl' 
                              type='email'
                              id="email"
                              name="email"
                              placeholder='Email'
                              value={email}
                              onChange={handleEmailChange}
                              required
                              />
                            <button type='submit' className='cta-button-submit w-1/2 h-9 mobile-respons- rounded-tr rounded-br'>Let&apos;s Go</button>
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
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full rounded'
                    />
                <textarea className='text_box p-2 mt-4 w-full rounded' 
                    placeholder='Type Message...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    
                    />
                <motion.button type='submit' className='cta-button mt-5' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>Send Message</motion.button>
            </form>
            
        </div>
        <ToastContainer />
    </section>
  )
}

"use client"
import React from 'react'
import { useState } from 'react';

export default function Footer() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const GoEmail = () => {
        // Redirect the user to the specified link
            window.location.href ='mailto:pchhservicesllc@gmail.com';
      };
      const GoFacebook = () => {
        // Redirect the user to the specified link
        window.open('https://www.facebook.com/profile.php?id=100083733096698', '_blank'); // Replace with your desired link
      };
        const GoTwitter = () => {
        // Redirect the user to the specified link
        window.open('https://twitter.com/pchhservicesllc', '_blank'); // Replace with your desired link
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
    <section className='flex res_footer'>
        <div className='w-1/2 black-color-bg left_footer'>
            <div className='p-8 flex justify-start black-color-bg white-color-text items-end'>
                <div className='logo-container'>
                  <img src='/logonobg.png' className='logo'/>
                </div>
                <div className=' flex gap-5 social_media'>
                    <img onClick={GoTwitter} className='w-6 cursor-pointer' src='/twitter.png' alt='twitter'/>
                    <img onClick={GoFacebook} className='w-6 cursor-pointer' src='/facebook.png' alt='facebook'/>
                    <img onClick={GoEmail} className='w-6 cursor-pointer' src='/email.png' alt='email'/>
                </div>
            </div>
            <div className='p-8 flex justify-between cta-color-as-bg black-color-text'>
{/* 
                <div className='flex flex-col'>
                    <h2 className='font-bold mt-2'>Quick Links</h2>
                    <ul className='p-2'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Feactures</li>
                        <li>Contact</li>
                        <li>Get Notified</li>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <h2 className='font-bold mt-2'>Location</h2>
                    <ul className='p-2'>
                        <li>234 Santa Clara</li>
                        <li>123 Freemont Street</li>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <h2 className='font-bold mt-2'>Call Us</h2>
                    <ul className='p-2'>
                        <li>123456789</li>
                        <li>123456789</li>
                    </ul>
                </div> */}
                <h1 className='font-bold white-color-text page_title '>
                    Join The Waiting List
                </h1>
            </div>
            <div className='notification black-color-text p-8'>
                <div className=' flex items-center gap-2'>
                    <h2 className='font-bold'>Get Notified</h2>
                    <img className='w-4' src='/bell.png'/>
                </div>
                <p>Some thing really cool is coming for our community. Enter your email and we&apos;ll put you on our invite list.</p>
                <form onSubmit={handleEmailSubmit}>
                    <input 
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

        <div className='w-1/2 black-color-bg right_footer'>

            <div className='p-8 white-color-text items-center'>
                <h1 className='white-color-text page_title'>Contact Us</h1>
            </div>

            <form onSubmit={handleSubmit} className='black-color-bg flex flex-col items-center gap-8 contact_us'>
                <input 
                    placeholder='Enter Full Name' 
                    type='text'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                <input 
                    placeholder='Enter Email Address' 
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <textarea className='text_box p-2' 
                    placeholder='Type Message...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                <button type='submit' className='cta-button'>Send Message</button>
            </form>
            
        </div>

    </section>
  )
}

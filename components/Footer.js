import React from 'react'


export default function Footer() {
    const message = "Some thing really cool is coming for our community. Enter your email and we&apos;ll put you on our invite list.";
    return (
    <section className='flex res_footer'>
        <div className='w-1/2 black-color-bg left_footer'>
            <div className='p-8 flex justify-start black-color-bg white-color-text items-end'>
                <div className='logo-container'>
                  <img src='/logonobg.png' className='logo'/>
                </div>
                <div className=' flex gap-5 social_media'>
                    <img className='w-6' src='/twitter.png' alt='twitter'/>
                    <img className='w-6' src='/facebook.png' alt='facebook'/>
                    <img className='w-6' src='/email.png' alt='email'/>
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
                <form>
                    <input type='email'/>
                    <button type='submit' className='cta-button-submit'>Let&apos;s Go</button>
                </form>
            </div>
        </div>

        <div className='w-1/2 black-color-bg right_footer'>

            <div className='p-8 white-color-text items-center'>
                <h1 className='white-color-text page_title'>Contact Us</h1>
            </div>

            <form className='black-color-bg flex flex-col items-center gap-8 contact_us'>
                <input placeholder='Enter Full Name' type='text'/>
                <input placeholder='Enter Email Address' type='email'/>
                <textarea className='text_box p-2' placeholder='Type Message...'/>
                <button type='submit' className='cta-button'>Send Message</button>
            </form>
            
        </div>

    </section>
  )
}

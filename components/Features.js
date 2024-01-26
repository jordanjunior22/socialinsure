"use client"
import React from 'react'
import ScrollReveal from './ScrollReveal';

export default function Features() {
  const description = 'Social Insure liaises you with a blend of healthier life-Social Well-being,<br/> Social Kids, Social Patron, Social Entrepreneur, and Social Commune.';
  const about = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

  return (
    <section className='white-color-bg black-color-text feature-bg'>
      <ScrollReveal>
        <h1 className='page_title'> <span className='we'>Features</span> & <span className='we'>Services</span> </h1>
      </ScrollReveal>
      <ScrollReveal>
        <p className='text-center px-2'>Social Insure liaises you with a blend of healthier life-Social Well-being, Social Kids, Social Patron,<br/> Social Entrepreneur, and Social Commune.</p>
      </ScrollReveal>
      <div className='flex flex-col items-center py-10 gap-6'>
       
        <div className='flex items-center justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <div className='flex flex-col items-start '>
              <ScrollReveal>
                <h2 className='font-bold text-xl we'>Social Life</h2>
              </ScrollReveal>
              <ScrollReveal>
                <p className='font-bold sub_heading'>Joining Hands To Help Bereaved Families</p>
              </ScrollReveal>
              <div className='mt-4'>
                <ScrollReveal><h4 className='font-bold '>&apos;Give a token, Help A Lot More&apos;</h4></ScrollReveal>
                <ScrollReveal>
                  <p className='opacity-70'>Social Life allows you to support Living relatives of a dead loved ones.
                  Social Life allows grieving families to enjoy support from the community. 
                  The objective is to bring family members living in the diaspora under an umbrella, in order to reduce donations to $1.25 per adult, and $0.75 per minor relative.
                  <br/>— No more crucifying financial burdens after losing a loved one.</p>
                </ScrollReveal>
              </div>
            </div>
              <img className='h-40' src='/lost.gif' alt='lost'/>
          </div>
        


        
          <div className='flex flex-row-reverse items-center justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
              <div className='flex flex-col items-start '>
                <ScrollReveal>
                  <h2 className='font-bold text-xl we'>Social Health</h2>
                </ScrollReveal>
                <ScrollReveal>
                  <p className='font-bold sub_heading'>Fund healthcare for family & people back home</p>
                </ScrollReveal>
                
                <div className='mt-4'>
                  <ScrollReveal>
                    <h4 className='font-bold '>Everyone deserves healthcare.</h4>
                  </ScrollReveal>
                  
                  <ScrollReveal>
                    <p className='opacity-70'>Social Health allows you to meet a patient, understand their story and decide if you can support. Your donation directly funds life-changing healthcare.<br/>
Let&apos;s make healthcare a reality for everyone. 100% of your donation, funds life <br/> — changing health needs.
— We prove it by being radically transparent.</p>
                  </ScrollReveal>

                </div>
              </div>
              <img className='h-40' src='/health.gif' alt='health'/>
            </div>
        

        
          <div className='flex items-center justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
              <div className='flex flex-col items-start '>
                <ScrollReveal>
                  <h2 className='font-bold text-xl we'>Social Kids</h2>
                </ScrollReveal>

                <ScrollReveal>
                  <p className='font-bold sub_heading'>Better World for Every Child</p>
                </ScrollReveal>

                <div className='mt-4'>
                <ScrollReveal>
                  <h4 className='font-bold '>Children cannot grow and learn without enough Food, Shelter and Hope.</h4>
                </ScrollReveal>
                <ScrollReveal>
                  <p className='opacity-70'>Help save and meaningfully improve more children&apos;s lives by supporting their health and nutrition, education, shelter and hope, for a brighter tomorrow.
                  <br/> Become a guardian and actively be a part of a Kids life or give a One Time support.</p>
                </ScrollReveal>

                </div>
              </div>
              <img className='h-40' src='/kids.gif' alt='kids'/>
            </div>
       

        
          <div className='flex flex-row-reverse items-center justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
              <div className='flex flex-col items-start '>
                <ScrollReveal>
                  <h2 className='font-bold text-xl we'>Social Patronage</h2>
                </ScrollReveal>

                <ScrollReveal>
                  <p className='font-bold sub_heading'>Become a &ldquo;Patron Saint&ldquo;, and a Sponsor </p>
                </ScrollReveal>
                <div className='mt-4'>
                <ScrollReveal>
                  <h4 className='font-bold '>Can &ldquo;pocket change&ldquo; really make a change?</h4>
                </ScrollReveal>
                <ScrollReveal>
                  <p className='opacity-70'>Social Patronage gives you the opportunity to be a person who gives financial, or other form of support to a person, organization, cause or activity you relish. 
<br/>Become a sponsor of a complete project or give a One Time support.</p>
                </ScrollReveal>

                </div>
              </div>
              <img className='h-40' src='/patreon.gif' alt='patreon'/>
            </div>
        

          <div className='flex items-center justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
              <div className='flex flex-col items-start '>
                <ScrollReveal>
                  <h2 className='font-bold text-xl we'>Social Entrepreneur</h2>
                </ScrollReveal>
                <ScrollReveal>
                  <p className='font-bold sub_heading'>Help remarkable people achieve their goals</p>
                </ScrollReveal>
                <div className='mt-4'>
                <ScrollReveal>
                  <h4 className='font-bold '>&ldquo;It takes more than funding to run a successful business. It starts with stepping into footprints of those that have walked a path successfully.&ldquo;</h4>
                </ScrollReveal>
                <ScrollReveal>
                  <p className='opacity-70'>Social Entrepreneur allows you to interact with small business owners back home, review business proposals and make available funds for projects you resonate with. — Our team will do the due diligence.</p>
                </ScrollReveal>
                </div>
              </div>
              <img className='h-40' src='/loan.gif' alt='loan'/>
            </div>
        

 
        <div className='flex flex-row-reverse items-center justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <div className='flex flex-col items-start '>
              <ScrollReveal>
                <h2 className='font-bold text-xl we'>Social Commune</h2>
              </ScrollReveal>
              <ScrollReveal>
                <p className='font-bold sub_heading'>Help and Hope go hand in hand.</p>
              </ScrollReveal>
              <div className='mt-4'>
              <ScrollReveal>
                <h4 className='font-bold '>The Place Where &ldquo;together as one&ldquo; Communal Spirit breeds Hope.</h4>
              </ScrollReveal>
              <ScrollReveal>
                <p className='opacity-70'>Social Commune offers safe avenue to network and meet other African diaspora, and share the hope via crowdfunding mega projects back home, all the while supporting in kind-cutting across geographical, geopolitical and religious boundaries.</p>
              </ScrollReveal>
              </div>
            </div>
            <img className='h-40' src='/commune.gif' alt='commune'/>
          </div>
    

        </div>
    </section>
  )
}

import React from 'react'

export default function Features() {
  const description = 'Social Insure allows you to Social Life, Social Health, Social Kids, Social Patron, Social Entrepreneur, and Social Commune with and for like-minded friends.     ';
  const about = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

  return (
    <section className='white-color-bg black-color-text feature-bg'>
        <h1 className='page_title'> <span className='we'>Features</span> & <span className='we'>Services</span> </h1>
        <p className='text-center px-2'>{description}</p>

        <div className='flex flex-col items-center py-10 gap-6'>

          <div className='flex items-start justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <div className='flex flex-col items-start '>
              <h2 className='font-bold text-xl we'>Social Life</h2>
              <p className='font-bold'>Let&apos;s Join Hands To Help Bereaved Members Families</p>
              <div className='mt-1'>
                <h4 className='font-bold sub_heading'>Give a little, Help a lot!</h4>
                <p className='opacity-70'>Social Life allows you to support Living relatives of a death love one.
                  The aim is to bring all members, living in the diaspora, together under 
                  one umbrella in order to reduce the donation amount of each member to 
                  $1.25 per adult member and about $0.75 per child contribution. 
                  No More Financial Burden After Losing A Loved One.</p>
              </div>
            </div>
            <img className='h-40' src='/lost.png' alt='lost'/>
          </div>

          
          <div className='flex flex-row-reverse items-start justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <div className='flex flex-col items-start '>
              <h2 className='font-bold text-xl we'>Social Health</h2>
              <p className='font-bold'>Fund healthcare for family & people back home</p>
              <div className='mt-1'>
                <h4 className='font-bold sub_heading'>Everyone deserves healthcare.</h4>
                <p className='opacity-70'>Social Health allows you to meet a patient, understand their story and decide if you can support. Your donation directly funds life-changing healthcare.
                  Let's make healthcare a reality for everyone. 100% of your donation, funds life — changing health needs.
                  — We prove it by being radically transparent.</p>
              </div>
            </div>
            <img className='h-40' src='/health.png' alt='health'/>
          </div>

          <div className='flex items-start justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <div className='flex flex-col items-start '>
              <h2 className='font-bold text-xl we'>Social Kids</h2>
              <p className='font-bold'>Better World for Every Child</p>
              <div className='mt-1'>
                <h4 className='font-bold sub_heading'>Children cannot grow and learn without enough Food, Shelter and Hope.</h4>
                <p className='opacity-70'>Help save and meaningfully improve more children&apos;s lives by supporting their health and nutrition, education, shelter and hope, for a brighter tomorrow.
                   Become a guardian and actively be a part of a Kids life or give a One Time support.</p>
              </div>
            </div>
            <img className='h-40' src='/kids.png' alt='kids'/>
          </div>

          <div className='flex flex-row-reverse items-start justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <div className='flex flex-col items-start '>
              <h2 className='font-bold text-xl we'>Social Patronage</h2>
              <p className='font-bold'>Become a &ldquo;Patron Saint&ldquo;, and a Sponsor </p>
              <div className='mt-1'>
                <h4 className='font-bold sub_heading'>Can &ldquo;pocket change&ldquo; really make a change?</h4>
                <p className='opacity-70'>Social Patronage gives you the to opportunity to be a person who gives financial or other support to a person, a organization, a cause, or an activity you admire.
                    Become a sponsor of the entire life cycle or give a One Time support.
                    — We</p>
              </div>
            </div>
            <img className='h-40' src='/patreon.png' alt='patreon'/>
          </div>

          <div className='flex items-start justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <div className='flex flex-col items-start '>
              <h2 className='font-bold text-xl we'>Social Entrepreneur</h2>
              <p className='font-bold'>Help remarkable people achieve their goals</p>
              <div className='mt-1'>
                <h4 className='font-bold sub_heading'>Can &ldquo;pocket change&ldquo; really make a change?</h4>
                <p className='opacity-70'>We&apos;re absolutely sure of it. In fact, you&apos;d be amazed at how far a micro loan can take someone with all the motivation in the world, but little to no resources. 
                  Social Entrepreneur allows you to Interact directly with small business entrepreneurs back home, review their business proposals and fund the projects your resonate with. We do the due diligence.</p>
              </div>
            </div>
            <img className='h-40' src='/loan.png' alt='loan'/>
          </div>

          <div className='flex flex-row-reverse items-start justify-between border border-gray-200 box w-3/4 p-4 white-color-bg gap-3'>
            <div className='flex flex-col items-start '>
              <h2 className='font-bold text-xl we'>Social Commune</h2>
              <p className='font-bold'>Help and Hope go hand in hand.</p>
              <div className='mt-1'>
                <h4 className='font-bold sub_heading'>The place where help and hope go hand in hand.</h4>
                <p className='opacity-70'>Social Commune allows you to network and meet other African diaspora. 
                  Share the Hope through crowdfunding mega projects and supporting kinds back home, 
                  across geographical, geopolitical and religious boundaries.</p>
              </div>
            </div>
            <img className='h-40' src='/commune.png' alt='commune'/>
          </div>
        </div>
    </section>
  )
}

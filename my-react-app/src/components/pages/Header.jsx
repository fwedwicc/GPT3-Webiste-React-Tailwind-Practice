import React from 'react';
import Illustration from '../../assets/header-illustration.png';
import Grid from '../../assets/grid.png';
import Profile1 from '../../assets/profile-1.png';
import Profile2 from '../../assets/profile-2.png';
import Profile3 from '../../assets/profile-3.png';
import Profile4 from '../../assets/profile-4.png';
import ProfileMore from '../../assets/profile-more.png';

function Header() {
  return(
    <section className='' id='home'>
      <div id='header' className='flex'>
        <div id="header-content" className='flex flex-col pt-9 w-1/2'>
          <h1 id='heading' className='text-6xl font-semibold leading-tight'>
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className='mt-4 pr-11'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence 
            way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className='mt-8 flex h-14'>
            <input type="text" placeholder='Your Email Address' id='email-input' className='bg-red w-4/6 pl-4 text-sm' />
            <button className='btn bg-yellow font-medium' id='get-started-btn'>Get Started</button>
          </div>
          <div className='mt-10 flex items-center'>
            <img src={Profile1} alt="Ellipse Profile" className='z-10' id='profile-1' />
            <img src={Profile2} alt="Ellipse Profile" className='z-20' id='profile-2' />
            <img src={Profile3} alt="Ellipse Profile" className='z-30' id='profile-3' />
            <img src={Profile4} alt="Ellipse Profile" className='z-40' id='profile-4'/>
            <img src={ProfileMore} alt="Ellipse Profile" className='z-50' id='profile-more' />
            <h5 className='text-xs ml-4'>1,600 people requested access a visit in last 24 hours</h5>
          </div>
        </div>
        <div id="header-illustration">
          <img src={Illustration} alt="Header Illustration" className='w-4/5' />
        </div>
        <img src={Grid} alt="Header Illustration" className='w-4/5' id='grid' />
      </div>
    </section>
  );
}
export default Header;
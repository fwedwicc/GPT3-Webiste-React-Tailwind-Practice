import React from 'react';

function Navbar() {
  return(
    <div className='flex justify-between items-center p-2.5' id='nav'>
      <div id='left-side'>
        <ul className='flex gap-14 items-center'>
          <li><strong className='text-base'>GTP-3</strong></li>
          <li>Home</li>
          <li>What is GPT?</li>
          <li>Open AI</li>
          <li>Case Studies</li>
          <li>Libraries</li>
        </ul>
      </div>
      <div id='right-side' className='flex justify-between'>
        <button className='btn'>Sign In</button>
        <button id='sign-up-btn' className='bg-yellow font-medium'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
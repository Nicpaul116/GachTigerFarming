import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_header'>
      <div className='navbar_wrap'>
         <div className='navbar_header1'>
         <h1>Gach<span>Tiger</span>'s</h1>
         </div>
         <div className='navbar_links'>
         <p><a href='#Home' className='link1'>Home</a></p>
         <p><a href="#About" className='link7'>About</a></p>
          <p ><a href='#Livestock'className='link2'>Livestock</a></p>
          <p ><a href='#Crops'className='link3'>Crops</a></p>
          <p><a href='#Machines' className='link4'>Machines</a></p>
          <p ><a href='#Blog'className='link5'>Blog</a></p>
          <p><a href='#Contact' className='link6'>Contact</a></p>
         </div>
         <div className='navbar_login'>
         <div className='signin'>
         <h3>Sign-in</h3>
         </div>
          <div className='login'>
          <button>Login</button>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar
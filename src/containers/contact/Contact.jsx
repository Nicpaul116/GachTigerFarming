import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import './contact.css'

const Contact = () => {
  return (
    <div className='container_contact' id='Contact'>
      <div className='contact_wrap'>
        <div className='contact_header'><h1>Contact Us</h1></div>
        <div className='contact_info'>
        <div className='contact_form'>
          <form action="">
            <input type="type" placeholder='Fullname' name='Fullname'  />
            <input type="type" placeholder='Email' name='Email' />
            <input type="type" placeholder='Phone Number' name='Phone Number' />
          </form>
        </div>
        <div className='contact_links'>
          <ul>
            <li><a href="#Facbook" className='icon1'><BsFacebook/></a></li>
            <li><a href="#twitter" className='icon2'><FaTwitterSquare/></a></li>
            <li><a href="#Linkedin" className='icon3'><AiFillLinkedin/></a></li>
          </ul>
        </div>
        </div>
        <div className='contact_info2'>
           <form action="">
           <textarea type="text" placeholder='Message' name='Message' className='message' />
          </form>
          <div className='contact_button'><button>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
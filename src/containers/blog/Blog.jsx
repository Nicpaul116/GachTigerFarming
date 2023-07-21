import React from 'react'
import './blog.css'
import fruits from '../../assets/fruits.jpg'
import FCS from '../../assets/FCS.png'

const Blog = () => {
  return (
    <div className='content_blog'>
      <div className='blog_wrap'>
        <div className='blog_header'>
          <h1>Our Company</h1>
        </div>
        <div className='blog_info'>
          <div className='blog_info1'>
            <p>For many years we have been supplying 
              livestock, crops and machines in many 
              countries in Europe and the rest of the
              world. We are constanlty developing and
              expanding our knowledge about agriculture.
              we encourage the practice of agriculture 
              to learn about the world!. 
            </p>
            <h3>NickpGach@gmail.com</h3>
            <h4>+48 363 599 605</h4>
          </div>
          <div className='blog_info2'>
            <p >We are a cooperative team that will try 
              to answer any duestions about out products.
              For the past years we have been working
              for our customer's satisfaction and trust,
               thats's why many of them come back to us
               when it is necessary to buy more products.
            </p>
          </div>
        </div>
        <div className='blog_info3'>
          <div className='info3_info'>
            <h2>Introduction to fruit farming</h2>
            <p>We've been practicing little by
              little about fruit farming and
              we are confident to start a new 
              project on fruit farming
            </p>
          </div>
         <figure> <img src={fruits} alt="#"  className='blog_img1'/></figure>
        </div>
        <div className='blog_info4'>
          <div className='info4_info'>
            <h2>Join us on our projects</h2>
            <p>We welcome you to the 
              participation in making 
              new ways of farming and
              maintaining fields. We 
              welcome those seaking job
              opportunities as well as
              we are seeking more hands
              in our projects
            </p>
          </div>
          <figure><img src={FCS} alt="#" className='blog_img2'/></figure>
        </div>
      </div>
    </div>
  )
}

export default Blog
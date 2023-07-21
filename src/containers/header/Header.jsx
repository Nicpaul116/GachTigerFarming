import React from 'react'
import './header.css'
import pig from '../../assets/pig.jpg'
import corn from '../../assets/corn.jpg'
import tractor from '../../assets/tractor.jpg'
const Header = () => {
  return (
    <div className='header_wrap'>
      <div className='header_heading'>
        <h1>Gach<span>Tiger</span>'s Farming</h1>
        <p>It is a newly establish company with a goal to satisfy the needs of a customer and provide excellent services</p>
        <button className='header_button'>About Us</button>
      </div>
      <div className='header_images'>
        <div className='pig_content'>
        <figure>
        <img src={pig} alt="pig" className='pig'/>
        </figure>
        <div className='pig_h'><h1>Livestock</h1></div>
        </div>
        <div className='crop_content'>
          <figure>
          <img src={corn} alt="corn"className='corn' />
          </figure>
          <div className='crop_h'><h1>Crops</h1></div>
        </div>
       <div>
        <figure>
        <img src={tractor} alt="tractor"  className='tractor'/>
        </figure>
       </div>
      </div>
    </div>
  )
}

export default Header
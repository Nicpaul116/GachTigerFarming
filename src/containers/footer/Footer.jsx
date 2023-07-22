import React from 'react'
import {DiAndroid} from 'react-icons/di'
import { DiApple } from 'react-icons/di'
import { DiRuby } from 'react-icons/di'
import { DiMozilla } from 'react-icons/di'
import './footer.css'

const Footer = () => {
  return (
   <div className='container_footer'>
     <div className='footer_icons'>
      <ul>
        <li><DiAndroid className='android'/></li>
        <li><DiApple className='Apple'/></li>
        <li><DiRuby className='ruby'/></li>
        <li><DiMozilla className='mozilla'/></li>
      </ul>
    </div>
   </div>
  )
}

export default Footer
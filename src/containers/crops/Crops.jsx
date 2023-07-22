import React from 'react'
import './crops.css'
import { cropsData } from './item'

const Crops = () => {
  return (
    <div className='container_crops' id='Crops'>
      <div className='container_crops_all'>
        <div className='crops_header'><h1>Crops</h1></div>
        <div className='container_crops_wrap'>
          {cropsData.map((crop, index) => {
            return(
              <div className='crops_wrap'>
                <img src={crop.img} alt={crop.alt} className='crops_img' />
                <div className='crops_info'>
                  <h2>{crop.crop}</h2>
                  <h3>{crop.price}</h3>
                  <button className='crops_button'>{crop.button}</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Crops
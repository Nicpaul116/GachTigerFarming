import React from 'react'
import './livestock.css'
import { livestokeData } from './items'


const Livestock = () => {
  return (
    <div className='container_livestock' id='Livestock'>
      <div className='container_livestock_info'>
        <div className='livestock_header'><h1>Livestock</h1></div>
        <div className='container_livestock_wrap'>
          {livestokeData.map((livestoke, index) => {
            return(
              <div key={index} className='livestock_wrap'>
                <img src={livestoke.img} alt={livestoke.alt} className='livestock_img' />
                <div className='livestock_info'>
                  <h3>{livestoke.livestoke}</h3>
                  <p>{livestoke.desc}</p>
                  <h2>{livestoke.price}</h2>
                  <button className='livestock_button'>{livestoke.button}</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Livestock
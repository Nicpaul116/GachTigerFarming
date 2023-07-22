import React from 'react'
import './machines.css'
import { machineData } from './item'

const Machines = () => {
  return (
    <div className='container_machines' id='Machines'>
      <div className='container_machine_wrap'>
        <div className='machine_header'><h1>Machines</h1></div>
        <div className='machine_wrap'>
          {machineData.map((machine, index) =>{
            return(
              <div key={index} className='machine_info'>
                <img src={machine.img} alt={machine.alt} />
                <div className='machine_detail'>
                  <h3>{machine.desc}</h3>
                  <p>{machine.year}</p>
                  <h5>{machine.speed}</h5>
                  <h2>{machine.price}</h2>
                  <button className='machine_button'>{machine.button}</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Machines
import React from 'react'
import './Hero.css'

const Hero = () => {
    const Hero = require('./images/Hero.png')
  return (
   
       <div class="image-container ">
          <img src={Hero} alt="image" className='img'/>
          <div class="overlay-text text-start">
          <p className='text'>We crush your competitors, goals, and sales records - without the B.S.</p>
          <button className='btn text-white'> Get free consultation</button>
          </div>
        
       </div>
            
        

  )
}

export default Hero


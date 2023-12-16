import React from 'react'
import './Homepage.css'

 


const Homepage = () => {
  const Image1 = require('./images/image2.png')
  const Image2 = require('./images/image1.png')
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-6'>
        <img src={Image1} className='img1' />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 description'>
          <p className='Paragraph1'>Web & Mobile App Development</p>
          <p className='normal1'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <button className='btn text-white'>LEARN MORE</button>
        </div>

  
      </div>
  
      <div className='row second_area'>
        
        <div className='col-lg-6 col-md-6  col-sm-6 description2'>
          <p className='Paragraph2 '>Digital Strategy Consulting</p>
          <p className='normal2'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <button className='btn text-white'>LEARN MORE</button>
        </div>
        <div className='col-lg-6 col-md-6  col-sm-6 image2'>
        <img src={Image2} className='img2' />
        </div>
     
      </div>
      <br />

    </div>
  )
}

export default Homepage
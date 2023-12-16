import React from 'react'
import './Footer.css'

const Footer = () => {
    const logo =  require('./images/Secondary_Logo.png')
    const D =  require('./images/D.png')
    const I =  require('./images/I.png')
    const G =  require('./images/G.png')
    const T =  require('./images/T.png')
    const A =  require('./images/A.png')
    const L =  require('./images/L.png')

  return (

    <div className='cover'>
      <footer className="row  row-cols-md-5 py-5 my-5 border-top">
      <div className="col mb-3 head">
        <a href="#" className="d-flex align-items-center mb-3  text-decoration-none">
          
        <img src={logo} className='Logo' />

        <img src={A} className='LogoA' />
        <img src={T} className='LogoT' />

        <img src={D} className='LogoD' />
        <img src={I} className='LogoI' />
        <img src={G} className='LogoG' />
        <img src={I} className='LogoI2' />
        <img src={T} className='LogoT' />
        <img src={A} className='LogoA' />
        <img src={L} className='LogoL' />
      
      </a>
      <div className="col parag">
      <p >Your goal is our target. Not anything in between.
         We use online marketing platforms and tools to achieve single objective - 
         your business results.</p>
    </div>
    </div>


    <div className="col mb-3 section1">
      <h5 className='text-white title'>Our Technologies</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">ReactJS</a></li>
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">Gatsby</a></li>
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">NextJS</a></li>
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">NodeJS</a></li>
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">GraphJS</a></li>
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">Laravel</a></li>
      </ul>
    </div>

   

    <div className="col mb-2 section2">
      <h5 className='text-white title'>Our Services</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">Social Media Marketing</a></li>
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">Web & Mobile App Development</a></li>
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">Data & Analytics</a></li>
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">Google Marketing solutions</a></li>
        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">Search Engine Optimization</a></li>
      </ul>
    </div>

  
    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
    <hr className='hr'/>
    <p className='  text-center text-white'>Privacy Policy | Terms & Conditions </p>  
    </div>
  </footer>
  </div>
  )
}

export default Footer
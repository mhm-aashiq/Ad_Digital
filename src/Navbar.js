import React, { useState } from 'react'
import './Navbar.css'



const Navbar = () => {
    const logo =  require('./images/Secondary_Logo.png')
    const D =  require('./images/D.png')
    const I =  require('./images/I.png')
    const G =  require('./images/G.png')
    const T =  require('./images/T.png')
    const A =  require('./images/A.png')
    const L =  require('./images/L.png')
  
    
  return (
    
   <nav className="navbar navbar-expand-lg  text-white" >
    <a className="navbar-brand" href="#" >
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
        <div className='toggle' >
        <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
        <span class="navbar-toggler-icon">   

      </span>
  </button>
  </div>
            
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href='#'>SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href='#'>ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href='#'>CONTACT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href='#'>CAREERS</a>
        </li>
        
      </ul>
      
    </div>

</nav>

  )
}

export default Navbar
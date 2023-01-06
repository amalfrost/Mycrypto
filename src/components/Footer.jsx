import React from 'react'
import {FaGithub} from 'react-icons/fa'

import './Navbar.css'
function Footer() {
  return (
    // <Link to={{ pathname: "www.google.com" }} target="_blank">
    

        <div className='footer'>
        <a target="_blank" href="https://github.com/amalfrost" rel="noreferrer"><FaGithub className='icon'/></a>
        <a target="_blank" href="https://github.com/amalfrost" rel="noreferrer"><h4>Amalrj <span className='purple'></span></h4></a>

            
        </div>
    
    // </Link>
  )
}

export default Footer
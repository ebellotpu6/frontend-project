import React from 'react';
import { Router, Link } from 'react-router-dom';

import './index.css'
import logoImage from '../../assets/logo-StarWars.png'

const index = () => {
  /*<Router>
      <div className='title'>
        <Link to="/">      
          <img src={logoImage} alt="" />
        </Link>
      </div>
    </Router>*/
  return (
    <div className='title'>
      <img src={logoImage} alt="" />
    </div>
  )
}

export default index
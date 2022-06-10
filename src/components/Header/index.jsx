import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'
import logoImage from '../../assets/logo-StarWars.png'

const index = () => {
  
  return (
    <div className='title'>
      <Link to="/">      
        <img src={logoImage} alt="" />
      </Link>
    </div>
  )
}

export default index
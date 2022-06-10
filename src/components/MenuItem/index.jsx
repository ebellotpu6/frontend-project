import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const index = ({ name, color }) => {
  return (
    <Link to={`/${name}`} className='menu-item'>
        <img src={`./src/assets/${name}.png`} alt="" />
        <div className='name' style={{color: color}}>{name}</div>
    </Link>
  )
}

export default index
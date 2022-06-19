import React from 'react'

import { ObjectCard2 } from '..';

import './index.css'

const index = ({ title, type, objects }) => {
  return (
    <div className='extra-info-content'>
        <div className='header'>{title}</div>
        <div className='body'>
          {(objects.length === 0) ? "There are no related items for this category" : 
            objects.map((object) => (
              <ObjectCard2 key={object} url={object} type={type}></ObjectCard2>
            ))
          } 
        </div>
    </div>
  )
}

export default index
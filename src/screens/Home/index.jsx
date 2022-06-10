import React, {useState, useEffect} from 'react'

import { MenuItem } from '../../components';

import './index.css';

const Home = () => {
  return (
    <div className='menu'>
      <MenuItem name={"characters"} color={"#FFFFFF"}/>
      <MenuItem name={"films"} color={"#FFEE58"}/>
      <MenuItem name={"species"} color={"#90CAF9"}/>
      <MenuItem name={"starships"} color={"#E53935"}/>
      <MenuItem name={"vehicles"} color={"#FFFFFF"}/>
      <MenuItem name={"planets"} color={"#FFEE58"}/>
    </div>
  );
}

export default Home
import React from 'react';

import { ObjectLink, numberWithCommas } from '..';

import './index.css';

const index = ({ residents, rotation_period, orbital_period, diameter, gravity, terrain, surface_water, climate }) => {
  return (
    <>   
        <div><b>Population:</b> {(residents.length === 0) ? 
        "Unpopulated" : 
        residents.map((resident, index) => (
            <ObjectLink key={resident} url={resident} type="people" index={index} length={residents.length-1}></ObjectLink>
        ))} 
        </div>
        <div><b>Rotation Period:</b> {rotation_period} days</div>
        <div><b>Orbital Period:</b> {orbital_period} days</div>
        <div><b>Diameter:</b> {numberWithCommas(diameter)} Km</div>
        <div><b>Gravity:</b> {numberWithCommas(gravity)}</div>
        <div><b>Terrain:</b> {terrain}</div>
        <div><b>Surface Water:</b> {numberWithCommas(surface_water)}%</div>
        <div><b>Climate:</b> {climate}</div>
    </>
  )
}

export default index
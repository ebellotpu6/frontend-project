import React from 'react'

import { ObjectLink } from '..'

import './index.css'

const index = ({ birth_year, species, height, mass, gender, skin_color, hair_color, eye_color, homeworld }) => {
  return (
    <>
        <div><b>Birth Year:</b> {birth_year}</div>
        <div><b>Spices:</b> {(species || species.length === 0) ? 
        "Unknow" : 
        species.map((specie, index) => (
            <ObjectLink key={specie} url={specie} type="species" index={index} length={species.length-1}></ObjectLink>
        ))} 
        </div>
        <div><b>Height:</b> {height} cm</div>
        <div><b>Mass:</b> {mass} Kg</div>
        <div><b>Gender:</b> {gender}</div>
        <div><b>Skin color:</b> {skin_color}</div>
        <div><b>Hair color:</b> {hair_color}</div>
        <div><b>Eye color:</b> {eye_color}</div>
        <div><b>Homeworld:</b> <ObjectLink url={homeworld} type="planets"></ObjectLink></div>
    </>
  )
}

export default index
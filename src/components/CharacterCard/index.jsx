import React from 'react'

import './index.css';

const CharacterCard = ({ type, name, gender, height, mass, hair_color, skin_color, url}) => {
  let id = url.replace(`https://swapi.dev/api/${type}/`,'').replace('/','');
  if(type === "people") type = "characters";
  return (
    <div className='character-card'>
      <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}></img>
      <div>{name}</div>
    </div> 
  )
}

export default CharacterCard
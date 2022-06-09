import React from 'react'

import './index.css';

const CharacterCard = ({name, gender, height, mass, hair_color, skin_color, url}) => {
  let id = url.replace('https://swapi.dev/api/people/','').replace('/','');
  return (
    <div className='character-card'>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}></img>
      <div>{name}</div>
    </div> 
  )
}

export default CharacterCard
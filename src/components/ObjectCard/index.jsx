import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const CharacterCard = ({ type, name, title, url}) => {
  const api_img = type;
  if(type === "characters") type = "people";
  let id = url.replace(`https://swapi.dev/api/${type}/`,'').replace('/','');
  return (
    <Link to={`/${api_img}/${id}`} className='object-card'>
      <img src={`https://starwars-visualguide.com/assets/img/${api_img}/${id}.jpg`} 
          onError={(e) => (e.target.onerror = null, e.target.src = (type === "starships" || type === "vehicles") ? "../../src/assets/default-short-image.jpg" : (type === "planets") ? "../../src/assets/default-middle-image.jpg" : "../../src/assets/default-image.jpg")}/>
      <div>{(type === "films") ? title : name}</div>
    </Link> 
  )
}

export default CharacterCard
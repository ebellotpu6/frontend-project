import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Loading }  from '..';

import './index.css'

const index = ({ url, type }) => {
  const [objectData, setObjectData] = useState(null);
  const api_img = type;
  if(type === "characters") type = "people";
  let id = url.replace(`https://swapi.dev/api/${type}/`,'').replace('/','');

  const loadData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setObjectData(json);
  }

  useEffect(() => {
    loadData();
  }, [objectData]);

  if(objectData === null) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <Link to={`/${api_img}/${id}`} className='object-card2'>
      <img src={`https://starwars-visualguide.com/assets/img/${api_img}/${id}.jpg`} 
          onError={(e) => (e.target.onerror = null, e.target.src = (type === "starships" || type === "vehicles") ? "../../src/assets/default-short-image.jpg" : (type === "planets") ? "../../src/assets/default-middle-image.jpg" : "../../src/assets/default-image.jpg")}/>
      <div>{(type === "films") ? objectData.title : objectData.name}</div>
    </Link> 
  )
}

export default index
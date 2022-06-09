import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import { CharacterCard, Loading, Header } from '../../components';

const ObjectList = () => {
  const params = useParams();
  const [objectData, setObjectData] = useState(null);

  const loadData = async () => {
    const response = await fetch(`https://swapi.dev/api/${params.type}`);
    const json = await response.json();
    setObjectData(json);
  }

  const prevPage = async () => {
    const response = await fetch(objectData.previous);
    const json = await response.json();
    setObjectData(json);
  }

  const nextPage = async () => {
    const response = await fetch(objectData.next);
    const json = await response.json();
    setObjectData(json);
  }

  useEffect(() => {
    loadData();
  }, []);

  if(objectData === null) {
    return (
      <div>
        <Loading/>
      </div>
    );
  }

  return (
    <div>
      <div className='main-container'>
        <div className='pagination'>
        { objectData.previous ? (
          <button onClick={prevPage}>Prev Page</button>
        ) : "" }
        { objectData.next ? (
          <button onClick={nextPage}>Next Page</button>
        ) : "" }
        </div>
        <div className='searchResult'>
          {objectData.results.map((character) => (
            <CharacterCard key={character.name} {...character} type={params.type}></CharacterCard>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default ObjectList
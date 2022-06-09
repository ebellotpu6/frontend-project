import React, {useState, useEffect} from 'react'

import CharacterCard from '../../components/CharacterCard';
import Loading from '../../components/Loading';

import './index.css';

const Home = () => {
  const [objectData, setObjectData] = useState(null);

  const loadData = async () => {
    const response = await fetch("https://swapi.dev/api/people");
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
        <div className="stars"></div>
        <div className="twinkling"></div>
        <Loading/>
      </div>
    );
  }

  return (
    <div>
      <div className="stars"></div>
      <div className="twinkling"></div>
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
            <CharacterCard key={character.name} {...character}></CharacterCard>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default Home